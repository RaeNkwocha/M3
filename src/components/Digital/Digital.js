import React from "react";
import "../Digital/css/digital.css";
import { ParallaxBanner } from "react-scroll-parallax";
import hero from "../Digital/image/02hero.jpg";

const Digital = () => {
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
            <h1 style={{ color: "white" }}>Digital Concierge</h1>
          </div>
        </ParallaxBanner>
      </div>
    </>
  );
};

export default Digital;
