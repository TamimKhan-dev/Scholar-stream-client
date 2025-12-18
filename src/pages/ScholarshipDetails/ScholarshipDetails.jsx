import React from "react";
import Container from "../../components/Shared/Container";
import { GoTrophy } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import ErrorPage from "../../pages/ErrorPage";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import ReviewCards from "../../components/AllScholarShips/ReviewCards";

const ScholarshipDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: scholarship = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["scholarship", id],
    queryFn: async () => {
      const res = await axiosSecure(`/scholarships/${id}`);
      return res.data;
    },
  });
  const { data: loggedInUser } = useQuery({
    queryKey: ["loggedInUser", user.email],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${user.email}`);
      return res.data;
    },
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!scholarship._id) return [];
      const res = await axiosSecure.get(
        `/review/matched/xyz?scholarshipId=${scholarship?._id}`
      );
      return res.data;
    },
    enabled: !!scholarship._id
  });

  const handlePayment = async () => {
    const paymentInfo = {
      scholarshipId: scholarship._id,
      userId: loggedInUser._id,
      userName: loggedInUser.name,
      userEmail: loggedInUser.email,
      universityName: scholarship.universityName,
      scholarshipCategory: scholarship.scholarshipCategory,
      degree: scholarship.degree,
      applicationFees: scholarship.applicationFees,
      serviceCharge: scholarship.serviceCharge,
    };

    try {
      const { data } = await axiosSecure.post("/applications", paymentInfo);

      const stripeRes = await axiosSecure.post("/create-checkout-session", {
        applicationId: data.applicationId,
      });

      window.location.href = stripeRes.data.url;
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }


  return (
    <div>
      <Container>
        <div className="relative w-full h-[400px] rounded-xl mt-8 mb-18 overflow-hidden">
          <img
            src={scholarship.universityImage}
            alt=""
            className="w-full h-full object-start"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent rounded-xl"></div>
          <div className="absolute z-50 left-1/2 -translate-x-[50%] bottom-20 space-y-8">
            <h3 className="text-2xl md:text-4xl text-center font-bold text-white">
              {scholarship.scholarshipName}
            </h3>
            <ul className="flex flex-col gap-2 md:flex-row">
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <GoTrophy /> University World Rank: #{" "}
                {scholarship.universityRank}
              </li>
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <SlCalender /> Deadline: {scholarship.applicationDeadline}
              </li>
              <li className="bg-primary px-3 py-1.5 text-white flex items-center text-nowrap w-fit gap-0.5 rounded-3xl">
                <IoLocationOutline /> Location: {scholarship.universityCity},{" "}
                {scholarship.universityCountry}
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20 xl:flex gap-8">
          {/* About Scholarship section */}
          <div className="w-full mb-8">
            <div className="mb-3">
              <h4 className="text-xl md:text-3xl font-bold mb-3">
                About the Scholarship
              </h4>
              <p className="text-gray-500">
                The {scholarship.scholarshipName} is a prestigious{" "}
                {scholarship.scholarshipCategory} program designed to support
                talented and driven students who demonstrate exceptional
                leadership skills, academic dedication, and a passion for making
                a meaningful impact in their communities. Offered by{" "}
                {scholarship.universityName} in {scholarship.universityCity},{" "}
                {scholarship.universityCountry}, this scholarship provides
                financial support, including coverage of tuition fees and other
                essential expenses, along with mentorship opportunities and
                access to a global network of professionals and scholars. Ideal
                for students pursuing a {scholarship.degree} in{" "}
                {scholarship.subjectCategory}, the {scholarship.scholarshipName}{" "}
                empowers recipients to excel academically while developing the
                skills and connections necessary for long-term success.
                Applications are open until {scholarship.applicationDeadline},
                giving aspiring scholars the chance to join a distinguished
                program that fosters both personal and professional growth.
              </p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 mb-3">
              <div className="bg-gray-100 border-2 w-full border-gray-200 rounded-xl py-2 px-4">
                <h5 className="font-bold">Stipend & Coverage:</h5>
                <p>
                  {scholarship.scholarshipCategory} Tuition + $
                  {scholarship.tuitionFees} Anual Living Stipend
                </p>
              </div>
              <div className="bg-gray-100 border-2 w-full border-gray-200 rounded-xl py-2 px-4">
                <h5 className="font-bold">Application Fees:</h5>
                <p>${scholarship.applicationFees}(Non-refundable)</p>
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="btn w-full bg-primary text-white rounded-lg"
            >
              Apply for Scholarship
            </button>
          </div>

          {/* Scholarship Reviews section */}
          <div>
            <h4 className="text-xl font-bold mb-3">
              Reviews & Experiences ({reviews.length})
            </h4>

            <div className="max-h-96 xl:min-w-[500px] overflow-y-auto space-y-3">
              {reviews.map((review) => (
                <ReviewCards review={review} key={review._id} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ScholarshipDetails;
