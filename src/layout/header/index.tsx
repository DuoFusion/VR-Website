import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Queries } from "../../api";
import UseStickyBar from "../../utils/useStickyBar";

const Header = () => {
  const [isOpen, setOpen] = useState(false); // Mobile menu toggle
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null); // Track open submenu
  const fix = UseStickyBar(200);
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
                <ul className="social-link">
                  {WebSetting?.socialMedia?.facebook && (
                    <li>
                      <Link to={WebSetting?.socialMedia?.facebook}>
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                  )}
                  {WebSetting?.socialMedia?.twitter && (
                    <li>
                      <Link to={WebSetting?.socialMedia?.twitter}>
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                  )}
                  {WebSetting?.socialMedia?.linkedin && (
                    <li>
                      <Link to={WebSetting?.socialMedia?.linkedin}>
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  )}
                  {WebSetting?.socialMedia?.youtube && (
                    <li>
                      <Link to={WebSetting?.socialMedia?.youtube}>
                        <i className="fab fa-youtube" />
                      </Link>
                    </li>
                  )}
                  {WebSetting?.socialMedia?.instagram && (
                    <li>
                      <Link to={WebSetting?.socialMedia?.instagram}>
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                  )}
                </ul>
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
                <img src="assets/images/logo/logo-main.png" alt="Brand Logo" />
              </a>
            </div>

            {/*=== Sasly Main Menu===*/}
            <div className={`sasly-nav-menu ${isOpen ? "menu-on" : ""}`}>
              <div className="sasly-menu-top d-flex justify-content-between d-block d-lg-none">
                <div className="site-branding">
                  <a href="index.html" className="brand-logo">
                    <img src="assets/images/logo/logo-main-two.png" alt="Brand Logo" />
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
                    <a href="index.html">Home</a>
                  </li>

                  <li className={`menu-item has-children ${activeSubMenu === "workshop" ? "sub-menu-open" : ""}`}>
                    <a href="#" onClick={() => handleSubMenuToggle("workshop")}>
                      Workshop
                      <span className="dd-trigger">
                        <i className="fas fa-angle-down" />
                      </span>
                    </a>
                    {activeSubMenu ? (
                      <ul className="sub-menu" style={{ display: activeSubMenu === "workshop" ? "block" : "none" }}>
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="event-details.html">Events Details</a>
                        </li>
                        <li>
                          <a href="faqs.html">Faqs</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    ) : (
                      <ul className="sub-menu">
                        <li>
                          <a href="events.html">Events</a>
                        </li>
                        <li>
                          <a href="event-details.html">Events Details</a>
                        </li>
                        <li>
                          <a href="faqs.html">Faqs</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    )}
                  </li>

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
                    <a href="#">Blog</a>
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
                <ul className="social-link">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
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
