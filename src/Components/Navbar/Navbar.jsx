import React, { useState, useEffect } from "react";
import logo1 from "../../assets/logo1.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [menuOpen]);

  return (
    <nav
      id="navbar"
      className="relative flex items-center justify-between px-4 lg:px-20 lg:py-2 mx-4 z-50"
    >
      <AnchorLink href="#navbar">
        <img src={logo1} alt="logo" className="w-[230px] sm:w-full"/>
      </AnchorLink>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden focus:outline-none z-50 top-4 right-5 mt-1"
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          // Close icon: Square shape with clean design
          <div className="w-8 h-8 flex items-center justify-center bg-red-500 transition-transform transform hover:rotate-90 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        ) : (
          // Open icon (hamburger) with 3 full lines
          <div className="w-8 h-8 flex items-center justify-center bg-purple-500 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        )}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`fixed top-0 right-0 h-full w-[250px] bg-gray-800 z-40 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:flex lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:bg-transparent lg:flex-row lg:items-center lg:gap-6`}
      >
        {["home", "about", "experience", "project", "contact"].map((item) => (
          <li key={item} className="w-full lg:w-auto my-2 lg:my-0">
            <AnchorLink
              href={`#${item}`}
              offset={50}
              className={`text-white text-lg block px-5 py-3 ${
                activeMenu === item ? "text-purple-400 " : ""
              } lg:inline-block lg:p-0 hover:text-purple-400`}
              onClick={() => {
                setActiveMenu(item);
                setMenuOpen(false); // Close the menu on item click
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </AnchorLink>
          </li>
        ))}
      </ul>

      {/* Connect With Me Button (Desktop Only) */}
      <div className="hidden lg:block w-44 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center">
        <AnchorLink href="#contact" offset={50} className="text-white text-lg">
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
