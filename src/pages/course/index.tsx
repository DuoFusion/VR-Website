import { Pagination, Rate } from "antd";
import { Fragment } from "react";
import { Queries } from "../../api";
import { Breadcrumbs } from "../../coreComponents";
import { useBasicTableFilterHelper } from "../../utils/hook";
import { Link, useNavigate } from "react-router-dom";
import { Href, ROUTES } from "../../constants";

const Course = () => {
  const { pageNumber, pageSize, params, handlePaginationChange } = useBasicTableFilterHelper({
    initialParams: { page: 1, limit: 12 },
  });
  const navigate = useNavigate();

  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { data: Course } = Queries.useGetCourses(params);
  const All_Course = Course?.data;
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Course" />
      <section className="courses-sel pt-130 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-60">
                <span className="sub-heading" data-aos="fade-up" data-aos-duration={1200}>
                  Popular Course
                </span>
                <h2 className="text-anm">Get Started Our Latest Course</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {All_Course?.course_data?.map((item, index) => (
              <div className="col-xxl-3 col-xl-4 col-sm-6" key={index}>
                <div className="sasly-course-item style-one mb-30" data-aos="fade-up" data-aos-duration={1200}>
                  <div className="course-thumbnail cursor-pointer" onClick={() => navigate(`${ROUTES.COURSE.COURSE_DETAILS}/${item._id}`)}>
                    <img src={item.thumbnailImage} alt="Course Thumbnail" />
                  </div>
                  <div className="course-info-wrap">
                    <div className="course-info">
                      <div className="post-categories">
                        <Link to={Href}>{item?.level}</Link>
                        <Rate defaultValue={item?.review} disabled />
                      </div>
                      <h4 className="title cursor-pointer" onClick={() => navigate(`${ROUTES.COURSE.COURSE_DETAILS}/${item._id}`)}>
                        {item?.title}
                      </h4>
                      <div className="instructor">
                        <img src={WebSetting?.instructorImage} alt="Instructor Image" />
                        <span className="instructor-name">{WebSetting?.instructorName}</span> <span className="instructor-label">(instructor)</span>
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
          <div className="row">
            <div className="col-xl-12">
              <div className="sasly-pagination text-center mt-30">
                <Pagination total={All_Course?.totalData} pageSize={pageSize} current={pageNumber} align="center" onChange={handlePaginationChange} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Course;
