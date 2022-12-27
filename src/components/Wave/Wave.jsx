import "./Wave.css";
import SvgWave from "./SvgWave";
import React from "react";

function Wave() {
  return (
    <>
      <div className="header">
        <div className="inner__header">
          {/* <img className="img" src="wave.svg" alt="" /> */}
        </div>
        <SvgWave />
      </div>
    </>
  );
}

export default Wave;
