import React from "react";
import c1 from "../assets/c1.png";
const Contact = () => {
  return (
    <div className="max-w-[1600px] m-auto font-script pt-0 pb-6">
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        enquiry now 
      </h3>
      <div className="form_section flex justify-between gap-5">
        <div className="image_section">
          <img src={c1} alt="rect" className="w-full" />
        </div>
        <div className="bg-[#F5F5F5] p-10 border-[1px] border-gray-200 rounded-xl mx-auto w-full max-w-5xl">
          <form action="#" method="POST" className="">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  First Name<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    required
                    placeholder="Enter your name"
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Last Name<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Phone number"
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your phone number"
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email"
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Site location
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Enter your site location"
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full bg-white px-3.5 py-2.5 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full bg-[#003F6B] px-3.5 py-2.5 text-center text-xl font-semibold text-white italic"
              >
                Get a Quates
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
