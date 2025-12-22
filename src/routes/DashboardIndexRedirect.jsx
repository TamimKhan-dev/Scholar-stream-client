import { Navigate } from "react-router";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../components/Shared/LoadingSpinner";

const DashboardIndexRedirect = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) return <LoadingSpinner />;

  if (role === "admin") return <Navigate to="/dashboard/statistics" replace />; 
  if (role === "moderator") return <Navigate to="/dashboard/manage-applications" replace />;
  return <Navigate to="/dashboard/my-applications" replace />;
};

export default DashboardIndexRedirect;