import Slider from "react-slick";
import { WorkshopSettings } from "../../data";

const Workshop = () => {
  return (
    <section className="categories-sel pt-130">
      <div className="container">
        <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-duration={1200}>
          <span className="sub-heading">Top Workshop</span>
          <h2 className="text-anm">Explore 2500+ Online Courses</h2>
        </div>

        <Slider {...WorkshopSettings} className="categories-slider" data-aos="fade-left" data-aos-duration={1400}>
          <div className="sasly-category-item style-one">
            <div className="icon">
              <i className="flaticon-cooperation" />
            </div>
            <div className="content">
              <h6 className="title">Business Consulting</h6>
              <p>05 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-curve" />
            </div>
            <div className="content">
              <h6 className="title">Product Design</h6>
              <p>02 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-megaphone" />
            </div>
            <div className="content">
              <h6 className="title">Digital Marketing</h6>
              <p>04 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-healthcare" />
            </div>
            <div className="content">
              <h6 className="title">Health &amp; Fitness</h6>
              <p>05 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-computer-science" />
            </div>
            <div className="content">
              <h6 className="title">Computer Science</h6>
              <p>08 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-world-wide-web" />
            </div>
            <div className="content">
              <h6 className="title">Web Development</h6>
              <p>05 Courses</p>
            </div>
          </div>

          <div className="sasly-category-item style-one" style={{ width: 220 }}>
            <div className="icon">
              <i className="flaticon-live-music" />
            </div>
            <div className="content">
              <h6 className="title">Music &amp; Video</h6>
              <p>06 Courses</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Workshop;
