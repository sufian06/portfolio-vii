import React from "react";
import sufian from "../../../assets/images/hero/sufian.png";

const Hero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-5xl font-medium mb-4">Abu Sufian</h2>
          <h4 className="text-2xl capitalize">Frontend web developer</h4>
        </div>
        <div>
          <img src={sufian} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
