import Slider from "react-slick";
import { AchievementsSettings } from "../../data";

const Achievements = () => {
  return (
    <section className="client-sel pb-130" data-aos="fade-up" data-aos-duration={1200}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*=== Client Text ===*/}
            <div className="client-text text-center mb-50">
              <span>1800+ Trusted Global Partners</span>
            </div>
          </div>
        </div>

        {/*=== Client Slider ===*/}
        <Slider {...AchievementsSettings} className="client-slider">
          {/*=== Client Item ===*/}
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client1.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client2.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client3.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client4.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client5.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client6.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client7.png" alt="client image" />
            </div>
          </div>
          <div className="client-item">
            <div className="client-img">
              <img src="assets/images/client/client5.png" alt="client image" />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
