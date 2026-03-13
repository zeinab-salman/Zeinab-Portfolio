import React from "react";
import "./MyProjectsSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import ProjectCard from "../ProjectCard/ProjectCard";
import img1 from "../../assets/Images/porta.png";
import img2 from "../../assets/Images/luxeshop.png";
import img3 from "../../assets/Images/data.png";
import img4 from "../../assets/Images/stream.png";
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
      <motion.div className="my-projects-div flex justify-center items-center py-10 gap-7 w-full flex-wrap"
       variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ perspective: "1000px" }}
      
      
      >
        <ProjectCard
          img={img1}
          projectTitle="PORTA"
          description="A portfolio builder & talent discovery platform. Built with React.js - Tailwind CSS - Framer motion - Context API."
        />
          <ProjectCard
          img={img2}
          projectTitle="LUXEShop"
          description="Mini online shop & admin dashboard using React.js - context API - Framer motion - Recharts."
        />
          <ProjectCard
          img={img3}
          projectTitle="Datawarehouse"
          description="Datawarehouse is One-Page-Website using HTML5 - CSS3 -  Bootstrap featuring a sleek responsive design."
        />
      </motion.div>
    </section>
  );
}
