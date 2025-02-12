import React from "react";
import l1 from "../assets/l1.png";
import { IoSearch } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import bgl from "../assets/bgl.png";

const ProjectList = () => {
  return (
    <>
      <div
        style={{ "--image_url": `url(${bgl})` }}
        className="bg_image_section bg-[image:var(--image_url)] bg-no-repeat bg-center bg-cover m-auto font-script h-75 flex items-end justify-center mb-4"
      >
        <p className="text-center text-3xl text-white bg_custom w-full pt-8 pb-8">
          Project initiation - The beginning of the project that includes the
          hiring of construction <br></br> and design teams, defining the scope
          of the work, creating a budget.....
        </p>
      </div>
      <div className="max-w-[1400px] m-auto font-script pt-6 pb-6">
        <div className="project_list_section">
          <h3 className="font-bold text-left text-2xl text-[#003F6B] capitalize">
            Project list
          </h3>

          <div className="search_section">
            <div className="project_location mt-3 flex justify-between">
              <div className="relative">
                <input
                  name="email"
                  type="text"
                  placeholder="Search any"
                  className="bg-gray-100 block w-2xl px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
                <IoSearch className="absolute right-3 top-4 text-2xl text-gray-400 font-semibold" />
              </div>
              <div className="sort_btn flex items-center gap-4">
                <LuFilter className="text-4xl" />
                <button class="font-bold text-left text-xl text-black rounded-lg px-5 bg-[#F5F5F5] pt-3 pb-3 pl-8 pr-8 capitalize w-full flex items-center">
                  Sort by
                  <div className="left_icons pl-4">
                    <FaArrowDown className="text-gray-900" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center border-gray-300 border-[2px] hover:bg-gray-100 bg-[#F5F5F5] gap-1.5 mt-6">
            <img src={l1} alt="list-image" />
            <div class="p-4 leading-normal w-full relative">
              <div className="interns absolute right-0 -inset-y-3">
                <p
                  style={{ lineHeight: "normal" }}
                  className="text-gray-700 bg-[#FFCD29] pt-1 pb-1 pl-2 pr-2 font-bold inline text-sm"
                >
                  Interns : 0
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="tags flex gap-2 pb-3">
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Kitchen
                    </p>
                    <p
                      style={{ lineHeight: "normal" }}
                      className="text-gray-700 bg-white pt-1 pb-1 pl-2 pr-2 border-[1.5px] border-gray-300 inline text-sm"
                    >
                      Splashback
                    </p>
                  </div>
                  <h5 className="font-bold text-left pb-1 text-2xl text-black">
                    Kitchen Workshop
                  </h5>
                </div>
                <div className="post_date">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Posted 07/08/24
                  </p>
                </div>
              </div>

              <div className="inner_content flex items-start gap-15  text-left pb-2 border-b-[1.5px] border-gray-300">
                <div className="pr-17 border-r-[1.5px] border-gray-300">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Bristol - England
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Slab - Marble
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Duration : Completed
                  </p>
                </div>
                <div className="">
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Price - Fixed
                  </p>
                  <p className="font-normal text-black font-medium mt-1.5 mb-1.5">
                    Expiry Date - Marble
                  </p>
                </div>
              </div>
              <div className="project_status flex items-center justify-between pt-3.5 pb-3 border-b-[1.5px] border-gray-300">
                <p className="text-black font-bold leading-none">
                  Project Status : Active
                </p>
                <p className="text-black font-bold leading-none">
                  Last Update: 2024-08-12
                </p>
                <p className="text-black font-bold leading-none">
                  Proposal : 23
                </p>
              </div>
              <div className="Description pt-4">
                <h5 className="font-bold text-left pb-1 text-xl text-black">
                  Description
                </h5>
                <p className="text-left font-base">
                  Project initiation - The beginning of the project that
                  includes the hiring of construction <br></br> and design
                  teams, defining the scope of the work, creating a budget.....
                </p>
              </div>

              <div className="desc_btn mt-4">
                <div className="budget_btn flex gap-5">
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    View
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Send a Proposal
                  </button>
                  <button class="text-white text-xl rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-bold capitalize w-full">
                    Apply Internship
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pagination mt-10 flex gap-4 items-center justify-center">
            <p
              style={{ lineHeight: "normal" }}
              className=" text-[#0D99FF] bg-white pt-2 pb-2 pl-4 pr-4 border-[2px] border-gray-300 inline text-xl font-bold rounded-lg"
            >
              1
            </p>
            <p
              style={{ lineHeight: "normal" }}
              className="text-gray-700 bg-white pt-2 pb-2 pl-4 pr-4 border-[2px] border-gray-300 inline text-xl font-bold rounded-lg"
            >
              2
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
