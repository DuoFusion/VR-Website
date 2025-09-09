import { Link } from "react-router-dom";
import { Mutations, Queries } from "../api";
import { NewsLetterFormValues } from "../types";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { buildPayload } from "../utils/FormHelpers";
import { NewsLetterSchema } from "../utils/ValidationSchemas";

const Footer = () => {
  const { mutate: useNewsLetter, isPending: isNewsLetterAdding } = Mutations.useNewsLetter();
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const handleSubmit = async (values: NewsLetterFormValues, { resetForm }: FormikHelpers<NewsLetterFormValues>) => {
    const payload = buildPayload(values);
    useNewsLetter(payload, { onSuccess: () => resetForm() });
  };
  return (
    <footer className="elearning-footer pt-100">
      <div className="container">
        {/*=== Newsletter Wrapper  ===*/}
        <div className="newsletter-wrapper bg_cover pt-100 pb-100" data-aos="fade-up" data-aos-duration={1200} style={{ backgroundImage: "url(assets/images/bg/cta-bg1.png)" }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/*=== Section Content Box  ===*/}
              <div className="section-content-box text-white text-center">
                <h2>Smart Solutions for a Dynamic Digital World</h2>
                <h5>Manage All Your Cards in One Place" simplifies your financial life by bringing all your credit</h5>
                <a href="https://html.pixelfit.agency/sasly/pages/contact.html" className="theme-btn style-one">
                  Find your Courses
                  <i className="fas fa-angle-double-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Widget Area ===*/}
      <div className="footer-widget-area pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 order-lg-1">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-about-widget mb-40" data-aos="fade-up" data-aos-duration={1200}>
                <div className="footer-content">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo-white.png" alt="Brand Logo" />
                    </a>
                  </div>
                  <p>We take the time to understand your unique needs a goals, offering tailored advice that drives real results.</p>
                  <ul className="social-link">
                    {WebSetting?.socialMedia?.facebook && (
                      <li>
                        <Link to={WebSetting?.socialMedia?.facebook}>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                    )}
                    {WebSetting?.socialMedia?.twitter && (
                      <li>
                        <Link to={WebSetting?.socialMedia?.twitter}>
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                    )}
                    {WebSetting?.socialMedia?.linkedin && (
                      <li>
                        <Link to={WebSetting?.socialMedia?.linkedin}>
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                    )}
                    {WebSetting?.socialMedia?.youtube && (
                      <li>
                        <Link to={WebSetting?.socialMedia?.youtube}>
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                    )}
                    {WebSetting?.socialMedia?.instagram && (
                      <li>
                        <Link to={WebSetting?.socialMedia?.instagram}>
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 order-lg-2 order-sm-3">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-nav-widget mb-40" data-aos="fade-up" data-aos-duration={1500}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="footer-content">
                      <h4 className="widget-title">Services</h4>
                      <ul className="footer-nav">
                        <li>
                          <a href="#">Business Solutions</a>
                        </li>
                        <li>
                          <a href="#">Investment Planning</a>
                        </li>
                        <li>
                          <a href="#">Marketing Solutions</a>
                        </li>
                        <li>
                          <a href="#">Banking &amp; Insurance</a>
                        </li>
                        <li>
                          <a href="#">Planning &amp; Research</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="footer-content mb-25">
                      <h4 className="widget-title">Locations</h4>
                      <p>{WebSetting?.address}</p>
                    </div>
                    <div className="footer-content">
                      <h4 className="widget-title">Get In Touch</h4>
                      <p>
                        <Link to={`mailto:${WebSetting?.email}`}>{WebSetting?.email}</Link>
                      </p>
                      <p>
                        <Link to={`tel:${WebSetting?.phoneNumber}`}>{WebSetting?.phoneNumber}</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 order-lg-3 order-sm-2">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-newsletter-widget mb-40" data-aos="fade-up" data-aos-duration={1800}>
                <div className="footer-content">
                  <h4 className="widget-title">Subscribe Newsletter</h4>
                  <p>Subscribe our newsletter to get more updates </p>
                  <Formik<NewsLetterFormValues> initialValues={{ email: "" }} validationSchema={NewsLetterSchema} onSubmit={handleSubmit}>
                    {() => (
                      <Form>
                        <div className="form-group">
                          <Field type="email" className="form_control" placeholder="Email Address" name="email" />
                          <label>
                            <i className="far fa-envelope" />
                          </label>
                          <button type="submit" className="theme-btn style-one">
                            Subscribe <i className="fas fa-angle-double-right" />
                          </button>
                        </div>
                        <ErrorMessage name="email" component="div" className="text-danger small" />
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Footer Copyright ===*/}
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>
                  © 2025 <span> HK Digiverse & IT Consultancy Pvt Ltd.</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-nav">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Workshop</a>
                  </li>
                  <li>
                    <a href="#">Course</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
