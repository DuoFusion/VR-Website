import Slider from "react-slick";
import { WorkshopSettings } from "../../data";
import { Queries } from "../../api";

const Workshop = () => {
  const { data: Workshop } = Queries.useGetWorkshop({ featuresFilter: true });
  const All_Workshop = Workshop?.data;

  return (
    <>
      {All_Workshop?.totalData !== 0 && (
        <section className="categories-sel pt-130">
          <div className="container">
            <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-duration={1200}>
              <span className="sub-heading">Top Workshop</span>
              <h2 className="text-anm">Explore 2500+ Online Workshop</h2>
            </div>

            <Slider {...WorkshopSettings} className="categories-slider" data-aos="fade-left" data-aos-duration={1400}>
              {All_Workshop?.workshop_data?.map((item, index) => (
                <div className="sasly-category-item style-one" key={index}>
                  <div className="icon">
                    <img src={item.workshopImage} alt="category icon" />
                  </div>
                  <div className="content">
                    <h6 className="title">{item.title}</h6>
                    <p>{item.instructorName}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>
      )}
    </>
  );
};

export default Workshop;
