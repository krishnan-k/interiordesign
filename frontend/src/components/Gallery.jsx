import React, { useState } from "react";
import rect from "../assets/rect.png";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import c1 from "../assets/c2.png";
import c2 from "../assets/c3.png";
import c3 from "../assets/c4.png";
import { IoIosCloseCircle } from "react-icons/io";

const Gallery = () => {
  const [expandedSlides, setExpandedSlides] = useState({}); // State to manage expanded slides

  const toggleProfiles = (index) => {
    setExpandedSlides((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div
      id="service"
      className="max-w-[1600px] m-auto font-script pt-6 pb-0 md_screen"
    >
      <div className="slider_inner_section">
        <div className="slider_search flex items-center justify-between">
          <h3 className="font-bold text-left text-2xl text-[#003F6B] capitalize">
            Recent Project Post
          </h3>
        </div>

        <div className="marquee_section flex pt-6 gap-6">
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border-[1.5px] border-gray-200 relative rounded-b-xl card_section">
                  <div className="inner_location">
                    <div className="location absolute flex items-center justify-between w-full pl-4 pr-4 top-4"></div>
                  </div>
                  <div className="overlay_image relative">
                    <h5 className="font-extrabold pb-1 text-2xl text-[#003F6B] absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1] invisible opacity-[0]">
                      Kitchen Worktop
                    </h5>
                    <img src={rect} alt="rect" className="w-full" />
                  </div>
                  <div className="flex items-end justify-between bg-[#F5F5F5] border-[0.5px] border-gray-200">
                    <div className="text-left p-5">
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
                    <div className="expanding_profile">
                      <div className="p-0 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <div className="relative flex items-center mb-5">
                            <div className="image_terms flex items-center">
                              <img
                                src={c1}
                                alt="rect"
                                className="border-[3px] border-[#003F6B] rounded-full shadow-lg z-40 w-[50px] h-[50px]"
                              />
                              <img
                                src={c2}
                                alt="rect"
                                className="relative border-[3px] border-[#003F6B] rounded-full shadow-lg -inset-x-5 z-30 w-[50px] h-[50px]"
                              />
                              <img
                                src={c3}
                                alt="Overlapping"
                                className=" rounded-full object-cover relative -inset-x-10 border-[3px] border-[#003F6B] rounded-full shadow-lg w-[50px] h-[50px] z-20"
                              />
                            </div>

                            {!expandedSlides[index] && (
                              <span
                                onClick={() => toggleProfiles(index)}
                                className="absolute z-30 top-1/2 left-22 transform -translate-y-1/2 bg-gray-800 text-white font-bold text-xs w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                              >
                                +1
                              </span>
                            )}
                            {expandedSlides[index] && (
                              <div className="absolute right-4 z-30">
                                <div className="flex items-center relative">
                                  {[...Array(1)].map((_, i) => (
                                    <div
                                      key={i}
                                      className="flex items-center w-[50px] h-[50px]"
                                    >
                                      <img
                                        src={c1}
                                        alt="rect"
                                        className="border-[3px] border-[#003F6B] rounded-full shadow-lg z-10 w-[50px] h-[50px]"
                                      />
                                    </div>
                                  ))}
                                  <IoIosCloseCircle
                                    className="bg-white rounded-full w-[35px] h-[35px] absolute inset-x-8 z-30 top-1/2 -translate-y-1/2"
                                    onClick={() => toggleProfiles(index)}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="project_btn">
                    <Link to="">
                      <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-5 pb-5 pl-7 pr-7 text-base rounded-b-xl leading-none">
                        view project
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="view_btn mt-8 text-right">
          <Link
            to="/list"
            className="capitalize text-[#003F6B] font-bold text-xl"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
