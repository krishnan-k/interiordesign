import React from "react";
import group from "../assets/group.png";
import { TypeAnimation } from "react-type-animation";
const Slider = () => {
  return (
    <div id="home" className="slider_section">
      <div className="max-w-[1600px] m-auto flex items-center justify-between pt-3 md_screen">
        <div className="slider_image text-left">
          <h2 className="font-custom text-left font-bold text-[76px] leading-[1.2] text-white">
            Manage your <br></br> project
            <TypeAnimation
              sequence={[
                1000,
                "FASTER",
                1000,
                "EASY",
                1000,
                "EFFECIENTLY",
                1000,
              ]}
              wrapper="span"
              speed={15}
              style={{
                display: "inline-block",
                marginLeft: "25px",
                background: "linear-gradient(45deg, #25E905 0%, #5EC5FF 100%, #FFF509 97%)",
                WebkitBackgroundClip: "text",
                fontWeight: "400",
                color: "transparent",
              }}
              repeat={Infinity}
            />
          </h2>
          <button className="font-script btn btn-blue drop-shadow-lg font-bold text-left bg-[#0D99FF] text-white pt-4 pb-4 pl-15 pr-15 mt-5 mb-7 text-2xl rounded-xl leading-none">
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
