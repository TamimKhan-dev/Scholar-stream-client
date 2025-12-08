import React from "react";
import Container from "../../components/Shared/Container";
import ScholarShipCards from "../../components/AllScholarShips/ScholarShipCards";

const AllScholarships = () => {
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
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:w-full">
            <h4 className="font-semibold text-nowrap">Sort by:</h4>

            <select
              defaultValue="Pick sorting option"
              className="select outline-primary"
            >
              <option selected disabled>
                Select a option
              </option>
              <option>Scholarship Category</option>
              <option>Subject Category</option>
              <option>Location</option>
            </select>
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
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>

        <div className="mb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
            {
                [0, 1, 2, 3, 4, 5].map((college) => <ScholarShipCards key={college} />)
            }
        </div>
      </Container>
    </div>
  );
};

export default AllScholarships;
