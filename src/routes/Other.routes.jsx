import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Orders = lazy(() => import("../pages/Orders"));
const Profile = lazy(() => import("../pages/Profile"));
const Settings = lazy(() => import("../pages/Settings"));
import MainLayout from "../layout/MainLayout";
import { Navigate } from "react-router-dom";
import UserRoutes from "./User.routes";
import ProductRoutes from "./Product.routes";
import RoleRoutes from "./Role.routes";

const OtherRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Suspense fallback={<SuspenseLoader />}><Dashboard /></Suspense>,
      },
      
      // USER ROUTES
      ...UserRoutes,
      // Product Routes
     ...ProductRoutes,
      {
        path: "/orders",
        element: <Suspense fallback={<SuspenseLoader />}><Orders /></Suspense>,
      },

      {
        path: "/profile",
        element: <Suspense fallback={<SuspenseLoader />}><Profile /></Suspense>,
      },

      {
        path: "/settings",
        element: <Suspense fallback={<SuspenseLoader />}><Settings /></Suspense>,
      },

      // Role Routes
        ...RoleRoutes,
    ],
  },
];

export default OtherRoutes;