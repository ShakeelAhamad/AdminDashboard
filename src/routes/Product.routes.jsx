import { lazy, Suspense } from "react";
import SuspenseLoader from "../components/SuspenseLoader";
const Products = lazy(() => import("../pages/Products"));
const ProductForm = lazy(() => import("../pages/ProductForm"));

const ProductRoutes = [
  {
    path: "/product",
    children: [
      { 
        path: "list",
        element: <Suspense fallback={<SuspenseLoader />}><Products /></Suspense>,
      },
      {
        path: "form/:id?",
        element: <Suspense fallback={<SuspenseLoader />}><ProductForm /></Suspense>,
      },
    ],
  },
];
export default ProductRoutes;