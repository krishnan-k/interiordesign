import React from "react";
import t1 from "../assets/t1.png";
import { Link } from "react-router";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const pagination = {
    clickable: true,
  };
  const autoplay = {
    delay: 5000,
    disableOnInteraction: false,
  };
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6 testimonial_section">
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        available intern
      </h3>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={25}
        grabCursor={true}
        navigation={true}
        autoplay={autoplay}
        pagination={pagination}
        modules={[Navigation, Autoplay, Pagination]}
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
              <div className="p-2 text-center">
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
