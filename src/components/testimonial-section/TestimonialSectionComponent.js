import React from "react";
import PropTypes from "prop-types";

function TestimonialSectionComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section testimony-section ftco-no-pb"
      id="testimonial-section"
    >
      <div
        className="img img-bg border"
        style={{ backgroundImage: "url(images/bg_4.jpg)" }}
      />
      <div className="overlay" />
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center heading-section heading-section-white ftco-animate">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Kinds Words From Customers</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12">
            <div className="carousel-testimony owl-carousel ftco-owl">
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_3.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_1.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimony-wrap py-4">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="fa fa-quote-left" />
                  </div>
                  <div className="text">
                    <p className="mb-4">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <div className="d-flex align-items-center">
                      <div
                        className="user-img"
                        style={{ backgroundImage: "url(images/person_2.jpg)" }}
                      />
                      <div className="pl-3">
                        <p className="name">Roger Scott</p>
                        <span className="position">Marketing Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

TestimonialSectionComponent.propTypes = {};

export default TestimonialSectionComponent;
