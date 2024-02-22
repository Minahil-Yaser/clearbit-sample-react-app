import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <h2
          style={{ textAlign: "center", color: "#1c91c0", paddingTop: "80px" }}
        >
          B2B Helper
        </h2>
        <br></br>
        <a href="/enrichment" className="btn btn-info" role="button">
          Enrichment Tool
        </a>
        <a href="/risk" className="btn btn-info" role="button">
          Risk Calculator
        </a>
      </div>
    </>
  );
};

export default Home;
