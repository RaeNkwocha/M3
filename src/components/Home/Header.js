import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import headervid from "../Home/image/headervid.mp4";
import "../Home/css/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-image">
          <img src="https://www.m36ng.com/img/logo/logo.svg" alt="" />
          <div>
            <h3 className="hover">Freedom to Choose</h3>
          </div>
        </div>
        <div className="video-container">
          <div className="video-overlay"></div>
          <video autoPlay loop muted>
            <source src={headervid} type="video/mp4"></source>
          </video>
        </div>
      </div>
    </>
  );
};

export default Header;
