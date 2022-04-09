import React from "react";
import PropTypes from "prop-types";

function SectionCounterComponent(props) {
  const {} = props;

  return (
    <section
      className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
      id="section-counter"
    >
      <div className="container">
        <div className="row d-md-flex align-items-center align-items-stretch">
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={1100}>
                  0
                </strong>
                <span>Copies Sold</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={1200}>
                  0
                </strong>
                <span>Copies Released</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={340}>
                  0
                </strong>
                <span>Cup Of Coffee</span>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 bg-light">
              <div className="text">
                <strong className="number" data-number={12000}>
                  0
                </strong>
                <span>Happy Readers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionCounterComponent.propTypes = {};

export default SectionCounterComponent;
