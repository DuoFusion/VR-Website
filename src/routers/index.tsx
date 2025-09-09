import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import Layout from "../layout";
import Home from "../pages/home";
// import Error from "../Pages/error";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: ROUTES.HOME, element: <Home /> }],
  },
  // { path: "*", element: <Error /> },
]);
