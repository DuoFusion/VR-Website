import { Outlet } from "react-router-dom";
import ScrollToTop from "../utils/ScrollToTop";
import { useScrollSmoother } from "../utils/useScrollSmoother";
import Footer from "./footer";
import Header from "./header";
import Loader from "./Loader";
import TapTop from "./TapTop";

const Layout = () => {
  useScrollSmoother();
  ScrollToTop();
  return (
    <>
      <Loader />
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/*======  line Wrap  ======*/}
          <div className="line_wrap">
            <div className="line_item_one" />
            <div className="line_item" />
            <div className="line_item" />
            <div className="line_item" />
            <div className="line_item" />
          </div>
          {/*======  Main  ======*/}
          <main>
            <Outlet />
          </main>
          <Footer />
          <TapTop />
        </div>
      </div>
    </>
  );
};

export default Layout;
