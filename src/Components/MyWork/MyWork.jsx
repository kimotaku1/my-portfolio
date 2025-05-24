"use client";
import React, { useState, useRef } from "react";
import mywork_data from "../../assets/mywork_data";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const MyWork = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredWorks = mywork_data.filter((work) =>
    work.tag?.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="mywork">
      <h2 className="pl-5 md:ml-0 text-start md:text-center text-4xl font-bold text-white mt-4 mb-3 md:mb-10">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-start md:justify-center items-center gap-4 py-6 px-2 md:px-0">
        <ProjectTag
          onClick={handleTagChange}
          name="Recent"
          isSelected={tag === "Recent"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredWorks.map((work, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={work.w_name}
              description={work.w_description}
              imgUrl={work.w_img}
              gitUrl={work.w_link}
              previewUrl={work.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default MyWork;
