import { Swiper, SwiperSlide } from "swiper/react";
import { Queries } from "../../api";
import { BlogsSettings } from "../../data";
import { FormatDate } from "../../utils/DateFormatted";
import { Link } from "react-router-dom";
import { Href, ROUTES } from "../../constants";

const Blogs = () => {
  const { data: Blog } = Queries.useGetBlog({});
  const All_Blog = Blog?.data;

  return (
    <>
      {All_Blog?.totalData !== 0 && (
        <section className="blogs-sel pb-95 pt-130" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Section Title ===*/}
                <div className="section-title text-center mb-60">
                  <span className="sub-heading" data-aos="fade-up" data-aos-duration={1200}>
                    Blog
                  </span>
                  <h2 className="text-anm">Explore Learning Latest Insights</h2>
                </div>
              </div>
            </div>

            {/*=== Blog Swiper ===*/}
            <Swiper {...BlogsSettings} className="blog-slider">
              {/* Blog Item 1 */}
              {All_Blog?.blog_data?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="blog-post-item style-four mb-35">
                    <div className="post-thumbnail">
                      <img src={item.thumbnailImage} alt="Post Thumbnail" />
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span>
                          <Link to={Href} className="cat-btn">
                            {item?.tag}
                          </Link>
                        </span>
                        <span>
                          <Link to={Href}>{FormatDate(item?.createdAt)}</Link>
                        </span>
                        {/* <span>
                          <Link to={Href}>Comments(5)</Link>
                        </span> */}
                      </div>
                      <h4 className="title">
                        <Link to={`${ROUTES.BLOG.BLOG_DETAILS}/${item._id}`}>{item?.title}</Link>
                      </h4>
                      <Link to={`${ROUTES.BLOG.BLOG_DETAILS}/${item._id}`} className="read-more style-three">
                        Read More <i className="fas fa-angle-double-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default Blogs;
