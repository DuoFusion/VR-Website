import { Swiper, SwiperSlide } from "swiper/react";
import { BlogsSettings } from "../../data";

const Blogs = () => {
  return (
    <section className="blogs-sel pb-95 pt-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=== Section Title ===*/}
            <div className="section-title text-center mb-60">
              <span className="sub-heading" data-aos="fade-up" data-aos-duration={1200}>
                Blog
              </span>
              <h2 className="text-anm">Explore eLearning Latest Insights</h2>
            </div>
          </div>
        </div>

        {/*=== Blog Swiper ===*/}
        <Swiper {...BlogsSettings} className="blog-slider">
          {/* Blog Item 1 */}
          <SwiperSlide>
            <div className="blog-post-item style-four mb-35">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <a href="#" className="cat-btn">
                      eLearning
                    </a>
                  </span>
                  <span>
                    <a href="#">September 15,2024</a>
                  </span>
                  <span>
                    <a href="#">Comments(5)</a>
                  </span>
                </div>
                <h4 className="title">
                  <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html">Future of Education How eLearning is Changing the Way We Learn</a>
                </h4>
                <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html" className="read-more style-three">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Blog Item 2 */}
          <SwiperSlide>
            <div className="blog-post-item style-four mb-35">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog2.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <a href="#" className="cat-btn">
                      eLearning
                    </a>
                  </span>
                  <span>
                    <a href="#">September 15,2024</a>
                  </span>
                  <span>
                    <a href="#">Comments(5)</a>
                  </span>
                </div>
                <h4 className="title">
                  <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html">The Best eLearning Platforms for Professional Development</a>
                </h4>
                <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html" className="read-more style-three">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Blog Item 3 */}
          <SwiperSlide>
            <div className="blog-post-item style-four mb-35">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog1.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <a href="#" className="cat-btn">
                      eLearning
                    </a>
                  </span>
                  <span>
                    <a href="#">September 15,2024</a>
                  </span>
                  <span>
                    <a href="#">Comments(5)</a>
                  </span>
                </div>
                <h4 className="title">
                  <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html">Future of Education How eLearning is Changing the Way We Learn</a>
                </h4>
                <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html" className="read-more style-three">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Blog Item 4 */}
          <SwiperSlide>
            <div className="blog-post-item style-four mb-35">
              <div className="post-thumbnail">
                <img src="assets/images/blog/blog2.jpg" alt="Post Thumbnail" />
              </div>
              <div className="post-content">
                <div className="post-meta">
                  <span>
                    <a href="#" className="cat-btn">
                      eLearning
                    </a>
                  </span>
                  <span>
                    <a href="#">September 15,2024</a>
                  </span>
                  <span>
                    <a href="#">Comments(5)</a>
                  </span>
                </div>
                <h4 className="title">
                  <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html">The Best eLearning Platforms for Professional Development</a>
                </h4>
                <a href="https://html.pixelfit.agency/sasly/pages/blog-details.html" className="read-more style-three">
                  Read More <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Blogs;
