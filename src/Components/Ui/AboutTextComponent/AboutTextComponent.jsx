import React from "react";
import TechRadar from "../../Animation/TechRadar/TechRadar";
import { cardVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function AboutTextComponent({ textTitle, textContent, text1 }) {
  return (
    <motion.div variants={cardVariants}>
      <div className="about-text-div flex items-center">
        <TechRadar />
        <h3 className="gradient-text text-3xl ml-4 font-bold">{textTitle}</h3>
      </div>
      <p className="about-info mt-5 w-full text-2xl text-[#a876aa]  max-[800px]:text-[1.1rem]!">
        {textContent}
      </p>
    </motion.div>
  );
}
