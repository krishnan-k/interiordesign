import React from "react";
import { IoFilter } from "react-icons/io5";
import one from "../assets/1.png";
import circle from "../assets/circle.png";
import { FaLocationDot } from "react-icons/fa6";
import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const Imageslider = () => {
  return (
    <div className="box_sw">
      <div
        id="aboutus"
        className="max-w-[1600px] m-auto font-script pt-6 pb-0 md_screen"
      >
        <div className="slider_inner_section">
          <div className="slider_search flex items-center justify-between md_screen flex-wrap">
            <h3 className="font-bold text-left text-2xl text-[#003F6B] uppercase">
              live project
            </h3>

            <div className="search_input flex items-center justify-between gap-5">
              <form>
                <input
                  className="border-[2px] pt-4 pb-4 pl-8 pr-40 rounded-xl text-left border-gray-200 font-medium focus:outline-sky-500"
                  type="text"
                  placeholder="Search Your Live Project"
                  name="project"
                />
              </form>
              <div className="search_location relative">
                <input
                  className="border-[2px] pt-4 pb-4 pl-8 pr-40 rounded-xl text-left border-gray-200 font-medium focus:outline-sky-500"
                  type="text"
                  placeholder="Search for your location.."
                  name="location"
                />
                <IoFilter className="text-2xl absolute top-5 right-5" />
              </div>
            </div>
          </div>

          <Marquee speed={100} pauseOnHover={true}>
            <div className="marquee_section flex pt-6">
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
              <div className="bg-white border-[1px] border-gray-200 rounded-3xl relative mr-6">
                <div className="inner_location">
                  <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4">
                    <p className="flex items-center justify-center gap-2 text-[#003F6B] font-medium">
                      {" "}
                      <FaLocationDot className="text-2xl" /> England
                    </p>
                    <img src={circle} alt="circle" className="rounded-3xl" />
                  </div>
                </div>
                <img src={one} alt="image" className="rounded-3xl" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full text-right pt-3 pb-3 pr-5 bg-[#F5F5F5] rounded-b-3xl">
                  <p className="font-normal text-[#0D99FF] font-medium">
                    Progress
                  </p>
                  <a href="#">
                    <h5 className="font-extrabold text-2xl text-[#003F6B]">
                      Interior Works
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </Marquee>
          <div className="view_btn mt-8 text-right pb-6">
            <Link
              to="/grid"
              className="capitalize text-[#003F6B] font-bold text-xl"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
