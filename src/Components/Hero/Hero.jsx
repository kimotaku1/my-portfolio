import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resumeFile from "../../assets/Bibek_Bhandari_cv.pdf";

const Hero = () => {
  return (
    <section id="home" className="lg:py-16 mb-5 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
        {/* Right Image - Appears first on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-8 sm:mt-0 order-first sm:order-last"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden flex items-center justify-center shadow-lg">
            <img
              src={profile_img}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 text-center sm:text-left place-self-center justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Bibek", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl max-w-md lg:max-w-2xl mx-auto sm:mx-0 leading-relaxed">
            I am a Web developer with 2 years of experience using React and NodeJS. I am passionate about using technology to solve real-world problems and aim to become a full-stack developer.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <AnchorLink
              href="#contact"
              offset="50"
              className="px-6 py-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white text-center w-full sm:w-fit transition"
            >
              Connect With Me
            </AnchorLink>
            <a
              href={resumeFile}
              download="Bibek_Bhandari_cv.pdf"
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:opacity-90 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
