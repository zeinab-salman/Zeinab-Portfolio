import React from "react";
import { cardVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function FeatureCard({ icon: Icon, feature, text, color }) {
  const colorVariants = {
    yello1: "text-[#d4a76a] border border-[#d4a76a]",
    purble: "text-[#a876aa] border border-[#a876aa]",
    pink: "text-[#e0c3fc] border border-[#e0c3fc]",
  };
  const selectedColorClass = colorVariants[color.trim()] || "";
  return (
    <motion.div
      variants={cardVariants}
      className={`feature-card flex justify-start items-center p-3 glass-effect gap-7 w-full mb-6 transition-all duration-300 transform hover:scale-105 
        max-[500px]:items-start 
        ${selectedColorClass}`}
    >
      <div className="glass-effect p-5 flex items-center justify-center text-4xl shrink-0">
        <Icon />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h5 className="text-2xl max-[500px]:text-[1.4rem] font-semibold">
          {feature}
        </h5>
        <p className="text-[#D1D1E9] text-[1.3rem] max-[500px]:text-[1.1rem]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
