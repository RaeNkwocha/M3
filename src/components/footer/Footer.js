import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import and from "../footer/image/and.png";
import app from "../footer/image/app.png";
import "../footer/css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="inner-grid">
            <div>
              <p>F.A.Qs</p>
            </div>
            <div>
              <p>Terms and Conditions</p>
            </div>
          </div>
          <div className="socials">
            <div className="social-links">
              <div className="social-img">
                <img width="150px" src={and} alt="" />
              </div>
              <div className="social-img">
                <img width="150px" src={app} />
              </div>
            </div>
            <div className="social-grid">
              <div>
                <BsInstagram
                  style={{ color: "gold", fontSize: "1rem" }}
                ></BsInstagram>
              </div>
              <div>
                <BsTwitter
                  style={{ color: "gold", fontSize: "1rem" }}
                ></BsTwitter>
              </div>
              <div>
                <BsFacebook
                  style={{ color: "gold", fontSize: "1rem" }}
                ></BsFacebook>
              </div>
              <div>
                <AiOutlineLinkedin
                  style={{ color: "gold", fontSize: "1rem" }}
                ></AiOutlineLinkedin>
              </div>
            </div>
          </div>
          <div className="copy">
            {" "}
            <h5>
              Copyright © <span>{new Date().getFullYear()}</span> IPE,inc.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
