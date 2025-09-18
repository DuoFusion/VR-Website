import { Link } from "react-router-dom";
import { Queries } from "../../api";
import { ImagePath, ROUTES } from "../../constants";
import { scrollToSection } from "../../utils/scrollToSection";

const HeroBanner = () => {
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;
  return (
    <section className="hero-sel">
      <div className="pattern bg_cover" style={{ backgroundImage: `url(${ImagePath}hero/dot_bg.png)` }} />
      {/*===  Hero Image  ===*/}
      <div className="hero-image_one">
        <img src={`${ImagePath}hero/hero-img1.jpg`} alt="Image" />
        <span className="circle" />
      </div>
      {/*===  Hero Image  ===*/}
      <div className="hero-image_two">
        <img src={`${ImagePath}hero/hero-img2.jpg`} alt="Image" />
        <span className="circle" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            {/*===  Hero Content  ===*/}
            <div className="hero-content">
              <h1 className="text-anm" data-aos="fade-up" data-aos-duration={1200}>
                Unlock the World of Online Learning
              </h1>
              <p data-aos="fade-up" data-aos-duration={1400}>
                eLearning has revolutionized the way people access education and skills training. Unlike traditional classroom settings, eLearning provides flexibility and convenience, allowing learners to study at their own pace
              </p>
              <Link to={ROUTES.COURSE.COURSE} className="theme-btn style-one" data-aos="fade-up" data-aos-duration={1600}>
                Find Best Courses <i className="fas fa-angle-double-right" />
              </Link>
            </div>
            {/*===  Hero Wrap Box  ===*/}
            <div className="hero-wrap-box">
              <div className="item" data-aos="fade-right" data-aos-duration={1200}>
                <div className="content">
                  <h2>{WebSetting?.ourStudent}</h2>
                  <div className="author-box">
                    <h5>Active Our Students</h5>
                    <ul className="author-list">
                      <li>
                        <img src={`${ImagePath}hero/avater1.png`} alt="Author Image" />
                      </li>
                      <li>
                        <img src={`${ImagePath}hero/avater2.png`} alt="Author Image" />
                      </li>
                      <li>
                        <img src={`${ImagePath}hero/avater3.png`} alt="Author Image" />
                      </li>
                      <li>
                        <img src={`${ImagePath}hero/avater4.png`} alt="Author Image" />
                      </li>
                      <li>
                        <img src={`${ImagePath}hero/avater5.png`} alt="Author Image" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item" data-aos="fade-left" data-aos-duration={1400}>
                <Link to={"#testimonial"} onClick={() => scrollToSection("#testimonial")}className="content">
                  <h2>{WebSetting?.rating}</h2>
                  <h5>Positive reviews</h5>
                  <ul className="ratings">
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
