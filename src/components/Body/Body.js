import React, { useState } from "react";
import bodyimg from "../Body/image/bodyimg.png";
import "../Body/css/body.css";
const Body = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "#141414",
        }}
      >
        <div className="body-grid">
          <div>
            {" "}
            <div>
              <h2>Introducing M36</h2>
            </div>
            <div>
              <p>
                Get on board M36 - the innovative, dynamic and on-demand
                solution to your wealth management needs. Created with you in
                mind, M36 is your track to personalised investing. With our
                range of curated investment products, lifestyle solutions, and
                digital concierge services, building wealth on your own terms
                has never been easier!
              </p>
            </div>
          </div>
          <div>
            <div className="body-img">
              <img width="100%" src={bodyimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
