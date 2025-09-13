import Slider from "react-slick";
import { WorkshopSettings } from "../../data";
import { Queries } from "../../api";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const Workshop = () => {
  const { data: Workshop } = Queries.useGetWorkshop({ featuresFilter: true });
  const All_Workshop = Workshop?.data;
  const navigate = useNavigate();
  return (
    <>
      {All_Workshop?.totalData !== 0 && (
        <section className="categories-sel pt-130" id="workshop">
          <div className="container">
            <div className="section-title text-center mb-60" data-aos="fade-up" data-aos-duration={1200}>
              <span className="sub-heading">Top Workshop</span>
              <h2 className="text-anm">Explore 2500+ Online Workshop</h2>
            </div>

            <Slider {...WorkshopSettings} className="categories-slider" data-aos="fade-left" data-aos-duration={1400}>
              {All_Workshop?.workshop_data?.map((item, index) => (
                <div className="sasly-category-item style-one" key={index}>
                  <div className="icon">
                    <img src={item.thumbnailImage} alt="category icon" />
                  </div>
                  <div className="content">
                    <h6 className="title cursor-pointer" onClick={() => navigate(`${ROUTES.WORKSHOP.WORKSHOP_DETAILS}/${item._id}`)}>
                      {item.title}
                    </h6>
                    <p className="text-capitalize">{item.level}</p>
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
