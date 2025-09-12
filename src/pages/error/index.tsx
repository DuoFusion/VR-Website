import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ImagePath, ROUTES } from "../../constants";
import { Breadcrumbs } from "../../coreComponents";

const Error = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Error" />
      <section className="error-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-content-box text-center">
                <div className="error-image">
                  <img src={`${ImagePath}404/error.png`} alt="404 Error" />
                </div>
                <h1 data-aos="fade-down" data-aos-duration={1200}>
                  OPPS! Page Are Can’t Be Found
                </h1>
                <h5 data-aos="fade-up" data-aos-duration={1300}>
                  It looks like the page you’re looking for doesn’t exist or may have been moved. But don’t worry
                </h5>
                <Link to={ROUTES.HOME} className="theme-btn style-one" data-aos="fade-up" data-aos-duration={1400}>
                  Go to Home <i className="fas fa-angle-double-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Error;
