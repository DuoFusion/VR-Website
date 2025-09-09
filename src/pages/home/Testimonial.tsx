import Slider from "react-slick";
import { TestimonialSettings } from "../../data";

const Testimonial = () => {
  return (
    <section className="testimonial-sel pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=== Testimonial Slider ===*/}
            <Slider {...TestimonialSettings} className="testimonial-slider">
              {/*=== Testimonial Item ===*/}
              <div className="sasly-testimonial-item style-four d-flex">
                <div className="testimonial-thumb">
                  <img src="assets/images/testimonial/author1.png" alt="Author Image" />
                  <div className="qoute">
                    <i className="flaticon-quote" />
                  </div>
                  <span className="circle" />
                </div>
                <div className="testimonial-content">
                  <div className="rating-text">
                    <span>Best Quality Courses</span>
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
                  </div>
                  <p>"I never thought online learning could be so engaging! The courses on this platform are well-structured and easy to follow. The flexibility of being able to study at my own pace allowed me to balance my job and studies" </p>
                  <div className="author-info">
                    <h4 className="title">Ricardo F. Bowers</h4>
                    <span className="position">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
              {/*=== Testimonial Item ===*/}
              <div className="sasly-testimonial-item style-four d-flex">
                <div className="testimonial-thumb">
                  <img src="assets/images/testimonial/author1.png" alt="Author Image" />
                  <div className="qoute">
                    <i className="flaticon-quote" />
                  </div>
                  <span className="circle" />
                </div>
                <div className="testimonial-content">
                  <div className="rating-text">
                    <span>Best Quality Courses</span>
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
                  </div>
                  <p>"I never thought online learning could be so engaging! The courses on this platform are well-structured and easy to follow. The flexibility of being able to study at my own pace allowed me to balance my job and studies" </p>
                  <div className="author-info">
                    <h4 className="title">Ricardo F. Bowers</h4>
                    <span className="position">CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
