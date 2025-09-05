import { useState } from "react";
import "../public/assets/fonts/flaticon/flaticon_sasly.css";
import "../public/assets/fonts/fontawesome/css/all.min.css";
import "../public/assets/css/plugins/bootstrap.min.css";
import "../public/assets/css/plugins/slick.css";
import "../public/assets/css/plugins/magnific-popup.css";
import "../public/assets/css/plugins/aos.css";
import "../public/assets/css/default.css";
import "../public/assets/css/common_style.css";
import "../public/assets/css/style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="header-area header-four">
        {/*====  Header Top  ===*/}
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5">
                <div className="top-left">
                  <span>
                    <i className="fas fa-envelope" />
                    <a href="mailto:support@gmail.com">mailto:support@gmail.com</a>
                  </span>
                  <span>
                    <i className="fas fa-phone" />
                    <a href="tel:000(123)4588">Call : 000 (123) 45 88</a>
                  </span>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="top-right">
                  <ul className="top-nav-link">
                    <li>
                      <span>
                        <i className="far fa-user" />
                        <a href="#">login</a>
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="far fa-lock" />
                        <a href="#">Register</a>
                      </span>
                    </li>
                  </ul>
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
            </div>
          </div>
        </div>
        {/*====  Header Navigation  ===*/}
        <div className="header-navigation">
          {/*====  Header Nav Inner  ===*/}
          <div className="nav-inner-menu">
            {/*====  Primary Menu  ===*/}
            <div className="primary-menu">
              {/*====  Site Branding  ===*/}
              <div className="site-branding">
                <a href="index.html" className="brand-logo">
                  <img src="assets/images/logo/logo-main.png" alt="Brand Logo" />
                </a>
              </div>
              {/*=== Sasly Main Menu===*/}
              <div className="sasly-nav-menu">
                {/* Sasly Menu Top */}
                <div className="sasly-menu-top d-flex justify-content-between d-block d-lg-none">
                  <div className="site-branding">
                    <a href="index.html" className="brand-logo">
                      <img src="assets/images/logo/logo-main-two.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <div className="navbar-close">
                    <i className="far fa-times" />
                  </div>
                </div>
                {/*=== Main Menu ===*/}
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="menu-item">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Course</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="courses.html">Our Course</a>
                        </li>
                        <li>
                          <a href="course-details.html">Course Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Pages</a>
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
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Blog Standard</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                {/*=== Sasly Nav Button ===*/}
                <div className="sasly-nav-button mt-20 d-block d-md-none">
                  <a href="contact.html" className="theme-btn style-one">
                    Get A Quote
                    <i className="far fa-angle-double-right" />
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
                <div className="search-form">
                  <form>
                    <div className="form-group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input type="search" className="form_control" placeholder="Search courses" required />
                    </div>
                  </form>
                </div>
                <div className="nav-button d-none d-md-block">
                  <a href="https://html.pixelfit.agency/sasly/pages/contact.html" className="theme-btn style-one">
                    Get A Quote
                    <i className="far fa-angle-double-right" />
                  </a>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
