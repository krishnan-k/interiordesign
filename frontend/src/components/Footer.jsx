import React from "react";
import { Link } from "react-router";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#003F6B]">
      <div className="max-w-[1600px] m-auto font-script pt-5 pb-4 mt-12">
        <div className="flex items-center justify-between gap-5">
          <div className="link_section flex items-center justify-between gap-5">
            <p className="text-white font-medium">
              <Link to="">Privacy policy</Link>
            </p>
            <p className="text-white font-medium">
              <Link to="">Terms & conditions</Link>
            </p>
            <p className="text-white font-medium">
              <Link to="">Contact us</Link>
            </p>
          </div>
          <div className="copyrights">
            <h4 className="font-bold text-lg text-white">
              All copyrights Reserved @MAI
            </h4>
          </div>
          <div className="social_icons flex items-center justify-between">
            <p className="text-white font-medium">Social networks :</p>
            <div className="sc_icon flex gap-4 ml-3">
              <FaFacebookF className="text-white" />
              <FaXTwitter className="text-white" />
              <BsInstagram className="text-white" />
              <FaYoutube className="text-white" />
              <FaGoogle className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
