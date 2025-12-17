import React, { useState } from "react";
import ApplicationDetailsModal from "../../Modal/ApplicationDetailsModal";
import FeedbackModal from "../../Modal/FeedbackModal";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
const ManageApplicationsDataRow = ({ app, refetch }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

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

  const handleStatusUpdate = async (value) => {
      try{
        await axiosSecure.patch(`/applications/status/${app._id}`, {applicationStatus: value});
        toast.success('Status updated Successfully!');
        refetch();
      }
      catch(err){
        console.log(err.message);
        toast.error('Something went wrong');
      }
  }

  return (
    <tr>
      <td className="text-sm text-gray-900">{app.userName}</td>
      <td className="text-sm text-gray-900">{app.userEmail}</td>
      <td className="text-sm text-gray-900">{app.universityName}</td>
      <td className="text-sm text-gray-900">
        {app.feedback ? "Feedback given" : "No Feedback yet"}
      </td>
      <td>
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusBadgeClass(
            app.applicationStatus
          )}`}
        >
          {app.applicationStatus}
        </span>
      </td>
      <td className="px-4 py-4 ">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full ${getPaymentBadgeClass(
            app.paymentStatus
          )}`}
        >
          {app.paymentStatus}
        </span>
      </td>
      <td className="px-4 py-4">
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
              onChange={(e) => handleStatusUpdate(e.target.value)}
              defaultValue="Status update"
              className="select outline-none min-w-34 max-h-8"
            >
              <option disabled={true}>Status update</option>
              <option value='processing'>Processing</option>
              <option value='completed'>Completed</option>
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
          app={app}
          refetch={refetch}
        />
      </td>
    </tr>
  );
};

export default ManageApplicationsDataRow;
