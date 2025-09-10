import { useState } from "react";
import { Collapse } from "reactstrap";
import { Queries } from "../../api";
import { ImagePath } from "../../constants";

const Faq = () => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { data: Faq } = Queries.useGetFaq();
  const All_Faq = Faq?.data;

  const handleChange = (id: number) => setActiveFaqId((prev) => (prev === id ? null : id));

  return (
    <>
      {(All_Faq?.totalData ?? 0) > 0 && (
        <section className="faqs-sel pt-80 pb-80">
          <div className="container">
            <div className="row">
              {/* Left side image + stats */}
              <div className="col-lg-6">
                <div className="sasly-image-box mb-50" data-aos="fade-right" data-aos-duration={1200}>
                  <span className="circle" />
                  <div className="sasly-image">
                    <img src={`${ImagePath}faq/faq1.png`} alt="Faq" />
                  </div>
                  <div className="item">
                    <div className="content">
                      <h2>{WebSetting?.ourStudent}</h2>
                      <h5>Active Our Students</h5>
                      <div className="author-box">
                        <ul className="author-list">
                          {["1", "2", "3", "4", "5"].map((i) => (
                            <li key={i}>
                              <img src={`${ImagePath}hero/avater${i}.png`} alt="Author" />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side FAQ */}
              <div className="col-lg-6">
                <div className="section-content-box mb-40" data-aos="fade-left" data-aos-duration={1200}>
                  <div className="section-title mb-60">
                    <h2 className="text-anm">Let’s Frequently Asked Courses Questions</h2>
                  </div>

                  <div className="accordion faq-box" id="accordionOne">
                    {All_Faq?.faq_data?.map((item: any, index: number) => {
                      const isOpen = activeFaqId === index;
                      return (
                        <div key={item._id || index} className="accordion-item mb-10">
                          <div className="accordion-header" onClick={() => handleChange(index)}>
                            <h5 className={`accordion-title ${!isOpen ? "collapsed" : ""}`} aria-expanded={isOpen}>
                              <span className="sn">{String(index + 1).padStart(2, "0")}.</span>
                              {item.question}
                            </h5>
                          </div>
                          <Collapse isOpen={isOpen}>
                            <div className="accordion-content">
                              <p>{item.answer}</p>
                            </div>
                          </Collapse>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Faq;
