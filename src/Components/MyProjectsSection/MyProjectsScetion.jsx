import React from "react";
import "./MyProjectsSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import ProjectCard from "../ProjectCard/ProjectCard";
import img1 from "../../assets/Images/project1.png";
import {containerVariants} from "../Variants/Variants"
import { motion } from "framer-motion";
export default function MyProjectsScetion() {
  return (
    <section className="my-projects-section flex flex-col justify-center items-center w-full px-10 py-10">
      <TitleComponent
        subTitle=" EXPERTISE"
        title="My Projects"
        typeClass="flex flex-col items-center justify-center text-center "
      />
      <motion.div className="my-projects-div flex justify-center items-center py-10 gap-7"
       variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: "1000px" }}
      
      
      >
        <ProjectCard
          img={img1}
          projectTitle="PORTA"
          description="loremhhjjkkll"
        />
          <ProjectCard
          img={img1}
          projectTitle="PORTA"
          description="loremhhjjkkll"
        />
          <ProjectCard
          img={img1}
          projectTitle="PORTA"
          description="loremhhjjkkll"
        />
      </motion.div>
    </section>
  );
}
