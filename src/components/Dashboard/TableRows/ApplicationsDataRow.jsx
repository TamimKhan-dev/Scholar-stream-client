import DeleteModal from "../../Modal/DeleteModal";
import UpdatePlantModal from "../../Modal/EditScholarship";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ApplicationsDataRow = ({ app }) => {
  const axiosSecure = useAxiosSecure();
  const { data: scholarship = {} } = useQuery({
    queryKey: ["scholarship", app.scholarshipId],
    queryFn: async () => {
      const res = await axiosSecure(`/scholarships/${app.scholarshipId}`);
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

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900">{app.universityName}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">
          {scholarship.universityCity}, {scholarship.universityCountry}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">Indoor</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">{scholarship.subjectCategory}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 ">${scholarship.applicationFees}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className={`text-gray-900 w-fit py-0.5 px-3 rounded-full ${getStatusBadgeClass(app.applicationStatus)}`}>{app.applicationStatus}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div className="flex gap-1">
            <button className="text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-primary text-white">Details</button>
            <button className={`text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-blue-500 text-white ${app.applicationStatus !== 'pending' && 'hidden'}`}>Edit</button>
            <button className={`text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-secondary text-white ${(app.applicationStatus !== 'pending' || app.paymentStatus === 'paid') && 'hidden'}`}>Pay</button>
            <button className={`text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-red-600 text-white ${app.applicationStatus !== 'pending' && 'hidden'}`}>Delete</button>
            <button className={`text-sm h-7 px-3 py-1 rounded-sm cursor-pointer bg-green-600 text-white ${app.applicationStatus !== 'completed' && 'hidden'}`}>Add Review</button>
          </div>
      </td>
    </tr>
  );
};

export default ApplicationsDataRow;
