import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { cardVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function ProjectCard({ img, projectTitle, description, href }) {
  return (
    <motion.div
      className="project-card flex flex-col justify-center items-start gap-4 glass-effect px-5 pt-5 pb-16 w-[32%] max-[1000px]:w-[40%]! max-[800px]:w-full! transition-all duration-300 transform hover:scale-105"
      variants={cardVariants}
    >
      <img
        src={img}
        alt={projectTitle}
        className="block h-40 w-full object-cover aspect-square rounded-bl-[20px] rounded-tr-[20px]"
      />
      <h5 className="card-title text-3xl text-[#d4a76a] max-[800px]:text-[1.4rem]">
        {projectTitle}
      </h5>
      <p className="card-description text-2xl text-[#a876aa]! max-[800px]:text-[1.2rem]">
        {description}
      </p>

      <a href={href} className="w-full">
        <ButtonComponent
          text="View Live"
          typeclass="yello"
          padding="py-4 w-full rounded-[20px]"
        />
      </a>
    </motion.div>
  );
}
