import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Users = lazy(() => import("../pages/Users"));
const UserForm = lazy(() => import("../pages/UserForm"));

const UserRoutes = [
  {
    path: "/user",
    children: [
      {
        path: "list",
        element: <Suspense fallback={<SuspenseLoader />}><Users /></Suspense>,
      },
      {
        path: "form/:id?",
        element: <Suspense fallback={<SuspenseLoader />}><UserForm /></Suspense>,
      },
    ],
  },
];

export default UserRoutes;