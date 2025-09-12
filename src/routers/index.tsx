import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../constants";
import Layout from "../layout";
import Home from "../pages/home";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog/BlogDetails";
import Workshop from "../pages/workshop";
import WorkshopDetails from "../pages/workshop/WorkshopDetails";
import Course from "../pages/course";
import CourseDetails from "../pages/course/CourseDetails";
import ContactUs from "../pages/contactUs/ContactUs";
import WorkshopRegister from "../pages/workshop/WorkshopRegister";
import Error from "../pages/error";
import CourseRegister from "../pages/course/CourseRegister";

export const Router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      
      { path: ROUTES.BLOG.BLOG, element: <Blog /> },
      { path: `${ROUTES.BLOG.BLOG_DETAILS}/:id`, element: <BlogDetails /> },

      { path: ROUTES.WORKSHOP.WORKSHOP, element: <Workshop /> },
      { path: `${ROUTES.WORKSHOP.WORKSHOP_DETAILS}/:id`, element: <WorkshopDetails /> },
      { path: `${ROUTES.WORKSHOP.WORKSHOP_REGISTER}/:id`, element: <WorkshopRegister /> },
      
      { path: ROUTES.COURSE.COURSE, element: <Course /> },
      { path: `${ROUTES.COURSE.COURSE_DETAILS}/:id`, element: <CourseDetails /> },
      { path: `${ROUTES.COURSE.COURSES_REGISTER}/:id`, element: <CourseRegister /> },
      
      { path: ROUTES.CONTACT_US, element: <ContactUs /> },
      
      { path: "*", element: <Error /> },
    ],
  },
]);
