import { Rate } from "antd";
import classNames from "classnames";
import { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Queries } from "../../api";
import { ROUTES } from "../../constants";
import { Breadcrumbs, SocialLinks } from "../../coreComponents";

const CourseDetails = () => {
  const [basicTab, setBasicTab] = useState("overview");
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { data: Course, status } = Queries.useGetCoursesDetail(id || "");
  const All_CourseDetails = Course?.data;

  if (status === "error") navigate(ROUTES.COURSE.COURSE);
  return (
    <Fragment>
      <Breadcrumbs mainTitle={All_CourseDetails?.title ?? "Course Details"} parent="Course" parentLink={ROUTES.COURSE.COURSE} />
      <section className="course-details-ss">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="course-details-wrapper">
                {/* Thumbnail */}
                <div className="course-thumbnail" data-aos="fade-up" data-aos-delay={10} data-aos-duration={900}>
                  <img src={All_CourseDetails?.courseImage} alt="course thumbnail" />
                </div>

                {/* Course Info */}
                <div className="course-info">
                  <h3 className="title">{All_CourseDetails?.title}</h3>
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
                        <h3 className="price-text">
                          {All_CourseDetails?.price === 0 ? (
                            "Free"
                          ) : (
                            <>
                              ₹{All_CourseDetails?.price}
                              {All_CourseDetails?.mrp && <span>₹{All_CourseDetails?.mrp}</span>}
                            </>
                          )}
                        </h3>
                      </div>
                      <div className="ef-rating-box">
                        <div className="course-button text-center">
                          <button className="theme-btn style-one" onClick={() => navigate(`${ROUTES.COURSE.COURSES_REGISTER}/${id}`)}>
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
                            {All_CourseDetails?.level && (
                              <li>
                                <p>Skill Level :-</p>
                                <span>{All_CourseDetails?.level}</span>
                              </li>
                            )}
                            {(All_CourseDetails?.review ?? 0) > 0 && (
                              <li>
                                <p>Reviews :-</p>
                                <span>
                                  <Rate className="d-flex m-0" value={All_CourseDetails?.review} disabled />
                                </span>
                              </li>
                            )}
                            {All_CourseDetails?.duration && (
                              <li>
                                <p>Duration :-</p>
                                <span>{All_CourseDetails?.duration}</span>
                              </li>
                            )}
                            {All_CourseDetails?.totalLectures && (
                              <li>
                                <p>Total Lectures :-</p>
                                <span>{All_CourseDetails?.totalLectures}</span>
                              </li>
                            )}
                            {All_CourseDetails?.totalHours && (
                              <li>
                                <p>Total Hours :-</p>
                                <span>{All_CourseDetails?.totalHours}</span>
                              </li>
                            )}
                          </ul>
                        </div>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: All_CourseDetails?.description || "",
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

export default CourseDetails;
