
const About = () => {
  return (
    <section className="about-sel pt-130 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/*=== Section Content Box ===*/}
            <div className="section-content-box mb-50">
              <div className="section-title mb-30" data-aos="fade-up" data-aos-duration={1200}>
                <span className="sub-heading">Learn About Us</span>
                <h2 className="text-anm">Mind Matters Transform Education Experience</h2>
              </div>
              <p data-aos="fade-up" data-aos-duration={1400}>
                Welcome to our education website, where learning knows no boundaries are committed to providing a diverse range of courses and resources that learners ages and backgrounds. Whether you are looking to advance
              </p>
              <div className="row">
                <div className="col-sm-6">
                  {/*===  Sasly Iconic Box  ===*/}
                  <div className="sasly-iconic-box style-six mb-30" data-aos="fade-up" data-aos-duration={1500}>
                    <div className="icon">
                      <i className="fas fa-users" />
                    </div>
                    <div className="content">
                      <h5>Expert Instructor</h5>
                      <p>We provide expert instructors</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  {/*===  Sasly Iconic Box  ===*/}
                  <div className="sasly-iconic-box style-six mb-30" data-aos="fade-up" data-aos-duration={1700}>
                    <div className="icon">
                      <i className="fas fa-file-certificate" />
                    </div>
                    <div className="content">
                      <h5>Expert Instructor</h5>
                      <p>We provide expert instructors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/*===  Section Image Box ===*/}
            <div className="section-image-box mb-50">
              <div className="circle-shape">
                <span />
              </div>
              <div className="sasly-img_one animate-float-bob-y">
                <img src="assets/images/about/about1.jpg" alt="About image" />
              </div>
              <div className="sasly-img_two animate-float-bob-x">
                <img src="assets/images/about/about2.jpg" alt="About image" />
              </div>
              <div className="sasly-img_three">
                <img src="assets/images/about/circle-text.png" className="rotate360" alt="About image" />
              </div>
              <div className="sasly-rating-item animate-float-bob-x">
                <div className="icon">
                  <i className="flaticon-positive-review" />
                </div>
                <div className="content">
                  <ul className="ratings">
                    <li>
                      <span>4.8</span>
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
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                  <p>856k+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
