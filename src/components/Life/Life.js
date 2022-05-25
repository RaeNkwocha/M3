import React from "react";
import "../Life/css/life.css";
import { ParallaxBanner } from "react-scroll-parallax";
import hero from "../Life/image/04hero.jpg";

const Life = () => {
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
            <h1 style={{ color: "white" }}>Life Essentials</h1>
          </div>
        </ParallaxBanner>
      </div>
    </>
  );
};

export default Life;
