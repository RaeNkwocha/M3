import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Nav from "./components/Navigation/Nav";

function App() {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });
  return (
    <div>
      <Nav></Nav>
      <div>
        <Loading></Loading>
        <div
          className="cursor"
          style={{ left: cursorX + "px", top: cursorY + "px" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
