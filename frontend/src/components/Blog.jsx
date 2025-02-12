import React from "react";
import b1 from "../assets/b1.jpg";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Blog = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6 md_screen">
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        blog
      </h3>

      <Swiper
        slidesPerView={4.5}
        spaceBetween={25}
        grabCursor={true}
        loop={true}
        breakpoints={{
          350: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1.2,
            spaceBetween: 40,
          },
          767: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-xl overflow-hidden p-4 bg-[#F5F5F5]">
            <div className="relative">
              <img src={b1} alt="rect" className="w-full" />
            </div>
            <div className="">
              <div className="pt-3">
                <p className="text-center font-base">
                  Safe measures can refer to a wide range of precautions
                </p>
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

export default Blog;
