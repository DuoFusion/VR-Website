import Slider from "react-slick";
import { AchievementsSettings } from "../../data";
import { Queries } from "../../api";

const Achievements = () => {
  const { data: Achievements } = Queries.useGetAchievements({});
  const All_Achievements = Achievements?.data;

  return (
    <section className="client-sel pb-130" data-aos="fade-up" data-aos-duration={1200}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=== Client Text ===*/}
            <div className="client-text text-center mb-50">
              <span>Achievements</span>
            </div>
          </div>
        </div>

        {/*=== Client Slider ===*/}
        <Slider {...AchievementsSettings} className="client-slider">
          {All_Achievements?.achievements_data?.map((item, index) => (
            <div className="client-item" key={index}>
              <div className="client-img">
                <img src={item.image} alt="client image" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
