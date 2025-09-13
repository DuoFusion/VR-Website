import { Rate } from "antd";
import { Queries } from "../../api";
import { Link } from "react-router-dom";
import { Href, ROUTES } from "../../constants";

const Courses = () => {
  const { data: Courses } = Queries.useGetCourses({ featuresFilter: true });
  const All_Courses = Courses?.data;

  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  return (
    <>
      {All_Courses?.totalData !== 0 && (
        <section className="courses-sel pt-130 pb-100" id="courses">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Section Title ===*/}
                <div className="section-title text-center mb-60">
                  <span className="sub-heading" data-aos="fade-up" data-aos-duration={1200}>
                    Popular Courses
                  </span>
                  <h2 className="text-anm">Get Started Our Latest Courses</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {All_Courses?.course_data?.map((item, index) => (
                <div className="col-xxl-3 col-xl-4 col-sm-6" key={index}>
                  <div className="sasly-course-item style-one mb-30" data-aos="fade-up" data-aos-duration={1200}>
                    <div className="course-thumbnail">
                      <img src={item?.thumbnailImage} alt="Course Thumbnail" />
                    </div>
                    <div className="course-info-wrap">
                      <div className="course-info">
                        <div className="post-categories">
                          <Link to={Href}>{item?.level}</Link>
                          <Rate defaultValue={item?.review} disabled />
                        </div>
                        <h4 className="title">
                          <Link to={`${ROUTES.COURSE.COURSE_DETAILS}/${item?._id}`}>{item?.title}</Link>
                        </h4>
                        <div className="instructor">
                          <img src={WebSetting?.instructorImage} alt="Instructor Image" />
                          <span className="instructor-name text-capitalize">{WebSetting?.instructorName}</span> <span className="instructor-label">(instructor)</span>
                        </div>
                      </div>
                      <div className="course-stats d-flex justify-content-between">
                        <span>
                          {/* <i className="fal fa-file-edit" /> */}₹{item?.price}
                        </span>
                        <span>
                          <i className="far fa-clock" />
                          {item?.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Courses;
