import React, { useState } from "react";
import Digital from "../../components/Digital/Digital";
import More from "../../components/more/More";
import and from "../../components/footer/image/and.png";
import app from "../../components/footer/image/app.png";
import Wealth from "../../components/Wealth/Wealth";
import { Link } from "react-router-dom";
import Nav from "../../components/Navigation/Nav";

const Concierge = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <div>
        <Digital></Digital>
      </div>
      <div>
        <div className="manage-body">
          <div className="center-text">
            <div>
              <div>
                <h3>About M36 Wealth Management</h3>
              </div>
              <h2>
                We treat you like you are our top priority because you are!
              </h2>
            </div>
            <div>
              <p>
                You are in for a treat! Enjoy exclusive products, portfolio
                management and access to expert investment advisors when you
                sign up as a Wealth Management client. This proposition is
                strictly by invitation. Please get in touch with our Concierge
                to find out more.
              </p>
              <div className="download-link">
                <div>
                  <img src={and} alt="" />
                </div>
                <div>
                  <img src={app} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <More></More>
      </div>
      <div>
        <Link to="/wealth">
          {" "}
          <Wealth></Wealth>
        </Link>
      </div>
      <div
        className="cursor"
        style={{ left: cursorX + "px", top: cursorY + "px" }}
      ></div>
    </>
  );
};

export default Concierge;
