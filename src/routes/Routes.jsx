import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Profile from "../pages/Dashboard/Common/Profile";
import Statistics from "../pages/Dashboard/Admin/Statistics";
import MyApplications from "../pages/Dashboard/Student/MyApplications";
import ManageScholarships from "../pages/Dashboard/Admin/ManageScholarships";
import Register from "../pages/Register/Register";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import ScholarshipDetails from "../pages/ScholarshipDetails/ScholarshipDetails";
import AddScholarship from "../pages/Dashboard/Admin/AddScholarship";
import PaymentSuccess from "../pages/ScholarshipDetails/PaymentSuccess";
import CancelPayment from "../pages/ScholarshipDetails/PaymentCancelled";
import ManageApplications from "../pages/Dashboard/Moderator/ManageApplications";
import MyReviews from "../pages/Dashboard/Student/MyReviews";
import AllReviews from "../pages/Dashboard/Moderator/AllReviews";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import DashboardIndexRedirect from "./DashboardIndexRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/scholarship/:id",
        element: (
          <PrivateRoute>
            <ScholarshipDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-scholarships",
        Component: AllScholarships,
      },
      {
        path: "scholarship/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "scholarship/payment-cancelled/:scholarshipId",
        element: <CancelPayment />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Register /> },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: DashboardIndexRedirect
      },
      {
        path: 'statistics',
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
      },
      {
        path: "add-scholarship",
        element: (
          <AdminRoute>
            <AddScholarship />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manage-scholarships",
        element: (
          <AdminRoute>
            <ManageScholarships />
          </AdminRoute>
        ),
      },
      {
        path: "manage-applications",
        element: (
          <ModeratorRoute>
            <ManageApplications />
          </ModeratorRoute>
        ),
      },
      {
        path: "all-reviews",
        element: (
          <ModeratorRoute>
            <AllReviews />
          </ModeratorRoute>
        ),
      },
      {
        path: "my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "my-applications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
