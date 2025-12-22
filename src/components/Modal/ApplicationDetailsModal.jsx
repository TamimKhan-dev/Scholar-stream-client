import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { format } from "date-fns";
import LoadingSpinner from "../Shared/LoadingSpinner";

const ApplicationDetailsModal = ({ isDetailsOpen, setIsDetailsOpen, app }) => {
  function close() {
    setIsDetailsOpen(false);
  }
  const axiosSecure = useAxiosSecure();
  const { data: scholarship = {}, isLoading } = useQuery({
    queryKey: ["scholarship", app.scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure(`/scholarships/${app.scholarshipId}`);
      return res.data;
    },
  });
  const { data: user = {} } = useQuery({
    queryKey: ["user", app.userId],
    queryFn: async () => {
      const res = await axiosSecure(`/users/${app.userEmail}`);
      return res.data;
    },
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "rejected":
        return "bg-red-100 text-red-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const date = format(new Date(scholarship.postDate), "dd/MM/yyyy");

  return (
    <>
      <Dialog
        open={isDetailsOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={close}
      >
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 z-50 w-full overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full relative max-w-5xl rounded-2xl bg-white shadow-2xl lg:max-h-none max-h-[90vh] overflow-y-auto duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {/* Close Button */}
              <button
                onClick={close}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Close"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl z-10">
                <DialogTitle
                  as="h2"
                  className="text-xl sm:text-2xl font-bold text-gray-900"
                >
                  Application Details
                </DialogTitle>
              </div>

              {/* Content */}
              <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Applicant Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Applicant Details
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">Name:</span> {user.name}
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex flex-col items-center">
                    <img
                      src={user.imageURL}
                      alt="Profile"
                      className="w-48 h-48 sm:w-56 sm:h-56 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Profile Picture
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Status Overview</h3>
                    <p>
                      <span className="font-semibold mr-2">
                        Application Status:
                      </span>
                      <span
                        className={`${getStatusBadgeClass(
                          app.applicationStatus
                        )} px-3 py-1 rounded-full`}
                      >
                        {app.applicationStatus}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold mr-2">
                        Payment Status:
                      </span>
                      <span
                        className={`${
                          app.paymentStatus === "paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        } px-3 py-1 rounded-full`}
                      >
                        {app.paymentStatus}
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">Feedback</h3>
                    <p className="border-3 overflow-y-auto px-4 py-2 text-gray-600 border-gray-500 bg-gray-200 rounded-3xl min-h-32 max-h-32">
                      {app?.feedback || "No feedback yet!"}
                    </p>
                  </div>
                </div>

                {/* Right Column - Scholarship Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Scholarship Details
                    </h3>

                    {/* Scholarship Title and University */}
                    <div className="mb-4">
                      <h4 className="text-base font-bold text-gray-900">
                        {scholarship.scholarshipName}
                      </h4>
                      <p className="text-sm text-gray-700">
                        {scholarship.universityName}
                      </p>
                    </div>

                    {/* University Image */}
                    <img
                      src={scholarship.universityImage}
                      alt="University"
                      className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-md mb-4"
                    />

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                      <div>
                        <p className="font-semibold">Country:</p>
                        <p className="text-gray-700">
                          {scholarship.universityCountry}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Category:</p>
                        <p className="text-gray-700">
                          {scholarship.scholarshipCategory}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">City:</p>
                        <p className="text-gray-700">
                          {scholarship.universityCity}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Degree:</p>
                        <p className="text-gray-700">{scholarship.degree}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Rank:</p>
                        <p className="text-gray-700">
                          #{scholarship.universityRank}
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold">Subject:</p>
                        <p className="text-gray-700">
                          {scholarship.subjectCategory}
                        </p>
                      </div>
                    </div>

                    {/* Financials */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Financials
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-semibold">Tuition Fees:</p>
                          <p className="text-gray-700">
                            ${scholarship.tuitionFees}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Application Fees:</p>
                          <p className="text-gray-700">
                            ${scholarship.applicationFees}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Service Charge:</p>
                          <p className="text-gray-700">
                            ${scholarship.serviceCharge}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Dates */}
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">Dates</h4>
                      <div className="space-y-2 text-sm">
                        <p>
                          <span className="font-semibold">
                            Application Deadline:
                          </span>{" "}
                          {scholarship.applicationDeadline}
                        </p>
                        <p>
                          <span className="font-semibold">Post Date:</span>{" "}
                          {date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ApplicationDetailsModal;
