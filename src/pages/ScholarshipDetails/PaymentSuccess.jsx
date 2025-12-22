import React from "react";
import Container from "../../components/Shared/Container";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const { scholarshipId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: scholarshipData = {} } = useQuery({
    queryKey: ["scholarship"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/scholarships/${scholarshipId}`);
      return res.data;
    },
  });

  return (
    <div>
      <Container>
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-12">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 sm:w-14 sm:h-14 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600 text-center mb-3">
              Payment Successful
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-center text-gray-700 mb-8">
              Your payment for the scholarship application has been processed
              successfully.
            </p>

            {/* Divider */}
            <hr className="border-gray-300 mb-8" />

            {/* Scholarship Details Section */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Scholarship Details
              </h2>

              <div className="border border-gray-200 rounded-lg p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  {/* University Image */}
                  <div className="shrink-0">
                    <img
                      src={scholarshipData.universityImage}
                      alt="University"
                      className="w-full sm:w-32 h-32 object-cover rounded"
                    />
                    <p className="text-xs text-gray-500 text-center mt-1">
                      universityImage
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex-1 space-y-2 text-sm sm:text-base">
                    <p>
                      <span className="font-bold">Scholarship Name:</span>{" "}
                      {scholarshipData.scholarshipName}
                    </p>
                    <p>
                      <span className="font-bold">University:</span>{" "}
                      {scholarshipData.universityName}
                    </p>
                    <p>
                      <span className="font-bold">Country:</span>{" "}
                      {scholarshipData.universityCountry}
                    </p>
                    <p>
                      <span className="font-bold">City:</span>{" "}
                      {scholarshipData.universityCity}
                    </p>
                    <p>
                      <span className="font-bold">Degree:</span>{" "}
                      {scholarshipData.degree}
                    </p>
                    <p>
                      <span className="font-bold">Category:</span>{" "}
                      {scholarshipData.scholarshipCategory}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mb-8" />

            {/* Amount Paid Section */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Amount Paid
              </h2>

              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  Total Amount Paid:{" "}
                  ${Number(scholarshipData.applicationFees) +
                    Number(scholarshipData.serviceCharge)}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  (Application Fees: ${scholarshipData.applicationFees} +
                  Service Charge: ${scholarshipData.serviceCharge})
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="mt-8">
              <Link
              to='/dashboard/my-applications'
              className="w-full flex justify-center py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-900 transition-colors">
                Go to My Applications
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentSuccess;
