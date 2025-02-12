import React from "react";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import { Link } from "react-router";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonial = () => {
  const autoplay = {
    delay: 5000,
    disableOnInteraction: false,
  };
  return (
    <div id="process" className="max-w-[1600px] m-auto font-script pt-6 pb-0 testimonial_section md_screen">
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        available intern
      </h3>
      <Swiper
        slidesPerView={4.5}
        grabCursor={true}
        autoplay={autoplay}
        breakpoints={{
          350: {
            slidesPerView: 1.1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          767: {
            slidesPerView: 3.1,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t1}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t2}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t3}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t4}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t1}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t2}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col bg-white rounded-lg p-6 testi_overlay relative z-[1]">
            <div className="shadow-sm border border-slate-200 bg-white rounded-lg mt-20">
              <div className="rounded-md flex justify-center items-center -mt-[80px]">
                <img
                  src={t3}
                  alt="logo"
                  className="border-[3px] border-white rounded-full shadow-lg"
                />
              </div>
              <div className="p-3 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#003F6B]">
                  Natalie Paisley
                </h4>
                <p className="text-base font-semibold capitalize text-[#003F6B]">
                  Intern
                </p>
              </div>
              <div className="flex justify-center pb-7">
                <Link to="">
                  <button className="w-full btn btn-blue font-medium bg-[#003F6B] capitalize text-white pt-4 pb-4 pl-5 pr-5 text-base rounded-md leading-none">
                    view profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
