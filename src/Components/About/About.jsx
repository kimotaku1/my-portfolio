import React, { useState } from "react";
import about_image from "../../assets/about-image.png";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "100%" },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-base text-[#ADB7BE] space-y-1">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-base text-[#ADB7BE] space-y-1">
        <li>Bachelor in Information Management (BIM)</li>
        <li>Self-Taught Developer (Project-Based Learning)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-base text-[#ADB7BE] space-y-1">
        <li>Frontend Development (Meta)</li>
        <li>Full-Stack Bootcamp (Online)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="text-white py-8 sm:py-16 px-4 xl:px-16">
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="hidden md:flex justify-center md:justify-start">
          <img
            src={about_image}
            alt="Bibek Bhandari"
            className="rounded-sm w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] object-cover shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="mt-4 md:mt-0 flex flex-col h-full text-left">
          <h2 className="text-4xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-[#ADB7BE]">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and always looking to expand my knowledge and skill set. I enjoy working in teams to build amazing products.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mt-8">
            {TAB_DATA.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="relative">
                <span
                  className={`px-2 font-medium text-sm md:text-lg transition ${
                    activeTab === tab.id
                      ? "text-white"
                      : "text-[#ADB7BE] hover:text-white"
                  }`}
                >
                  {tab.title}
                </span>
                <motion.div
                  animate={activeTab === tab.id ? "active" : "default"}
                  variants={variants}
                  className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mt-1 rounded"
                />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">{TAB_DATA.find((tab) => tab.id === activeTab)?.content}</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col sm:flex-row justify-around gap-4 md:gap-12 mt-10 md:mt-20">
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            2+
          </h1>
          <p className="text-lg font-medium text-[#ADB7BE]">YEARS OF EXPERIENCE</p>
        </div>
        <div className="flex flex-col items-center hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            10+
          </h1>
          <p className="text-lg font-medium text-[#ADB7BE]">PROJECTS COMPLETED</p>
        </div>
      </div>
    </section>
  );
};

export default About;
