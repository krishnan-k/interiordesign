import React from "react";
import r1 from "../assets/r1.png";
import r2 from "../assets/r2.png";
import r3 from "../assets/r3.png";
import r4 from "../assets/r4.png";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Project = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6">
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        projects
      </h3>

      <Swiper
        slidesPerView={3.8}
        spaceBetween={25}
        grabCursor={true}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <img src={r1} alt="rect" className="w-full" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-[1]">
                <p className="text-white font-bold text-xl bg-ston-100 bg_custom pt-1 pb-1 pl-8 pr-8 text-left">
                  Home Renovation
                </p>
              </span>
            </div>
            <div className="px-4 pb-4 bg-[#F5F5F5]">
              <div className="pt-4">
                <p className="text-left font-base bg-white p-3 rounded-xl">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction and design teams, defining
                  the scope of the work, creating a budget.....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pl-3">
                <span className="text-xl font-bold text-[#003F6B]">
                  Budget : £ 100
                </span>
                <button className="text-white text-lg rounded-lg px-5 bg-[#003F6B] pt-2 pb-2 pl-8 pr-8 font-medium capitalize">
                  view
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <img src={r2} alt="rect" className="w-full" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-[1]">
                <p className="text-white font-bold text-xl bg-ston-100 bg_custom pt-1 pb-1 pl-8 pr-8 text-left">
                  Home Renovation
                </p>
              </span>
            </div>
            <div className="px-4 pb-4 bg-[#F5F5F5]">
              <div className="pt-4">
                <p className="text-left font-base bg-white p-3 rounded-xl">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction and design teams, defining
                  the scope of the work, creating a budget.....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pl-3">
                <span className="text-xl font-bold text-[#003F6B]">
                  Budget : £ 100
                </span>
                <button className="text-white text-lg rounded-lg px-5 bg-[#003F6B] pt-2 pb-2 pl-8 pr-8 font-medium capitalize">
                  view
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <img src={r3} alt="rect" className="w-full" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-[1]">
                <p className="text-white font-bold text-xl bg-ston-100 bg_custom pt-1 pb-1 pl-8 pr-8 text-left">
                  Home Renovation
                </p>
              </span>
            </div>
            <div className="px-4 pb-4 bg-[#F5F5F5]">
              <div className="pt-4">
                <p className="text-left font-base bg-white p-3 rounded-xl">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction and design teams, defining
                  the scope of the work, creating a budget.....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pl-3">
                <span className="text-xl font-bold text-[#003F6B]">
                  Budget : £ 100
                </span>
                <button className="text-white text-lg rounded-lg px-5 bg-[#003F6B] pt-2 pb-2 pl-8 pr-8 font-medium capitalize">
                  view
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <img src={r4} alt="rect" className="w-full" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-[1]">
                <p className="text-white font-bold text-xl bg-ston-100 bg_custom pt-1 pb-1 pl-8 pr-8 text-left">
                  Home Renovation
                </p>
              </span>
            </div>
            <div className="px-4 pb-4 bg-[#F5F5F5]">
              <div className="pt-4">
                <p className="text-left font-base bg-white p-3 rounded-xl">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction and design teams, defining
                  the scope of the work, creating a budget.....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pl-3">
                <span className="text-xl font-bold text-[#003F6B]">
                  Budget : £ 100
                </span>
                <button className="text-white text-lg rounded-lg px-5 bg-[#003F6B] pt-2 pb-2 pl-8 pr-8 font-medium capitalize">
                  view
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden">
            <div className="relative">
              <img src={r3} alt="rect" className="w-full" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full z-[1]">
                <p className="text-white font-bold text-xl bg-ston-100 bg_custom pt-1 pb-1 pl-8 pr-8 text-left">
                  Home Renovation
                </p>
              </span>
            </div>
            <div className="px-4 pb-4 bg-[#F5F5F5]">
              <div className="pt-4">
                <p className="text-left font-base bg-white p-3 rounded-xl">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction and design teams, defining
                  the scope of the work, creating a budget.....
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pl-3">
                <span className="text-xl font-bold text-[#003F6B]">
                  Budget : £ 100
                </span>
                <button className="text-white text-lg rounded-lg px-5 bg-[#003F6B] pt-2 pb-2 pl-8 pr-8 font-medium capitalize">
                  view
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="view_btn mt-8 text-right">
        <Link to="" className="capitalize text-[#003F6B] font-bold text-xl">
          View all
        </Link>
      </div>
    </div>
  );
};

export default Project;
