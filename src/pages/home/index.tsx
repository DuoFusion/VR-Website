import { Fragment } from "react";
import HeroBanner from "./HeroBanner";
import Workshop from "./Workshop";
import About from "./About";
import Courses from "./Courses";
import Faq from "./Faq";
import Testimonial from "./Testimonial";
import Blogs from "./Blogs";
import Achievements from "./Achievements";

const Home = () => {
  return (
    <Fragment>
      <HeroBanner />
      <Workshop />
      <About />
      <Courses />
      <Faq />
      <Testimonial />
      <Blogs />
      <Achievements />
    </Fragment>
  );
};

export default Home;
