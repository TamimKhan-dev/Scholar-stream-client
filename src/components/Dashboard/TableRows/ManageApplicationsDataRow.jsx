import React, { useState } from "react";
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal";
import FeedbackModal from "../../Modal/FeedbackModal";
const ManageApplicationsDataRow = ({ app }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

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

  const getPaymentBadgeClass = (status) => {
    return status === "paid"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  return (
    <tr
      key={app._id}
      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <td className="px-4 py-4 text-sm text-gray-900">{app.userName}</td>
      <td className="px-4 py-4 text-sm text-gray-900">{app.userEmail}</td>
      <td className="px-4 py-4 text-sm text-gray-900">{app.universityName}</td>
      <td className="px-4 py-4 text-sm text-gray-900">
        {app.feedback ? "Feedback given" : "No Feedback yet"}
      </td>
      <td className="px-4 py-4 ">
        <span
          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(
            app.applicationStatus
          )}`}
        >
          {app.applicationStatus}
        </span>
      </td>
      <td className="px-4 py-4 ">
        <span
          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getPaymentBadgeClass(
            app.paymentStatus
          )}`}
        >
          {app.paymentStatus}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex md:flex-wrap gap-2">
          <button
            onClick={() => setIsDetailsOpen(true)}
            className="px-3 py-1.5 text-xs cursor-pointer font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Details
          </button>
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="px-3 py-1.5 cursor-pointer text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors"
          >
            Feedback
          </button>
          <div className="relative">
            <select
              defaultValue="Status update"
              className="select outline-none min-w-34 max-h-8"
            >
              <option disabled={true}>Status update</option>
              <option>Processing</option>
              <option>Completed</option>
            </select>
          </div>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded hover:bg-red-700 transition-colors">
            Cancel
          </button>
        </div>
        <ApplicationDetailsModal
          setIsDetailsOpen={setIsDetailsOpen}
          isDetailsOpen={isDetailsOpen}
          app={app}
        />
        <FeedbackModal
          setIsFeedbackOpen={setIsFeedbackOpen}
          isFeedbackOpen={isFeedbackOpen}
          id={app._id}
        />
      </td>
    </tr>
  );
};

export default ManageApplicationsDataRow;
