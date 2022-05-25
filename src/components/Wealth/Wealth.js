import React from "react";
import { Link } from "react-router-dom";
import { ParallaxBanner } from "react-scroll-parallax";
import hero from "../Wealth/image/wealth.jpg";
import "../Wealth/css/wealth.css";

const Wealth = () => {
  return (
    <>
      <div style={{ heigh: "100vh" }}>
        <ParallaxBanner
          layers={[
            { image: hero, speed: 25 },
            { image: hero, speed: 25 },
          ]}
          className=" aspect aspect-[2/1]"
        >
          <div className="wealth-hero-holder">
            {" "}
            <h1 style={{ color: "white" }}>Wealth Management</h1>
          </div>
        </ParallaxBanner>
      </div>
    </>
  );
};

export default Wealth;
