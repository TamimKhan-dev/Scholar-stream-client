import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApplicationDetailsModal = ({ isOpen, setIsOpen, app }) => {
  const axiosSecure = useAxiosSecure();
  const { data: scholarship = {} } = useQuery({
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

  return (
    <dialog className="bg-gray-100 p-4 flex items-center justify-center">
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Modal Container */}
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Application Details
                </h2>
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
                      src={scholarship?.universityImage}
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
                          {scholarship.universityRank}
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
                            {scholarship.tuitionFees}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Application Fees:</p>
                          <p className="text-gray-700">
                            {scholarship.applicationFees}
                          </p>
                        </div>
                        <div>
                          <p className="font-semibold">Service Charge:</p>
                          <p className="text-gray-700">
                            {scholarship.serviceCharge}
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
                          {scholarship.postDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex justify-end rounded-b-2xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-primary cursor-pointer text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ApplicationDetailsModal;
