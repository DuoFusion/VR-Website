import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import Layout from "../layout";
import Home from "../pages/home";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog/BlogDetails";
import Workshop from "../pages/workshop";
import WorkshopDetails from "../pages/workshop/WorkshopDetails";
// import Error from "../Pages/error";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },

      { path: ROUTES.BLOG.BLOG, element: <Blog /> },
      { path: `${ROUTES.BLOG.BLOG_DETAILS}/:id`, element: <BlogDetails /> },
      
      { path: ROUTES.WORKSHOP.WORKSHOP, element: <Workshop /> },
      { path: `${ROUTES.WORKSHOP.WORKSHOP_DETAILS}/:id`, element: <WorkshopDetails /> },
    ],
  },
  // { path: "*", element: <Error /> },
]);
