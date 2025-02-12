import React, { useState, useRef } from "react";
import c1 from "../assets/c1.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef(null); // Define the ref
  const [formData, setFormData] = useState({
    fullName: "",
    lastName:"",
    email: "",
    location:"",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const formValidation = (name, value) => {
    if (name === "fullName" && !value) return "User name is required";
    if (name === "email") {
      if (!value) return "Email is required";
      if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
    }
    if (name === "phone" && !value) return "Phone number is required";
    if (name === "message" && !value) return "Message cannot be blank";
    if (name === "location" && !value) return "Location cannot be blank";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: formValidation(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_r6e77bp";
    const templateId = "template_sroax2n";
    const publicKey = "pVBP3lU_BXIU9UfrF";

    const errorMessage = {
      fullName: formValidation("fullName", formData.fullName),
      lastName: formValidation("lastName", formData.lastName),
      location: formValidation("location", formData.location),
      email: formValidation("email", formData.email),
      phone: formValidation("phone", formData.phone),
      message: formValidation("message", formData.message),
    };

    if (Object.values(errorMessage).every((error) => !error)) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(() => {
          setSuccessMessage(true);
          setFormData({
            fullName: "",
            lastName: "",
            location:"",
            email: "",
            phone: "",
            message: "",
          });
          setError({});
        })
        .catch((err) => {
          console.error("Failed to send message:", err);
          alert("Failed to send message, please try again later.");
        });
    } else {
      setError(errorMessage);
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[1600px] m-auto font-script pt-0 pb-6 md_screen"
    >
      <h3 className="font-bold text-left mb-5 text-2xl text-[#003F6B] uppercase">
        enquiry now
      </h3>
      <div className="form_section flex justify-between gap-5">
        <div className="image_section">
          <img src={c1} alt="rect" className="w-full" />
        </div>
        <div className="bg-[#F5F5F5] p-10 border-[1px] border-gray-200 rounded-xl mx-auto w-full max-w-5xl">
          <form ref={form} onSubmit={handleSubmit}>
            {successMessage && (
              <div className="success_message">
                <p>Form submitted successfully, thank you!</p>
                <div
                  className="close-icon"
                  onClick={() => setSuccessMessage(false)}
                >
                  <IoCloseCircleOutline />
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label className="fullname block text-left text-sm/6 font-semibold text-gray-900 italic">
                  First Name<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your name"
                    className="block w-full bg-white px-3.5 py-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                  {error.fullName && <p className="error">{error.fullName}</p>}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter last name"
                    className="block w-full bg-white px-3.5 py-3 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="phone block text-left text-sm/6 font-semibold text-gray-900 italic">
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="email"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="phone_number block w-full bg-white px-3.5 py-3 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                  {error.phone && <p className="error">{error.phone}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="email-address block text-left text-sm/6 font-semibold text-gray-900 italic">
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="block w-full bg-white px-3.5 py-3 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                  {error.email && <p className="error">{error.email}</p>}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic "
                >
                  Site location
                </label>
                <div className="mt-2.5">
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter your site location"
                    className="block w-full bg-white px-3.5 py-3 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                  {error.location && <p className="error">{error.location}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-left text-sm/6 font-semibold text-gray-900 italic"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full bg-white px-3.5 py-3 text-sm text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 italic focus:outline-sky-500"
                  />
                  {error.message && <p className="error">{error.message}</p>}
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full bg-[#003F6B] px-3.5 py-3 text-center text-xl font-semibold text-white italic"
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
