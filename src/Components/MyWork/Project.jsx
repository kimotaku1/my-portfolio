import React from "react";
import mywork_data from "../../assets/mywork_data";
import { BiCode } from "react-icons/bi";
import logo1 from "../../assets/logo1.svg";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-5 md:px-12 lg:px-28 m-5">
        <Link to={"/"}>
          <img src={logo1} alt="logo" />
        </Link>
        <Link to={'/contact'} className="hidden lg:block w-44 py-3 bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform text-center">
          <button className="text-white text-lg">Connect With Me</button>
        </Link>
      </div>
      <div id="project" className="pb-10">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-medium px-8 text-start sm:text-center ml-3 mt-5 mb-10 sm:mb-14 sm:mt-14 lg:mb-14 lg:mt-5">
            My Projects
          </h1>
        </div>
        <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
          {mywork_data.map((work, index) => (
            <div
              key={index}
              className="max-w-[330px] sm:max-w-[370px] border-2 border-white rounded-lg transition-all hover:scale-105 hover:border-purple-300 hover:bg-gradient-to-r from-[#4B0082] to-[#8A2BE2] p-7"
            >
              <img
                src={work.w_img}
                alt={`Work ${index + 1}`} // Descriptive alt text
                className="w-full h-auto rounded-lg max-w-[410px] transition-transform hover:scale-105 hover:border-2 hover:border-purple-500 hover:rounded-lg"
              />
              <h2 className="text-xl pt-5 pb-5">{work.w_name}</h2>
              <p className="text-gray-400 pb-5">{work.w_description}</p>
              <div className="flex-row w-2/4 justify-center items-center gap-2 border-2 border-solid px-5 py-3 rounded-full transition-all hover:scale-105 text-center">
                <a
                  href={work.w_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github Link"
                  className="flex flex-row"
                >
                  <BiCode size={25} />
                  <span className="text-center">Github</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
