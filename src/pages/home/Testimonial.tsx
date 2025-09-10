import Slider from "react-slick";
import { TestimonialSettings } from "../../data";
import { Queries } from "../../api";
import { ImagePath } from "../../constants";
import { Rate } from "antd";

const Testimonial = () => {
  const { data: Testomonials } = Queries.useGetTestomonials();
  const All_Testomonials = Testomonials?.data;

  return (
    <>
      {All_Testomonials?.totalData !== 0 && (
        <section className="testimonial-sel pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/*=== Testimonial Slider ===*/}
                <Slider {...TestimonialSettings} className="testimonial-slider">
                  {/*=== Testimonial Item ===*/}
                  {All_Testomonials?.testomonial_data?.map((item, index) => (
                    <div className="sasly-testimonial-item style-four d-flex" key={index}>
                      <div className="testimonial-thumb">
                        <img src={item?.image ?? `${ImagePath}testimonial/author1.png`} alt="Author Image" />
                        <div className="qoute">
                          <i className="flaticon-quote" />
                        </div>
                        <span className="circle" />
                      </div>
                      <div className="testimonial-content">
                        <div className="rating-text">
                          {/* <span>{item?.role}</span> */}
                          <ul className="ratings">
                          <Rate defaultValue={item?.rating} disabled/>
                            {/* <li>
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
                            </li> */}
                          </ul>
                        </div>
                        <p>{item?.message}</p>
                        <div className="author-info">
                          <h4 className="title">{item?.name}</h4>
                          <span className="position">{item?.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Testimonial;
