import React from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router";

const Navbar = () => {
  const menuItems = [
    { href: "#home", label: "home" },
    { href: "#aboutus", label: "about us" },
    { href: "#service", label: "services" },
    { href: "#process", label: "gallery" },
    { href: "#blog", label: "blog" },
    { href: "#contact", label: "contact" },
  ];
  return (
    <div className="font-script">
      <div className="header_section max-w-[1600px] m-auto flex items-center justify-between pt-5 pb-5">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="login_details flex items-center justify-between gap-5">
          <div className="post_btn">
            <button className="btn btn-blue font-bold bg-gray-100 pt-4 pb-4 pl-7 pr-7 text-xl rounded-xl leading-none">
              Post a Project
            </button>
          </div>
          <div className="cart_btn">
            <img src={cart} alt="logo" />
          </div>
          <div className="login_btn flex items-center justify-between gap-5">
            <h3 className="font-bold text-xl capitalize text-[#003F6B]">
              login
            </h3>
            <h3 className="font-bold text-xl capitalize text-[#003F6B]">
              sign up
            </h3>
          </div>
        </div>
      </div>

      <div className="bg-[#DBE7F1] pt-4 pb-4 mt-2">
        <div className="navigation_section max-w-[1600px] m-auto flex items-center justify-between">
          <div className="heading">
            <h2 className="uppercase text-xl font-black text-[#003F6B]">
              www.myproject.ai
            </h2>
          </div>
          <nav>
            <ul className="flex">
              {menuItems.map((item, index) => (
                <li key={index} className="pl-10 pr-10 last:pr-0">
                  <a
                    className="capitalize font-bold text-[#003F6B]"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
