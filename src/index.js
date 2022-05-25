import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./index.css";
import App from "./App";
import Management from "./pages/management/Management";
import Newinvestment from "./pages/investments/Newinvestment";
import Essentials from "./pages/Life/Essentials";
import Concierge from "./pages/Digital/Concierge";
import Scroll from "./components/Scroll/Scroll";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ParallaxProvider>
    <BrowserRouter>
      <Scroll>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wealth" element={<Management />} />
          <Route path="/investment" element={<Newinvestment />} />
          <Route path="/life_essentials" element={<Essentials />} />
          <Route path="/digital_concierge" element={<Concierge />} />
        </Routes>
      </Scroll>
    </BrowserRouter>
  </ParallaxProvider>
);
