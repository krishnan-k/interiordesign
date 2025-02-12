import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import { Link } from "react-router";
import { IoClose } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeState, setActiveState] = useState(0);
  const stickyNavigaion = () => {
    setSticky(window.scrollY >= 150);
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyNavigaion);
    return () => {
      window.removeEventListener("scroll", stickyNavigaion);
    };
  }, []);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const handleMouseOver = (index) => {
    setActiveState(index);
    setDrawerOpen(!drawerOpen);
  };
  const menuItems = [
    { href: "/", label: "home" },
    { href: "#aboutus", label: "about us" },
    { href: "#service", label: "services" },
    { href: "#process", label: "gallery" },
    { href: "#blog", label: "blog" },
    { href: "#contact", label: "contact" },
  ];
  return (
    <div
      className={`font-script navbar-section ${drawerOpen ? "active" : ""} ${
        sticky ? "navigaion-fixed" : ""
      }`}
    >
      <div className="header_section max-w-[1600px] m-auto flex items-center justify-between pt-5 pb-5 md_screen">
        <div className="header-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="login_details flex items-center justify-between gap-5">
          <div className="post_btn">
            <Link to="/post">
              <button className="btn btn-blue font-bold bg-gray-100 pt-4 pb-4 pl-7 pr-7 text-xl rounded-xl leading-none">
                Post a Project
              </button>
            </Link>
          </div>
          <div className="cart_btn">
            <img src={cart} alt="logo" />
          </div>
          <div className="login_btn flex items-center justify-between gap-5">
            <Link to="/login">
              <h3 className="font-bold text-xl capitalize text-[#003F6B]">
                login
              </h3>
            </Link>
            <Link to="/signup">
              <h3 className="font-bold text-xl capitalize text-[#003F6B]">
                sign up
              </h3>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#DBE7F1] pt-4 pb-4 mt-2 md_screen">
        <div className="navigation_section max-w-[1600px] m-auto flex items-center justify-between">
          <div className="heading flex items-center justify-between">
            <h2 className="uppercase text-xl font-black text-[#003F6B]">
              www.myproject.ai
            </h2>
            <button className="drawer-toggle" onClick={toggleDrawer}>
              <BiMenu />
            </button>
          </div>
          <div className={`nav-content ${drawerOpen ? "open" : ""}`}>
            <button className="drawer-close" onClick={toggleDrawer}>
              <IoClose />
            </button>
            <nav>
              <ul className="flex">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      activeState === index ? "active" : ""
                    } pl-10 pr-10 last:pr-0 border-r-[1.5px] border-gray-400 last:border-0 first:border-l-[1.5px] `}
                    onClick={() => handleMouseOver(index)}
                  >
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
            <div className="login_btn flex items-center justify-between gap-5 md_none">
              <Link to="/login">
                <h3 className="font-bold text-xl capitalize text-[#003F6B]">
                  login
                </h3>
              </Link>
              <Link to="/signup">
                <h3 className="font-bold text-xl capitalize text-[#003F6B]">
                  sign up
                </h3>
              </Link>
            </div>
            <div className="smd_none">
              <Link to="/post">
                <button className="btn btn-blue font-bold bg-gray-100 pt-4 pb-4 pl-7 pr-7 text-xl rounded-xl leading-none">
                  Post a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
