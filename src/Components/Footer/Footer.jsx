import React, { useState } from "react";
import logo1 from "../../assets/logo1.svg";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoInstagram,
} from "react-icons/bi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <footer className="px-6 lg:px-32 py-12 bg-[#0f0f0f] text-gray-400 mt-20">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col lg:max-w-lg">
          <AnchorLink href="#navbar" offset={50} className="cursor-pointer">
            <img src={logo1} alt="Logo" className="w-48 md:w-[300px] mb-4" />
          </AnchorLink>
          <p className="text-base">
            Let's connect and create something amazing together! Feel free to
            reach out to collaborate on coding projects or chat about gaming
            strategies.
          </p>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm flex-wrap justify-center">
          <p className="hover:text-[#DF8908] cursor-pointer transition-colors">
            Terms of Service
          </p>
          <p className="hover:text-[#DF8908] cursor-pointer transition-colors">
            Privacy Policy
          </p>
          <AnchorLink
            href="#contact"
            className="hover:text-[#DF8908] cursor-pointer transition-colors"
          >
            Connect with me
          </AnchorLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white">
          <a
            href="https://github.com/kimotaku1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#DF8908] transition-colors"
          >
            <BiLogoGithub size={28} />
          </a>
          <a
            href="https://www.instagram.com/imnotbibek/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#DF8908] transition-colors"
          >
            <BiLogoInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/bibek-841246334/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#DF8908] transition-colors"
          >
            <BiLogoLinkedin size={28} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2024 Bibek Bhandari. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
