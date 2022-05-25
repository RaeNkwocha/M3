import React from "react";
import "../more/css/more.css";

const More = () => {
  return (
    <>
      <div className="more-grid">
        <div className="more-grid-holder">
          <div>
            {" "}
            <h2>Your Wealth... Your Legacy</h2>
          </div>
          <div>
            <p>
              Whatever your financial goals are, we will work with you to design
              tailored solutions that fit your unique aspirations.
            </p>
          </div>
          <div>
            <p>
              Our goal is to help you grow, manage and preserve your wealth for
              today and for the future.
            </p>
          </div>
          <div className="more-inner">
            <div className="inner-flex">
              <div className="inner-flex-one">
                {" "}
                <h3>Financial Advisory</h3>
              </div>
              <div className="inner-flex-two">
                {" "}
                <h3>Financial Planning</h3>
              </div>
            </div>
          </div>
          <div className="more-inner">
            <div className="inner-flex">
              <div className="inner-flex-one">
                {" "}
                <h3>Financial Advisory</h3>
              </div>
              <div className="inner-flex-two">
                {" "}
                <h3>Financial Planning</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <img src="https://www.m36ng.com/images/imgn.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default More;
