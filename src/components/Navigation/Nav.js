import React, { useEffect, useState } from "react";
import { BsMenuApp } from "react-icons/bs";
import "../Navigation/css/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className={show ? "nav-img active" : "nav-img"}>
          <Link to="/home">
            <img
              width="70px"
              src="https://www.m36ng.com/img/logo/logo.svg"
              alt=""
            />
          </Link>
        </div>

        <ul className="nav-flex">
          <li>Home</li>
          <li>Movies</li>
          <li>Tv shows</li>
          <li>Trending</li>
          <li>Search</li>
        </ul>
        <div>
          <BsMenuApp
            style={{
              cursor: "pointer",
              fontSize: "1.8rem",
              color: "lightGrey",
            }}
            onClick={() => handleToggle()}
          ></BsMenuApp>
        </div>
        <div
          className="cursor"
          style={{ left: cursorX + "px", top: cursorY + "px" }}
        ></div>
      </nav>
      <div className="mobile-nav">
        <div
          className="cursor"
          style={{ left: cursorX + "px", top: cursorY + "px" }}
        ></div>
        {open ? (
          <div className="menu-dropdown">
            <ul className="nav-flex-2">
              <Link style={{ textDecoration: "none" }} to="/home">
                {" "}
                <li>Home</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/wealth">
                {" "}
                <li>Wealth Management</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/investment">
                {" "}
                <li>Investments</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/life_essentials">
                {" "}
                <li>Life Essentials</li>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/digital_concierge">
                {" "}
                <li>Digital Concierge</li>
              </Link>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Nav;
