import React from "react";
import "./ProjectCard.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {cardVariants} from "../Variants/Variants"
import { motion } from "framer-motion";
export default function ProjectCard({ img, projectTitle, description }) {
  return (
   
    <motion.div className="project-card flex flex-col justify-center items-start gap-4 glass-effect px-5 pt-5 pb-16
    "
     variants={cardVariants}
    >
      <img
        src={img}
        className="block w-110 h-70 object-cover aspect-square rounded-[20px] "
      />
      <h5 className="card-title text-3xl">{projectTitle}</h5>
      <p className="card-discreption text-2xl text-gray-400">{description}</p>
      <ButtonComponent
        text="View Live"
        typeclass="yello"
        padding="px-40 py-5 rounded-[20px]"
      />
    </motion.div>
   
  );
}
