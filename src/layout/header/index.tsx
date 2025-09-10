import { useEffect, useState } from "react";
import { Queries } from "../../api";
import UseStickyBar from "../../utils/useStickyBar";
import { ImagePath, ROUTES } from "../../constants";
import { SocialLinks } from "../../coreComponents";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false); // Mobile menu toggle
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // Track open submenu
  const fix = UseStickyBar(200);

  const { data: Workshop } = Queries.useGetWorkshop({ featuresFilter: true });
  const All_Workshop = Workshop?.data;
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const handleSubMenuToggle = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };
  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 992) setActiveSubMenu(null);
  }, []);

  return (
    <header className="header-area header-four">
      {/*====  Header Top  ===*/}
      <div className="header-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="top-left">
                <span>
                  <i className="fas fa-envelope" />
                  <Link to={`mailto:${WebSetting?.email}`}>mailto:{WebSetting?.email}</Link>
                </span>
                <span>
                  <i className="fas fa-phone" />
                  <Link to={`tel:${WebSetting?.phoneNumber}`}>Call : {WebSetting?.phoneNumber}</Link>
                </span>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="top-right">
                <SocialLinks socialMedia={WebSetting?.socialMedia} variant="list" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*====  Header Navigation  ===*/}
      <div className={`header-navigation ${fix ? "sticky" : ""}`}>
        <div className="nav-inner-menu">
          <div className="primary-menu">
            {/*====  Site Branding  ===*/}
            <div className="site-branding">
              <a href="index.html" className="brand-logo">
                <img src={`${ImagePath}logo/logo-main.png`} alt="Brand Logo" />
              </a>
            </div>

            {/*=== Sasly Main Menu===*/}
            <div className={`sasly-nav-menu ${isOpen ? "menu-on" : ""}`}>
              <div className="sasly-menu-top d-flex justify-content-between d-block d-lg-none">
                <div className="site-branding">
                  <a href="index.html" className="brand-logo">
                    <img src={`${ImagePath}logo/logo-main-two.png`} alt="Brand Logo" />
                  </a>
                </div>
                <div className="navbar-close" onClick={() => setOpen(false)}>
                  <i className="fas fa-times" />
                </div>
              </div>

              {/*=== Main Menu ===*/}
              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <Link to={ROUTES.HOME}>Home</Link>
                  </li>
                  {All_Workshop?.totalData !== 0 && (
                    <li className={`menu-item has-children ${activeSubMenu === "workshop" ? "sub-menu-open" : ""}`}>
                      <Link to={ROUTES.WORKSHOP.WORKSHOP} onClick={() => handleSubMenuToggle("workshop")}>
                        Workshop
                        <span className="dd-trigger">
                          <i className="fas fa-angle-down" />
                        </span>
                      </Link>
                      {activeSubMenu ? (
                        <ul className="sub-menu" style={{ display: activeSubMenu === "workshop" ? "block" : "none" }}>
                          {All_Workshop?.workshop_data?.map((item, index) => (
                            <li key={index}>
                              <Link to={`${ROUTES.WORKSHOP.WORKSHOP_DETAILS}/${item?._id}`} className="one-lines">{item?.title}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className="sub-menu">
                          {All_Workshop?.workshop_data?.map((item, index) => (
                            <li key={index}>
                              <Link to={`${ROUTES.WORKSHOP.WORKSHOP_DETAILS}/${item?._id}`} className="one-lines">{item?.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )}

                  <li className={`menu-item has-children ${activeSubMenu === "course" ? "sub-menu-open" : ""}`}>
                    <a href="#" onClick={() => handleSubMenuToggle("course")}>
                      Course{" "}
                      <span className="dd-trigger">
                        <i className="fas fa-angle-down" />
                      </span>
                    </a>
                    {activeSubMenu ? (
                      <ul className="sub-menu" style={{ display: activeSubMenu === "course" ? "block" : "none" }}>
                        <li>
                          <a href="courses.html">Our Course</a>
                        </li>
                        <li>
                          <a href="course-details.html">Course Details</a>
                        </li>
                      </ul>
                    ) : (
                      <ul className="sub-menu">
                        <li>
                          <a href="courses.html">Our Course</a>
                        </li>
                        <li>
                          <a href="course-details.html">Course Details</a>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li className="menu-item">
                    <Link to={ROUTES.BLOG.BLOG}>Blog</Link>
                  </li>
                  <li className="menu-item">
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </nav>

              {/*=== Sasly Nav Button ===*/}
              <div className="sasly-nav-button mt-20 d-block d-md-none">
                <a href="contact.html" className="theme-btn style-one">
                  Get A Quote <i className="fas fa-angle-double-right" />
                </a>
              </div>

              {/*=== Sasly Menu Bottom ===*/}
              <div className="sasly-menu-bottom mt-50 d-block d-lg-none">
                <h5>Follow Us</h5>
                <SocialLinks socialMedia={WebSetting?.socialMedia} variant="list" />
              </div>
            </div>

            {/*=== Header Nav Right ===*/}
            <div className="nav-right-item">
              <div className="nav-button d-none d-md-block">
                <a href="contact.html" className="theme-btn style-one">
                  Get A Quote <i className="fas fa-angle-double-right" />
                </a>
              </div>

              {/* Mobile menu toggler */}
              <div className={`navbar-toggler ${isOpen ? "active" : ""}`} onClick={() => setOpen(!isOpen)}>
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
