import { Queries } from "../../api";

const Faq = () => {
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;
  return (
    <section className="faqs-sel pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            {/*===  Sasly Image Box ===*/}
            <div className="sasly-image-box mb-50" data-aos="fade-right" data-aos-duration={1200}>
              <span className="circle" />
              <div className="sasly-image">
                <img src="assets/images/faq/faq1.png" alt="Faq image" />
              </div>
              <div className="item">
                <div className="content">
                  <h2>{WebSetting?.ourStudent}</h2>
                  <h5>Active Our Students</h5>
                  <div className="author-box">
                    <ul className="author-list">
                      <li>
                        <img src="assets/images/hero/avater1.png" alt="Author Image" />
                      </li>
                      <li>
                        <img src="assets/images/hero/avater2.png" alt="Author Image" />
                      </li>
                      <li>
                        <img src="assets/images/hero/avater3.png" alt="Author Image" />
                      </li>
                      <li>
                        <img src="assets/images/hero/avater4.png" alt="Author Image" />
                      </li>
                      <li>
                        <img src="assets/images/hero/avater5.png" alt="Author Image" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            {/*=== Section Title ===*/}
            <div className="section-content-box mb-40">
              {/*=== Section Title ===*/}
              <div className="section-title mb-60">
                <h2 className="text-anm">Let’s Frequently Asked Courses Questions </h2>
              </div>
              {/*====== Accordion   ======*/}
              <div className="accordion" id="accordionOne">
                {/*====== Accordion Item  ======*/}
                <div className="accordion-item mb-10" data-aos="fade-up" data-aos-duration={1200}>
                  <div className="accordion-header">
                    <h5 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                      <span className="sn">01.</span>How do I enroll in a course?
                    </h5>
                  </div>
                  <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                    <div className="accordion-content">
                      <p>Our platform offers a wide range of courses, including professional development, academic subjects, technical, to creative arts, and more have courses for all levels, from beginners to advanced learners.</p>
                    </div>
                  </div>
                </div>
                {/*====== Accordion Item  ======*/}
                <div className="accordion-item mb-10" data-aos="fade-up" data-aos-duration={1300}>
                  <div className="accordion-header">
                    <h5 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                      <span className="sn">02.</span>What types of courses are available?
                    </h5>
                  </div>
                  <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                    <div className="accordion-content">
                      <p>Our platform offers a wide range of courses, including professional development, academic subjects, technical, to creative arts, and more have courses for all levels, from beginners to advanced learners.</p>
                    </div>
                  </div>
                </div>
                {/*====== Accordion Item  ======*/}
                <div className="accordion-item mb-10" data-aos="fade-up" data-aos-duration={1400}>
                  <div className="accordion-header">
                    <h5 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                      <span className="sn">03.</span>Do I need any special software or equipment ?
                    </h5>
                  </div>
                  <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                    <div className="accordion-content">
                      <p>Our platform offers a wide range of courses, including professional development, academic subjects, technical, to creative arts, and more have courses for all levels, from beginners to advanced learners.</p>
                    </div>
                  </div>
                </div>
                {/*====== Accordion Item  ======*/}
                <div className="accordion-item mb-10" data-aos="fade-up" data-aos-duration={1600}>
                  <div className="accordion-header">
                    <h5 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false">
                      <span className="sn">04.</span>Can I learn at my own pace?
                    </h5>
                  </div>
                  <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                    <div className="accordion-content">
                      <p>Our platform offers a wide range of courses, including professional development, academic subjects, technical, to creative arts, and more have courses for all levels, from beginners to advanced learners.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
