import React from "react";
import group from "../assets/group.png";
const Slider = () => {
  return (
    <div id="home" className="slider_section">
      <div className="max-w-[1600px] m-auto flex items-center justify-between pt-3">
        <div className="slider_image text-left">
          <h2 className="font-custom text-left font-bold text-[76px] leading-[1.2] text-white">
            Manage your <br></br> project
          </h2>
          <button className="font-script btn btn-blue font-bold text-left bg-[#0D99FF] text-white pt-4 pb-4 pl-15 pr-15 mt-5 mb-7 text-2xl rounded-xl leading-none">
            Explore Your Project
          </button>
        </div>
        <div className="group_image pr-20 mr-20">
          <img src={group} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
