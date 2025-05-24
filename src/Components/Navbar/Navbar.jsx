import React, { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav id="navbar" className="relative flex items-center justify-between px-7 md:px-16 lg:px-12 py-7 md:py-6 z-50">
      <AnchorLink href="#navbar">
        <img src={logo1} alt="logo" className="w-[100px] md:w-[150px]" />
      </AnchorLink>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
            <XMarkIcon className="w-8 h-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`fixed top-0 right-0 h-full w-[250px] bg-[#1f1f29] z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:flex lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:flex-row lg:items-center lg:gap-8`}
      >
        {["home", "about", "experience", "mywork", "contact"].map((item) => (
          <li key={item} className="w-full lg:w-auto my-4 lg:my-0 text-center">
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className={`text-white text-lg block px-4 py-1 transition-colors ${
                activeMenu === item ? "text-purple-400" : "hover:text-purple-400"
              } lg:inline-block lg:p-0`}
              onClick={() => {
                setActiveMenu(item);
                setMenuOpen(false);
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
