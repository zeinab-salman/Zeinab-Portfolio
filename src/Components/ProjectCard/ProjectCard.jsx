import React from "react";
import "./ProjectCard.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {cardVariants} from "../Variants/Variants"
import { motion } from "framer-motion";
export default function ProjectCard({ img, projectTitle, description ,href}) {
  return (
   
    <motion.div className="project-card flex flex-col justify-center items-start gap-4 glass-effect px-5 pt-5 pb-16 w-[32%] "
     variants={cardVariants}
    >
      <img
        src={img}
        className="block h-40 w-full object-cover aspect-square rounded-bl-[20px]  rounded-tr-[20px]"
      />
      <h5 className="card-title text-3xl">{projectTitle}</h5>
      <p className="card-description  text-2xl text-gray-500 ">{description}</p>
      <a href={href} className="w-full">
      <ButtonComponent
        text="View Live"
        typeclass="yello"
        padding="py-4 w-full rounded-[20px]"
      /></a>
    </motion.div>
   
  );
}
