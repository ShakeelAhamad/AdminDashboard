import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Roles = lazy(() => import("../pages/Roles"));
const RoleForm = lazy(() => import("../pages/RoleForm"));

const RoleRoutes = [
  {
    path: "/role",
    children: [
      {
        path: "list",
        element: <Suspense fallback={<SuspenseLoader />}><Roles /></Suspense>,
      },
      { 
        path: "form/:id?",
        element: <Suspense fallback={<SuspenseLoader />}><RoleForm /></Suspense>,
      },
    ],
  },
];
export default RoleRoutes;