import React from "react";
import "../investments/css/investment.css";
import { ParallaxBanner } from "react-scroll-parallax";
import hero from "../investments/image/hero3.jpg";
const Investment = () => {
  return (
    <>
      <div style={{ heigh: "100vh" }}>
        <ParallaxBanner
          layers={[
            { image: hero, speed: -25 },
            { image: hero, speed: -25 },
          ]}
          className=" aspect aspect-[2/1] "
        >
          <div className="wealth-hero-holder">
            {" "}
            <h1 style={{ color: "white" }}>Investments</h1>
          </div>
        </ParallaxBanner>
      </div>
    </>
  );
};

export default Investment;
