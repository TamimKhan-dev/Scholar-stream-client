import ManageApplicationsDataRow from "../../../components/Dashboard/TableRows/ManageApplicationsDataRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageApplications = () => {
  const axiosSecure = useAxiosSecure();
  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure("/applications");
      return res.data;
    },
  });

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        <thead>
          <tr>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Applicant Name
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Applicant Email
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              University Name
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Application Feedback
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Application Status
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Payment Status
            </th>
            <th className="text-xs font-medium text-gray-600 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <ManageApplicationsDataRow key={app._id} app={app} refetch={refetch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageApplications;
