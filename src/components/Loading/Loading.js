import React, { useEffect, useState } from "react";
import Home from "../../pages/Home";
import "../Loading/css/loading.css";
const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <>
      {" "}
      <div>
        {loading ? (
          <div style={{ background: "#000000", height: "100vh" }}>
            <div
              style={{
                display: "flex",
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "50vh",
              }}
            >
              <h1 className="text animation" style={{ color: "white" }}>
                Please Wait...
              </h1>
            </div>
          </div>
        ) : (
          <Home></Home>
        )}
      </div>
    </>
  );
};

export default Loading;
