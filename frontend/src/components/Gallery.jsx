import React from "react";
import rect from "../assets/rect.png";
import { Link } from "react-router";
const Gallery = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6">
      <div className="slider_inner_section">
        <div className="slider_search flex items-center justify-between">
          <h3 className="font-bold text-left text-2xl text-[#003F6B] capitalize">
            Recent Project Post
          </h3>
        </div>

        <div className="marquee_section flex pt-6 gap-6">
          <div className="bg-white border-[1.5px] border-gray-200 relative rounded-b-xl card_section w-1/2">
            <div className="inner_location">
              <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4"></div>
            </div>
            <div className="overlay_image relative">
              <h5 className="font-extrabold pb-1 text-2xl text-[#003F6B] absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1] invisible opacity-[0]">
                Kitchen Worktop
              </h5>
              <img src={rect} alt="rect" className="w-full" />
            </div>
            <div className="text-left p-5 bg-[#F5F5F5] border-[0.5px] border-gray-200">
              <a href="#">
                <h5 className="font-extrabold pb-1 text-xl text-[#003F6B]">
                  Kitchen Worktop
                </h5>
              </a>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Bristol - England
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Slab - Marble
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Duration : Completed
              </p>
            </div>
            <div className="project_btn">
              <Link to="">
                <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-5 pb-5 pl-7 pr-7 text-base rounded-b-xl leading-none">
                  view project
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white border-[1.5px] border-gray-200 relative rounded-b-xl card_section w-1/2">
            <div className="inner_location">
              <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4"></div>
            </div>
            <div className="overlay_image relative">
              <h5 className="font-extrabold pb-1 text-2xl text-[#003F6B] absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1] invisible opacity-[0]">
                Kitchen Worktop
              </h5>
              <img src={rect} alt="rect" className="w-full" />
            </div>
            <div className="text-left p-5 bg-[#F5F5F5] border-[0.5px] border-gray-200">
              <a href="#">
                <h5 className="font-extrabold pb-1 text-xl text-[#003F6B]">
                  Kitchen Worktop
                </h5>
              </a>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Bristol - England
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Slab - Marble
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Duration : Completed
              </p>
            </div>
            <div className="project_btn">
              <Link to="">
                <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-5 pb-5 pl-7 pr-7 text-base rounded-b-xl leading-none">
                  view project
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white border-[1.5px] border-gray-200 relative rounded-b-xl card_section w-1/2">
            <div className="inner_location">
              <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4"></div>
            </div>
            <div className="overlay_image relative">
              <h5 className="font-extrabold pb-1 text-2xl text-[#003F6B] absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1] invisible opacity-[0]">
                Kitchen Worktop
              </h5>
              <img src={rect} alt="rect" className="w-full" />
            </div>
            <div className="text-left p-5 bg-[#F5F5F5] border-[0.5px] border-gray-200">
              <a href="#">
                <h5 className="font-extrabold pb-1 text-xl text-[#003F6B]">
                  Kitchen Worktop
                </h5>
              </a>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Bristol - England
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Slab - Marble
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Duration : Completed
              </p>
            </div>
            <div className="project_btn">
              <Link to="">
                <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-5 pb-5 pl-7 pr-7 text-base rounded-b-xl leading-none">
                  view project
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white border-[1.5px] border-gray-200 relative rounded-b-xl card_section w-1/2">
            <div className="inner_location">
              <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4"></div>
            </div>
            <div className="overlay_image relative">
              <h5 className="font-extrabold pb-1 text-2xl text-[#003F6B] absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1] invisible opacity-[0]">
                Kitchen Worktop
              </h5>
              <img src={rect} alt="rect" className="w-full" />
            </div>
            <div className="text-left p-5 bg-[#F5F5F5] border-[0.5px] border-gray-200">
              <a href="#">
                <h5 className="font-extrabold pb-1 text-xl text-[#003F6B]">
                  Kitchen Worktop
                </h5>
              </a>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Bristol - England
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Slab - Marble
              </p>
              <p className="font-normal text-[#003F6B] font-medium mt-1.5 mb-1.5">
                Duration : Completed
              </p>
            </div>
            <div className="project_btn">
              <Link to="">
                <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-5 pb-5 pl-7 pr-7 text-base rounded-b-xl leading-none">
                  view project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
