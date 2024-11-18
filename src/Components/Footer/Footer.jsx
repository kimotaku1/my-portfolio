import React, { useState } from "react";
import logo1 from "../../assets/logo1.svg";
import user_icon from "../../assets/user_icon.svg";
import { BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from "react-icons/bi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error on input change
  };

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Subscribed with email: ${email}`);
    setEmail(""); // Clear input after subscribing
  };

  return (
    <footer className="flex flex-col gap-8 mt-12 px-8 lg:px-32 mx-2">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative">
        <div className="flex flex-col lg:w-1/2">
          <AnchorLink href="#navbar" offset={50} className="cursor-pointer">
            <img src={logo1} alt="Logo" className="w-2/3 sm:w-2/5  pb-2 lg:pb-1"/>
          </AnchorLink>
          <p className="text-lg text-gray-400">
            Let's connect and create something amazing together! Feel free to reach out to collaborate on coding projects or
            chat about gaming strategies.
          </p>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <hr className="border-gray-600" />
      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-gray-400">
        <div className="flex gap-6">
          <p className="hover:text-[#DF8908] cursor-pointer">
            Terms of Services
          </p>
          <p className="hover:text-[#DF8908] cursor-pointer">Privacy Policy</p>
          <AnchorLink
            href="#contact"
            className="hover:text-[#DF8908] cursor-pointer"
          >
            Connect with me
          </AnchorLink>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-row lg:flex-row justify-start lg:justify-start gap-5 mt-4 text-white mb-4">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/kimotaku1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-500"
          >
            <BiLogoGithub size={30} />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/yahallo.02/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hover:text-blue-500"
          >
            <BiLogoInstagram size={30} />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/bibek-841246334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-500"
          >
            <BiLogoLinkedin size={30} />
          </a>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="text-gray-400 text-center">
        <p>&copy; 2024 Bibek Bhandari. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
