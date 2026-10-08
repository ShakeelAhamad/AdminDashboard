import { Navigate, Route, Routes,useRoutes } from 'react-router-dom'
import AuthRoutes from "./routes/Auth.routes";
import OtherRoutes from "./routes/Other.routes";

function App() {
    const allRoutes = [
    ...AuthRoutes,
    ...OtherRoutes,
  ];
   const routes = useRoutes(allRoutes);
  console.log("allRoutes", allRoutes);
  return (
    <>
      <div>
       {routes}
      </div>
    </>
  )
}

export default App
