import React from "react";
import Container from "../../components/Shared/Container";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <Container>
        <div className="min-h-[40vh] py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8 md:p-12">
            {/* Error Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-500 rounded-full flex items-center justify-center">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 text-center mb-3">
              Payment Failed
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-center text-gray-700 mb-8">
              Your payment could not be processed. Please check your details and
              try again.
            </p>

            {/* Error Details Box */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 sm:p-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="shrink-0">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Error Details
                  </h2>
                  <p className="text-sm sm:text-base text-gray-900">
                    <span className="font-bold">Error Message:</span>{" "}
                    Something went wrong
                  </p>
                </div>
              </div>
            </div>

            {/* Return Button */}
            <div className="mt-8">
              <Link to='/dashboard/my-applications' className="w-full flex justify-center py-3 sm:py-4 bg-primary text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-blue-900 transition-colors">
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentCancelled;
