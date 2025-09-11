import { useEffect, useState } from "react";
import { Queries } from "../../api";
import UseStickyBar from "../../utils/useStickyBar";
import { ImagePath, ROUTES } from "../../constants";
import { SocialLinks } from "../../coreComponents";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const fix = UseStickyBar(200);

  const { data: Workshop } = Queries.useGetWorkshop({ featuresFilter: true });
  const { data: Courses } = Queries.useGetCourses({ featuresFilter: true });
  const { data: Blog } = Queries.useGetBlog({});
  const { data: WebSettingData } = Queries.useGetWebSetting();

  const WebSetting = WebSettingData?.data;
  const All_Workshop = Workshop?.data;
  const All_Courses = Courses?.data;
  const All_Blog = Blog?.data;

  const handleSubMenuToggle = (menu: string) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  useEffect(() => {
    if (window.innerWidth >= 992) setActiveSubMenu(null);
  }, []);

  const renderDropdown = (label: string, menuKey: string, data: any, baseRoute: string, detailRoute: string) => {
    if (!data?.totalData) return null;
    const isSingle = data.totalData === 1;

    return (
      <li className={`menu-item has-children ${activeSubMenu === menuKey ? "sub-menu-open" : ""}`}>
        <Link to={isSingle ? `${detailRoute}/${data[`${menuKey}_data`]?.[0]?._id}` : baseRoute} onClick={() => !isSingle && handleSubMenuToggle(menuKey)}>
          {label}
          {!isSingle && (
            <span className="dd-trigger">
              <i className="fas fa-angle-down" />
            </span>
          )}
        </Link>

        {!isSingle &&
          (activeSubMenu ? (
            <ul className="sub-menu" style={{ display: activeSubMenu === menuKey ? "block" : "none" }}>
              {data[`${menuKey}_data`]?.map((item: any) => (
                <li key={item._id}>
                  <Link to={`${detailRoute}/${item._id}`} className="one-lines">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="sub-menu">
              {data[`${menuKey}_data`]?.map((item: any) => (
                <li key={item._id}>
                  <Link to={`${detailRoute}/${item._id}`} className="one-lines">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
      </li>
    );
  };

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
                  <Link to={`mailto:${WebSetting?.email}`}>{WebSetting?.email}</Link>
                </span>
                <span>
                  <i className="fas fa-phone" />
                  <Link to={`tel:${WebSetting?.phoneNumber}`}>{WebSetting?.phoneNumber}</Link>
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
            {/* Branding */}
            <div className="site-branding">
              <Link to={ROUTES.HOME} className="brand-logo">
                <img src={`${ImagePath}logo/logo-main.png`} alt="Brand Logo" />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className={`sasly-nav-menu ${isOpen ? "menu-on" : ""}`}>
              {/* Mobile top */}
              <div className="sasly-menu-top d-flex justify-content-between d-block d-lg-none">
                <div className="site-branding">
                  <Link to={ROUTES.HOME} className="brand-logo">
                    <img src={`${ImagePath}logo/logo-main-two.png`} alt="Brand Logo" />
                  </Link>
                </div>
                <div className="navbar-close" onClick={() => setOpen(false)}>
                  <i className="fas fa-times" />
                </div>
              </div>

              {/* Main Menu */}
              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <Link to={ROUTES.HOME}>Home</Link>
                  </li>

                  {/* Workshops */}
                  {renderDropdown("Workshop", "workshop", All_Workshop, ROUTES.WORKSHOP.WORKSHOP, ROUTES.WORKSHOP.WORKSHOP_DETAILS)}

                  {/* Courses */}
                  {renderDropdown("Course", "course", All_Courses, ROUTES.COURSE.COURSE, ROUTES.COURSE.COURSE_DETAILS)}

                  {/* Blog */}
                  {All_Blog?.totalData !== 0 && (
                    <li className="menu-item">
                      <Link to={ROUTES.BLOG.BLOG}>Blog</Link>
                    </li>
                  )}

                  <li className="menu-item">
                    <Link to={ROUTES.CONTACT_US}>Contact Us</Link>
                  </li>
                </ul>
              </nav>

              {/* Mobile Nav Button */}
              <div className="sasly-nav-button mt-20 d-block d-md-none">
                <Link to={ROUTES.CONTACT_US} className="theme-btn style-one">
                  Get A Quote <i className="fas fa-angle-double-right" />
                </Link>
              </div>

              {/* Mobile Bottom */}
              <div className="sasly-menu-bottom mt-50 d-block d-lg-none">
                <h5>Follow Us</h5>
                <SocialLinks socialMedia={WebSetting?.socialMedia} variant="list" />
              </div>
            </div>

            {/* Right Side */}
            <div className="nav-right-item">
              <div className="nav-button d-none d-md-block">
                <Link to={ROUTES.CONTACT_US} className="theme-btn style-one">
                  Get A Quote <i className="fas fa-angle-double-right" />
                </Link>
              </div>

              {/* Mobile Toggle */}
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
