import ManageApplicationsDataRow from "../../../components/Dashboard/TableRows/ManageApplicationsDataRow";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageApplications = () => {
  const axiosSecure = useAxiosSecure();
  const { data: applications = [] } = useQuery({
    queryKey: ['applications'],
    queryFn: async () => {
      const res = await axiosSecure('/applications');
      return res.data;
    }
  });

  return (
    <div className="bg-white p-4 sm:p-6 shadow rounded-lg">
      {/* Table Container with Horizontal Scroll */}
      <div className="overflow-x-auto">
        <table className="table border-collapse w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Applicant Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Applicant Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                University Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Application Feedback
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Application Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => <ManageApplicationsDataRow key={app._id} app={app} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageApplications;
