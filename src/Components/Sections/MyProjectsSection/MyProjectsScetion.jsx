import React from "react";
import TitleComponent from "../../Ui/TitleComponent/TitleComponent";
import ProjectCard from "../../Ui/ProjectCard/ProjectCard";
import { MyProjectsData } from "../../Data/MyProjectsData";
import { containerVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function MyProjectsScetion() {
  return (
    <section
      id="work"
      className="my-projects-section flex flex-col justify-center items-center w-full px-10 py-10 [&_h2]:text-[4rem] max-[1000px]:px-5 max-[1000px]:pt-0"
    >
      <TitleComponent
        subTitle="SELECTED WORKS"
        title="My Projects"
        typeClass="flex flex-col items-center justify-center text-center"
      />
      <motion.div
        className="my-projects-div flex justify-center items-center py-10 gap-7 w-full flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        style={{ perspective: "1000px" }}
      >
        {MyProjectsData.map((item) => (
          <ProjectCard
            key={item.id}
            id={item.id}
            img={item.img}
            projectTitle={item.projectTitle}
            description={item.description}
            href={item.href}
          />
        ))}
      </motion.div>
    </section>
  );
}
