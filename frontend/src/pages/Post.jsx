import React from "react";
import p1 from "../assets/p1.png";
import { IoSearch } from "react-icons/io5";

const Post = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-6 pb-6 mt-12 md_screen">
      <div className="post_content flex justify-between gap-4">
        <div className="image_section rounded-xl overflow-hidden mx-auto w-full max-w-2xl sticky size-fit top-0">
          <img src={p1} alt="rect" className="w-full" />
        </div>
        <div className="post_inner-content outline-1 -outline-offset-1 outline-gray-200 mx-auto w-full max-w-2xl p-6 rounded-lg">
          <div className="note_project bg-[#DBE7F1] rounded-lg p-4">
            <h4 className="font-bold text-xl capitalize text-[#003F6B] pb-2">
              Note
            </h4>
            <ul class="list-disc pl-8">
              <li className="text-left mb-1 text-[#003F6B]">
                Precision is key! Customers who provide clear descriptions get
                optimal proposals for easy project completion.
              </li>
              <li className="text-left mb-1 text-[#003F6B]">
                To make it better, we suggest you upload relevant (pictures,
                documents, specifications, etc) for clarity.
              </li>
            </ul>
          </div>

          <div className="post_project">
            <h2 className="font-bold text-2xl capitalize text-[#003F6B] pb-3 pt-3 text-3xl text-[#003F6B] bg-[#DBE7F1] rounded-lg mt-4">
              Post a Project
            </h2>
          </div>

          <div className="category_select mt-7">
            <form class="w-full mx-auto">
              <label
                for="category"
                class="block mb-1 text-md text-left font-medium text-[#003F6B]"
              >
                Category <span className="text-red-500">*</span>
              </label>
              <select class="block w-full bg-white px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400">
                <option selected>Select Options</option>
                <option value="Options-1">Options 1</option>
                <option value="Options-2">Options 2</option>
                <option value="Options-3">Options 3</option>
                <option value="Options-4">Options 4</option>
              </select>
            </form>
          </div>

          <div className="category_sub_select mt-7">
            <form class="w-full mx-auto">
              <label
                for="sub_category"
                class="block mb-1 text-md text-left font-medium text-[#003F6B]"
              >
                Sub Category<span className="text-red-500">*</span>
              </label>
              <select
                id="countries"
                class="block w-full bg-white px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
              >
                <option selected>Select Options</option>
                <option value="Options-1">Options 1</option>
                <option value="Options-2">Options 2</option>
                <option value="Options-3">Options 3</option>
                <option value="Options-4">Options 4</option>
              </select>
            </form>
          </div>

          <div className="project_title mt-7">
            <label
              htmlFor="title"
              className="block mb-1 text-md text-left font-medium text-[#003F6B]"
            >
              Project Title<span className="text-red-500">*</span>
            </label>
            <div className="">
              <input
                name="email"
                type="text"
                placeholder="Type your project title"
                className="bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="project_desc mt-7">
            <label
              htmlFor="desc"
              className="block mb-1 text-md text-left font-medium text-[#003F6B]"
            >
              Project Description<span className="text-red-500">*</span>
            </label>
            <div className="">
              <textarea
                name="desc"
                rows={5}
                className=" bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                defaultValue={""}
              />
            </div>
          </div>

          <div className="file_input mt-7">
            <label
              htmlFor="file"
              className="block mb-1 text-md text-left font-medium text-[#003F6B]"
            >
              Upload file<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center w-full mt-1">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-25 border-2 border-gray-100 border-dashed rounded-lg cursor-pointer bg-[#DBE7F1] dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-200"
              >
                <div className="flex items-center justify-center pt-5 pb-6 pl-3 pr-3 gap-4">
                  <svg
                    className="w-8 h-8 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <div className="">
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <div className="budget_type mt-7">
              <label
                htmlFor="file"
                className="block mb-1 text-md text-left font-medium text-[#003F6B]"
              >
                Budget Type<span className="text-red-500">*</span>
              </label>
              <div className="budget_btn flex gap-5 mt-1">
                <button class="text-white text-base rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-medium capitalize w-full">
                  fixed
                </button>
                <button class="text-white text-base rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-medium capitalize w-full">
                  range
                </button>
                <button class="text-white text-base rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-medium capitalize w-full">
                  no idea
                </button>
              </div>
            </div>

            <div className="project_location mt-7">
              <label
                htmlFor="title"
                className="block mb-1 text-md text-left font-medium text-[#003F6B]"
              >
                Project Location<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  name="email"
                  type="text"
                  placeholder="Search for your location"
                  className="bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                />
                <IoSearch className="absolute right-3 top-4 text-2xl text-gray-400 font-semibold" />
              </div>
            </div>

            <div className="post_code mt-7">
              <form>
                <label
                  htmlFor="title"
                  className="block mb-1 text-md text-left font-medium text-[#003F6B]"
                >
                  Post Code<span className="text-red-500">*</span>
                </label>
                <div className="flex gap-4">
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                  <input
                    name="email"
                    type="text"
                    placeholder="-"
                    className="w-full text-center block px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </form>
            </div>

            <div className="project_day mt-7">
              <p className="block mb-1 text-md text-left font-medium text-[#003F6B] capitalize mb-2">
                project duration days<span className="text-red-500">*</span>
              </p>
              <div className="select_date flex gap-5 flex-wrap">
                <div class="relative w-full">
                  <label
                    htmlFor="title"
                    className="block mb-1 text-sm text-left font-medium text-[#003F6B]"
                  >
                    Start Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    datepicker
                    id="default-datepicker"
                    type="text"
                    class="bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                    placeholder="Select date"
                  />
                  <div class="absolute top-10.5 end-5 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div class="relative w-full">
                  <label
                    htmlFor="title"
                    className="block mb-1 text-sm text-left font-medium text-[#003F6B]"
                  >
                    End Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    datepicker
                    id="default-datepicker"
                    type="text"
                    class="bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                    placeholder="Select date"
                  />
                  <div class="absolute top-10.5 end-5 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="total_days_content">
                  <p className="block mb-1 text-sm text-left font-medium text-[#003F6B] capitalize">
                    Total Days
                  </p>
                  <div className="total_input">
                    <input
                      name="email"
                      type="text"
                      placeholder="Days"
                      className="bg-gray-100 block w-full px-3.5 py-3.5 rounded-lg text-base font-medium text-[#003F6B] outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="terms_conditions mt-7">
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-base font-medium text-[#003F6B]"
                >
                  I Agree the{" "}
                  <span className="text-[#0D99FF]">Terms & Conditions</span>
                </label>
              </div>

              <div className="budget_btn flex gap-5 mt-1">
                <button class="text-white text-base rounded-lg px-5 bg-[#0D99FF] pt-3 pb-3 pl-8 pr-8 font-medium capitalize w-full">
                Post a Project
                </button>
                <button class="text-white text-base rounded-lg px-5 bg-[#003F6B] pt-3 pb-3 pl-8 pr-8 font-medium capitalize w-full">
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
