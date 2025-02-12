import React from "react";
import rect from "../assets/rect.png";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Gallery = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-0 md_screen">
      <div className="slider_inner_section">
        <div className="slider_search flex items-center justify-between">
          <h3 className="font-bold text-left text-2xl text-[#003F6B] capitalize">
            Recent Project Post
          </h3>
        </div>

        <div className="marquee_section flex pt-6 gap-6">
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            grabCursor={true}
            breakpoints={{
              350: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              767: {
                slidesPerView: 3.1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
            <SwiperSlide>
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
            </SwiperSlide>
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
