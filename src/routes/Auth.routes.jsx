import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

const AuthRoutes = [
  {
    path: "/login",
    element: <Suspense fallback={<SuspenseLoader />}><Login /></Suspense>,
  },
  {
    path: "/signup",
    element: <Suspense fallback={<SuspenseLoader />}><Signup /></Suspense>,
  },
];

export default AuthRoutes;