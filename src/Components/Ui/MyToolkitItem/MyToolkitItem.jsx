import React from "react";
import { cardVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function MyToolkitItem({ tool, color, icon: Icon }) {
  const colorVariants = {
    yello1: "text-[#d4a76a] border border-[#d4a76a]",
    purble: "text-[#a876aa] border border-[#a876aa]",
    pink: "text-[#e0c3fc] border border-[#e0c3fc]",
  };
  const selectedColor = colorVariants[color.trim()] || "";
  return (
    <motion.div
      variants={cardVariants}
      className={`toolkit-item flex items-center justify-center px-10 py-3 rounded-full gap-2 
        max-[600px]:w-[40%] max-[600px]:flex-col max-[600px]:border-none! max-[600px]:p-2.5
        ${selectedColor}`}
    >
      <Icon className="icon-skill text-[2rem] max-[1000px]:text-[3rem]" />
      <p className="text-2xl text-center max-[600px]:text-[1.2rem]">{tool}</p>
    </motion.div>
  );
}
