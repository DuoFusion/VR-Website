import { Rate } from "antd";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Queries } from "../../api";
import { Breadcrumbs, SocialLinks } from "../../coreComponents";
import { ROUTES } from "../../constants";

const WorkshopDetails = () => {
  const [basicTab, setBasicTab] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { data: Workshop, status } = Queries.useGetWorkshopDetail(id || "");
  const All_WorkshopDetails = Workshop?.data;

  if (status === "error") navigate(ROUTES.WORKSHOP.WORKSHOP);

  return (
    <Fragment>
      <Breadcrumbs mainTitle={All_WorkshopDetails?.title ?? "Workshop Details"} parent="Workshop" parentLink={ROUTES.WORKSHOP.WORKSHOP} />
      <section className="course-details-ss">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="course-details-wrapper">
                {/* Thumbnail */}
                <div className="course-thumbnail" data-aos="fade-up" data-aos-delay={10} data-aos-duration={900}>
                  <img src={All_WorkshopDetails?.workshopImage} alt="course thumbnail" />
                </div>

                {/* Course Info */}
                <div className="course-info">
                  <h3 className="title">{All_WorkshopDetails?.title}</h3>
                  <div className="d-block d-md-flex justify-content-between">
                    <div className="course-meta">
                      <div className="instructor d-flex">
                        <img src={WebSetting?.instructorImage} className="profile-img" alt="Instructor" />
                        <div className="info">
                          <span className="position">Instructor</span>
                          <h6 className="text-capitalize">{WebSetting?.instructorName}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="course-meta">
                      <div className="ef-rating-box">
                        <h3>₹{All_WorkshopDetails?.price}</h3>
                      </div>
                      <div className="ef-rating-box">
                        <div className="course-button text-center">
                          <button className="theme-btn style-one" onClick={() => navigate(`${ROUTES.WORKSHOP.WORKSHOP_REGISTER}/${id}`)}>
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="sasly-tabs" data-aos="fade-up" data-aos-delay={15} data-aos-duration={1000}>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classNames({
                            active: basicTab === "overview",
                          })}
                          onClick={() => setBasicTab("overview")}
                        >
                          Overview
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classNames({
                            active: basicTab === "instructor",
                          })}
                          onClick={() => setBasicTab("instructor")}
                        >
                          Instructor
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>

                  {/* Tab Content */}
                  <TabContent activeTab={basicTab} data-aos="fade-up" data-aos-delay={20} data-aos-duration={1100}>
                    <TabPane tabId="overview">
                      <div className="sasly-content-box">
                        <div className="course-info">
                          <ul className="check-list style-one">
                            {All_WorkshopDetails?.level && (
                              <li>
                                <p>Skill Level :-</p>
                                <span>{All_WorkshopDetails?.level}</span>
                              </li>
                            )}
                            {(All_WorkshopDetails?.review ?? 0) > 0 && (
                              <li>
                                <p>Reviews :-</p>
                                <span>
                                  <Rate className="d-flex m-0" value={All_WorkshopDetails?.review} disabled />
                                </span>
                              </li>
                            )}
                            {All_WorkshopDetails?.duration && (
                              <li>
                                <p>Duration :-</p>
                                <span>{All_WorkshopDetails?.duration}</span>
                              </li>
                            )}
                          </ul>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: All_WorkshopDetails?.description || "",
                          }}
                        />
                      </div>
                    </TabPane>

                    <TabPane tabId="instructor">
                      <div className="course-instructor-box">
                        <div className="instructor-thumbnail">
                          <img src={WebSetting?.instructorImage} alt="instructor thumbnail" />
                        </div>
                        <div className="instructor-info">
                          <h4>{WebSetting?.instructorName}</h4>
                          <p>{WebSetting?.instructorAbout}</p>
                          <SocialLinks socialMedia={WebSetting?.socialMedia} variant="list" />
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WorkshopDetails;
