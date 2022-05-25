import React from "react";
import { Link } from "react-router-dom";
import Body from "../components/Body/Body";
import Digital from "../components/Digital/Digital";
import Footer from "../components/footer/Footer";
import Header from "../components/Home/Header";
import Investment from "../components/investments/Investment";
import Life from "../components/Life/Life";
import Nav from "../components/Navigation/Nav";
import Wealth from "../components/Wealth/Wealth";

const Home = () => {
  return (
    <>
      <nav>
        <Nav></Nav>
      </nav>
      <div>
        <div>
          {" "}
          <Header></Header>
        </div>
        <div>
          <Body></Body>
        </div>
        <div>
          <Link to="/wealth">
            <Wealth></Wealth>
          </Link>
        </div>
        <div>
          <Link to="/investment">
            {" "}
            <Investment></Investment>
          </Link>
        </div>
        <div>
          <Link to="/life_essentials">
            <Life></Life>
          </Link>
        </div>
        <div>
          <Link to="/digital_concierge">
            {" "}
            <Digital></Digital>
          </Link>
        </div>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
};

export default Home;
