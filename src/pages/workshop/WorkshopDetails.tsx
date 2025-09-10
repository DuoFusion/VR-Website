import React, { Fragment } from "react";
import { Breadcrumbs } from "../../coreComponents";
import { useParams } from "react-router-dom";
import { Queries } from "../../api";

const WorkshopDetails = () => {
  const { id } = useParams();
  const { data: Workshop } = Queries.useGetWorkshopDetail(id || "");
  const All_WorkshopDetails = Workshop?.data;

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Workshop" />
      <section className="course-details-ss pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/*=== Course Details ===*/}
              <div className="course-details-wrapper">
                {/*=== Thumbnail ===*/}
                <div className="course-thumbnail" data-aos="fade-up" data-aos-delay={10} data-aos-duration={900}>
                  <img src={All_WorkshopDetails?.workshopImage} alt="course thumbnail" />
                </div>
                {/*=== Course Info ===*/}
                <div className="course-info">
                  <h3 className="title">{All_WorkshopDetails?.title}</h3>
                  <div className="course-meta">
                    <div className="instructor d-flex">
                      <img src={All_WorkshopDetails?.instructorImage} className="profile-img" alt="Instructor" />
                      <div className="info">
                        <span className="position">Instructor</span>
                        <h6>David Liam</h6>
                      </div>
                    </div>
                    <div className="ef-category-box">
                      <h6>Categories</h6>
                      <a href="#">Business &amp; Marketing</a>
                    </div>
                    <div className="ef-rating-box">
                      <h6>Reviews</h6>
                      <ul className="ratings">
                        <li>
                          <span>4.85</span>
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
                        </li>
                        <li>
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sasly-tabs" data-aos="fade-up" data-aos-delay={15} data-aos-duration={1000}>
                    {/*=== Nav Tab ===*/}
                    <ul className="nav nav-tabs">
                      <li>
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#overview">
                          Overview
                        </button>
                      </li>
                      <li>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#curriculum">
                          Curriculum
                        </button>
                      </li>
                      <li>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#instructor">
                          Instructor
                        </button>
                      </li>
                      <li>
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#reviews">
                          Reviews
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content" data-aos="fade-up" data-aos-delay={20} data-aos-duration={1100}>
                    <div className="tab-pane fade show active" id="overview">
                      {/*=== Overview ===*/}
                      <div className="sasly-content-box">
                        <p>Include a concise marketing strategy, key financial projections, and a basic outline of operational needs. Keep it simple, focused, and easy to read, allowing you to present your business idea effectively while leaving room for future adjustments as your company grows.</p>
                        <p>Writing the ultimate 1-page business plan for your upcoming company is about focusing on the essentials. Start with a clear vision and mission statement that outlines your purpose and goals. Identify your target market, and briefly describe the products or services you will offer. Highlight your unique value proposition—what sets you apart from competitors.</p>
                        <h4>What You’ll Learn From This Course</h4>
                        <ul className="check-list style-one">
                          <li>
                            <i className="far fa-check" />
                            Master the basic principles and terminology of the subject.
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Learn how to present and apply your knowledge in professional settings
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Explore more complex topics and deepen your expertise as you progress.
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Develop critical thinking and troubleshooting skills for real-world scenarios.
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Gain hands-on experience with tools, techniques, and real-world applications.
                          </li>
                        </ul>
                        <h4>Certification</h4>
                        <p>Boost your career with Edufit’s globally recognized certifications. Gain practical skills in web development, digital marketing, UI/UX design, and more through flexible, self-paced learning. Complete courses, earn your certificate, and showcase your expertise to stand out in today’s competitive market. Start your journey with Edufit today!</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="curriculum">
                      {/*=== Curriculum ===*/}
                      <div className="sasly-content-box">
                        {/*====== Accordion  ======*/}
                        <div className="accordion" id="accordionOne">
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-15">
                            <div className="accordion-header">
                              <h6 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true">
                                You Can Be a Communication Skills Master
                              </h6>
                            </div>
                            <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                              <div className="accordion-content">
                                <ul className="video-list">
                                  <li>
                                    <div className="text">Please Present Yourself</div>
                                    <div className="duration">03:14</div>
                                  </li>
                                  <li>
                                    <div className="text">Instant Answers to Your Communication Skills</div>
                                    <div className="duration">04:44</div>
                                  </li>
                                  <li>
                                    <div className="text">Direct versus indirect communication</div>
                                    <div className="duration">05:37</div>
                                  </li>
                                  <li>
                                    <div className="text">Exciting New Update to this Course</div>
                                    <div className="duration">03:54</div>
                                  </li>
                                  <li>
                                    <div className="text">Communications skills are the most important skills for success</div>
                                    <div className="duration">02:12</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-15">
                            <div className="accordion-header">
                              <h6 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                                Business Communication Skills for Job Interviews
                              </h6>
                            </div>
                            <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                              <div className="accordion-content">
                                <ul className="video-list">
                                  <li>
                                    <div className="text">Establishing Your Job Interview Goals</div>
                                    <div className="duration">03:14</div>
                                  </li>
                                  <li>
                                    <div className="text">How to Dress for the Interview</div>
                                    <div className="duration">04:44</div>
                                  </li>
                                  <li>
                                    <div className="text">How to Make Small Talk</div>
                                    <div className="duration">05:37</div>
                                  </li>
                                  <li>
                                    <div className="text">Tell Me About Yourself</div>
                                    <div className="duration">03:54</div>
                                  </li>
                                  <li>
                                    <div className="text">The Proper Job Interview Mindset</div>
                                    <div className="duration">02:12</div>
                                  </li>
                                  <li>
                                    <div className="text">Ask for the Job</div>
                                    <div className="duration">02:05</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          {/*====== Accordion Item  ======*/}
                          <div className="accordion-item mb-15">
                            <div className="accordion-header">
                              <h6 className="accordion-title" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                                Communication Skills for Introducing Yourself
                              </h6>
                            </div>
                            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                              <div className="accordion-content">
                                <ul className="video-list">
                                  <li>
                                    <div className="text">How to Introduce Yourself Intro</div>
                                    <div className="duration">03:14</div>
                                  </li>
                                  <li>
                                    <div className="text">What NOT to Do</div>
                                    <div className="duration">04:44</div>
                                  </li>
                                  <li>
                                    <div className="text">How to Introduce Yourself The Right Way</div>
                                    <div className="duration">05:37</div>
                                  </li>
                                  <li>
                                    <div className="text">How to Introduce Yourself Video Rehearsal</div>
                                    <div className="duration">03:54</div>
                                  </li>
                                  <li>
                                    <div className="text">Friend Feedback</div>
                                    <div className="duration">02:12</div>
                                  </li>
                                  <li>
                                    <div className="text">How to Introduce Yourself Conclusion</div>
                                    <div className="duration">02:05</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="instructor">
                      {/*=== Instructor ===*/}
                      <div className="course-instructor-box">
                        <div className="instructor-thumbnail">
                          <img src="assets/images/instructor/instructor1.jpg" alt="instructor1 thumbnail" />
                        </div>
                        <div className="instructor-info">
                          <h4>David Carron</h4>
                          <p>David Carron is a skilled educator with expertise in web development, digital marketing, and UI/UX design. As Edufit’s lead instructor, he provides practical, hands-on learning to help students succeed.</p>
                          <ul className="social-link">
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="reviews">
                      {/*=== Reviews ===*/}
                      <div className="sasly-content-box">
                        <ul>
                          <li>
                            <div className="rating-box">
                              <div className="author-avatar">
                                <img src="assets/images/course/author1.html" alt="comment author" />
                              </div>
                              <div className="author-wrap">
                                <div className="author-content">
                                  <span className="author-name">
                                    Albert flores<span className="date">May 25, 2023</span>
                                  </span>
                                  <ul className="ratings">
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                  <p>David Carron is highly rated, with an average of 4.9/5. Students praise his clear explanations, practical insights, and engaging teaching style, making him a trusted mentor.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="rating-box">
                              <div className="author-avatar">
                                <img src="assets/images/course/author2.html" alt="comment author" />
                              </div>
                              <div className="author-wrap">
                                <div className="author-content">
                                  <span className="author-name">
                                    Albert flores<span className="date">May 25, 2023</span>
                                  </span>
                                  <ul className="ratings">
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                  <p>Sophia Taylor earns a 4.9/5 rating for her engaging teaching style, clear explanations, and practical, student-focused approach.</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WorkshopDetails;
