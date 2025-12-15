import React, { useState } from "react";
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal";
const ManageApplicationsDataRow = ({ app }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getStatusBadgeClass = (status) => {
    switch (status) {
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
      <td className="px-4 py-4 text-sm text-gray-900 whitespace-nowrap">
        {app.userName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-900 whitespace-nowrap">
        {app.userEmail}
      </td>
      <td className="px-4 py-4 text-sm text-gray-900 whitespace-nowrap">
        {app.universityName}
      </td>
      <td className="px-4 py-4 text-sm text-gray-900 whitespace-nowrap">
        {app.applicationFeedback ? "Feedback given" : "No Feedback yet"}
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <span
          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(
            app.applicationStatus
          )}`}
        >
          {app.applicationStatus}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <span
          className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${getPaymentBadgeClass(
            app.paymentStatus
          )}`}
        >
          {app.paymentStatus}
        </span>
      </td>
      <td className="px-4 py-4 whitespace-nowrap">
        <div className="flex gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="px-3 py-1.5 text-xs cursor-pointer font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
          >
            Details
          </button>
          <button className="px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-700 transition-colors">
            Feedback
          </button>
          <div className="relative">
            <select
              defaultValue="Status update"
              className="select outline-none max-h-8"
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
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          app={app}
        />
      </td>
    </tr>
  );
};

export default ManageApplicationsDataRow;
