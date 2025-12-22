import React from "react";
import Container from "../../components/Shared/Container";
import ScholarShipCards from "../../components/AllScholarShips/ScholarShipCards";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useRef } from "react";

const AllScholarships = () => {
  const scholarships_per_page = 6;
  const axiosSecure = useAxiosSecure();
  const searchInputRef = useRef(null);
  const { loading } = useAuth();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchValue, setSearchValue] = useState(searchInputValue);
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const skip = (currentPage - 1) * scholarships_per_page;
  const { data, isLoading } = useQuery({
    queryKey: [
      "scholarships",
      searchValue,
      filterValue,
      sortValue,
      currentPage,
    ],
    queryFn: async () => {
      const res = await axiosSecure(
        `/scholarships?search=${searchValue}&scholarshipCategory=${filterValue}&sortValue=${
          sortValue || "Latest"
        }&skip=${skip}&limit=${scholarships_per_page}`
      );
      return res.data;
    },
  });
  const scholarships = data?.data || [];
  const totalScholarships = data?.total || 0;
  const totalPages = Math.ceil(totalScholarships / scholarships_per_page);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchValue(searchInputValue);

      return () => clearTimeout(handler);
    }, 500);
  }, [searchInputValue]);

  useEffect(() => {
    if (window.location.hash === "#search") {
      searchInputRef.current?.focus();
    }
  }, [])

  const handleFilter = (e) => {
    setCurrentPage(1);
    if (e.target.value === "All") {
      setFilterValue("");
      return;
    }

    setFilterValue(e.target.value);
  };

  const handleSort = (e) => {
    setCurrentPage(1);
    setSortValue(e.target.value);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Container>
        <div>
          <h2 className="text-2xl md:text-4xl text-center font-bold mt-10">
            All Scholarships
          </h2>
          <p className="text-center text-gray-500 mt-3">
            Explore financial aid opportunities for your future
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-5 md:gap-0 sm:flex-row justify-between mb-8">
          <div className="w-full space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
              <h4 className="font-semibold text-nowrap">Filter:</h4>

              <select
                defaultValue="Select an option"
                className="select outline-primary"
                onChange={handleFilter}
              >
                <option disabled={true}>Select an option</option>
                <option>All</option>
                <option>Full-fund</option>
                <option>Self-fund</option>
                <option>Partial</option>
              </select>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full">
              <h4 className="font-semibold text-nowrap mr-2">Sort:</h4>

              <select
                defaultValue="Sort by post date"
                className="select outline-primary"
                onChange={handleSort}
              >
                <option disabled={true}>Sort by post date</option>
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>
          </div>

          <div className="w-full flex sm:justify-end sm:mr-0">
            <label className="input outline-primary">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                ref={searchInputRef}
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>

        <div className="mb-5">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
              {scholarships.map((scholarship) => (
                <ScholarShipCards
                  key={scholarship._id}
                  scholarship={scholarship}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mb-9 flex justify-center flex-wrap gap-3 items-center">
          {[...Array(totalPages).keys()].map((num) => {
            const page = num + 1;
            return (
              <button
                className={`px-4 py-2 cursor-pointer rounded ${
                  currentPage === page ? "bg-primary text-white" : "bg-gray-200"
                }`}
                key={page}
                onClick={() => setCurrentPage(page)}
                disabled={isLoading}
              >
                {page}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default AllScholarships;
