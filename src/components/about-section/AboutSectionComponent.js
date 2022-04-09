import React from "react";
import PropTypes from "prop-types";

function AboutSectionComponent(props) {
  const {} = props;

  return (
    <section className="ftco-about img ftco-section" id="about-section">
      <div className="container">
        <div className="row d-flex no-gutters">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(images/bg_1.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 pl-md-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h2 className="mb-4">About The Book</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <div className="text-about">
                  <h4>Award achievements</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.
                  </p>
                  <h4>Read On Any Devices</h4>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                  <h4>Very High Resolution</h4>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutSectionComponent.propTypes = {};

export default AboutSectionComponent;
