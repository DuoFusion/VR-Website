import { Rate, Select } from "antd";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { Fragment, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate, useParams } from "react-router-dom";
import { Mutations, Queries } from "../../api";
import { ROUTES } from "../../constants";
import { Breadcrumbs } from "../../coreComponents";
import { GenderStatus } from "../../data";
import { WorkshopRegisterFormValues } from "../../types";
import { WorkshopRegisterSchema } from "../../utils/ValidationSchemas";

const WorkshopRegister = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: Workshop, status } = Queries.useGetWorkshopDetail(id || "");
  const All_WorkshopDetails = Workshop?.data;
  const { data: WebSettingData } = Queries.useGetWebSetting();
  const WebSetting = WebSettingData?.data;

  const { mutate: WorkshopRegister } = Mutations.useWorkshopRegister();
  const { mutate: WorkshopRegisterVerify } = Mutations.useWorkshopRegisterVerify();

  const initialValues: WorkshopRegisterFormValues = {
    workshopId: id || "",
    name: "",
    email: "",
    gender: "",
    standard: "",
    schoolName: "",
    city: "",
    whatsAppNumber: "",
    previousPercentage: undefined,
    targetPercentage: undefined,
    goal: "",
    fees: (All_WorkshopDetails?.price ?? 0) * 100,
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleSubmit = async (values: WorkshopRegisterFormValues, { resetForm, setSubmitting }: FormikHelpers<WorkshopRegisterFormValues>) => {
    WorkshopRegister(values, {
      onSuccess: (response) => {
        const orderPayload = response?.data?.razorpayOrder;
        const purchasePayload = response?.data?.purchase;
        try {
          const options = {
            key: WebSetting?.razorpayKeyId,
            amount: orderPayload?.amount,
            currency: orderPayload?.currency,
            name: "Vinu Rani",
            order_id: orderPayload?.id,
            prefill: {
              name: purchasePayload.name,
              email: purchasePayload.email,
              contact: purchasePayload.whatsAppNumber,
            },

            handler: async (response: any) => {
              try {
                WorkshopRegisterVerify(response, {
                  onSuccess: () => {
                    resetForm();
                  },
                });
              } catch (error) {}
            },
            theme: {
              color: "#3399cc",
            },
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response: any) {
            console.log(response.error);
          });
          rzp1.open();
        } catch (error) {}
        setSubmitting(false);
      },
      onError: () => setSubmitting(false),
    });
  };
  if (status === "error") navigate(ROUTES.WORKSHOP.WORKSHOP);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Workshop Register" />
      <section className="contact-form-ss course-details-ss">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/*=== Sidebar Widget Area ===*/}
              <div className="sidebar-widget-area">
                <div className="sidebar-widget sidebar-course-info-widget mb-30" data-aos="fade-up" data-aos-delay={10} data-aos-duration={900}>
                  <div className="widget-content">
                    <div className="course-preview">
                      <img src={All_WorkshopDetails?.workshopImage} alt="Course Preview" />
                    </div>
                    <div className="course-info">
                      <h4>
                        <span className="price">
                          <span className="currency">₹</span>
                          {All_WorkshopDetails?.price}
                        </span>
                        {All_WorkshopDetails?.title}
                      </h4>
                      <h4 className="title">This Workshop Includes:</h4>
                      <ul>
                        {All_WorkshopDetails?.level && (
                          <li>
                            Skill Level
                            <span>{All_WorkshopDetails?.level}</span>
                          </li>
                        )}
                        {(All_WorkshopDetails?.review ?? 0) > 0 && (
                          <li>
                            Reviews
                            <span>
                              <Rate className="reviews" value={All_WorkshopDetails?.review} disabled />
                            </span>
                          </li>
                        )}
                        {All_WorkshopDetails?.duration && (
                          <li>
                            Duration
                            <span>{All_WorkshopDetails?.duration}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              {/*=== Contact Wrapper ===*/}
              <div className="contact-wrapper mb-50" data-aos="fade-left" data-aos-duration={1400}>
                <h3>Workshop Register</h3>
                <p>Your Details will not be published. Required fields are marked *</p>
                <Formik<WorkshopRegisterFormValues> initialValues={initialValues} validationSchema={WorkshopRegisterSchema} onSubmit={handleSubmit} enableReinitialize>
                  {({ isSubmitting }) => (
                    <Form id="contact-form" className="contact-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="Name *" name="name" />
                          </div>
                          <ErrorMessage name="name" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="email" className="form_control" placeholder="Email *" name="email" />
                          </div>
                          <ErrorMessage name="email" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field name="whatsAppNumber">{({ field, form }: any) => <PhoneInput international defaultCountry="IN" value={field.value} onChange={(value) => form.setFieldValue(field.name, value)} onBlur={() => form.setFieldTouched(field.name, true)} className="form_control" placeholder="WhatsApp Number *" />}</Field>
                          </div>
                          <ErrorMessage name="whatsAppNumber" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="City *" name="city" />
                          </div>
                          <ErrorMessage name="city" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field name="gender">{({ field, form }: any) => <Select id="gender" className="form_control w-100" placeholder="Gender *" options={GenderStatus} onChange={(value) => form.setFieldValue(field.name, value)} onBlur={() => form.setFieldTouched(field.name, true)} />}</Field>
                          </div>
                          <ErrorMessage name="gender" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="Standard *" name="standard" />
                          </div>
                          <ErrorMessage name="standard" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="School Name *" name="schoolName" />
                          </div>
                          <ErrorMessage name="schoolName" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="number" className="form_control" placeholder="Previous Percentage *" name="previousPercentage" />
                          </div>
                          <ErrorMessage name="previousPercentage" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="number" className="form_control" placeholder="Target  Percentage *" name="targetPercentage" />
                          </div>
                          <ErrorMessage name="targetPercentage" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <Field type="text" className="form_control" placeholder="Goal *" name="goal" />
                          </div>
                          <ErrorMessage name="goal" component="div" className="text-danger small" />
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <button type="submit" className="theme-btn style-one">
                              {isSubmitting ? "Processing..." : "Submit"}
                              <i className="fas fa-angle-double-right" />
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

export default WorkshopRegister;
