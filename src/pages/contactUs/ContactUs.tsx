import { Fragment } from "react";
import { Breadcrumbs } from "../../coreComponents";
import { Mutations, Queries } from "../../api";
import { Link } from "react-router-dom";
import { ImagePath } from "../../constants";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { ContactUsSchema } from "../../utils/ValidationSchemas";
import { ContactUsFormValues } from "../../types";

const ContactUs = () => {
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { mutate: useContactUs } = Mutations.useContactUs();

  const handleSubmit = async (values: ContactUsFormValues, { resetForm }: FormikHelpers<ContactUsFormValues>) => {
    useContactUs(values, { onSuccess: () => resetForm() });
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Contact Us" />
      <section className="contact-ss pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Sasly Iconic Box ===*/}
              <div className="sasly-iconic-box style-twelve mb-30" data-aos="fade-up" data-aos-delay={10} data-aos-duration={1300}>
                <div className="icon">
                  <i className="flaticon-route" />
                </div>
                <div className="content">
                  <h5>Address</h5>
                  <p>{WebSetting?.address}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Sasly Iconic Box ===*/}
              <div className="sasly-iconic-box  style-twelve mb-30" data-aos="fade-up" data-aos-delay={15} data-aos-duration={1600}>
                <div className="icon">
                  <i className="flaticon-mailbox" />
                </div>
                <div className="content">
                  <h5>Email Address</h5>
                  <p>
                    <Link to={`mailto:${WebSetting?.email}`}>{WebSetting?.email}</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Sasly Iconic Box ===*/}
              <div className="sasly-iconic-box  style-twelve mb-30" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1900}>
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="content">
                  <h5>Emergency</h5>
                  <p>
                    <Link to={`tel:${WebSetting?.phoneNumber}`}>{WebSetting?.phoneNumber}</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-ss pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/*=== Section Content Box ===*/}
              <div className="section-content-box mb-50" data-aos="fade-right" data-aos-duration={1200}>
                <div className="section-title mb-30">
                  <span className="sub-heading">Get In Touch</span>
                  <h2 className="text-anm">Need Any Helps &amp; Grow sales</h2>
                </div>
                <p data-aos="fade-up" data-aos-duration={1000}>
                  Business consulting agency can a game-changer, fresh perspectives, specialized experts{" "}
                </p>
                <div className="sasly-img" data-aos="fade-up" data-aos-duration={1200}>
                  <img src={`${ImagePath}contact/contact1.jpg`} alt="Contact Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/*=== Contact Wrapper ===*/}
              <div className="contact-wrapper mb-50" data-aos="fade-left" data-aos-duration={1400}>
                <h3>Send Message Us</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <Formik<ContactUsFormValues> initialValues={{ name: "", email: "", message: "" }} validationSchema={ContactUsSchema} onSubmit={handleSubmit} enableReinitialize>
                  {() => (
                    <Form id="contact-form" className="contact-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="Name" name="name" />
                          </div>
                          <ErrorMessage name="name" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="email" className="form_control" placeholder="Email" name="email" />
                          </div>
                          <ErrorMessage name="email" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <Field className="form_control" placeholder="Message" type="textarea" name="message" rows={5} cols={8} />
                          </div>
                          <ErrorMessage name="message" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button type="submit" className="theme-btn style-one">
                              Send Message Us <i className="far fa-angle-double-right" />
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <p className="form-message" />
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactUs;
