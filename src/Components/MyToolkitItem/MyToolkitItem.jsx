import React from "react";
import "./MyToolkitItem.css";
import { cardVariants } from "../Variants/Variants";
import { motion } from "framer-motion";
export default function MyToolkitItem({ tool, color, icon: Icon }) {
  return (
    <motion.div
      className={`toolkit-item flex items-center justify-center px-10 py-3 rounded-full gap-2 ${color} `}
      variants={cardVariants}
    >
      <Icon className="icon-skill" />
      <p className="text-2xl text-center">{tool}</p>
    </motion.div>
  );
}
