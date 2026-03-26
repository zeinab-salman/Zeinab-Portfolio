import React from "react";
import { motion } from "framer-motion";
export default function ButtonComponent({ text, typeclass, onClick, padding }) {
  const buttonStyles = {
    "no-color":
      "text-[#d4a76a] bg-[rgba(75,72,72,0.176)] border border-[#d4a76a] shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)] max-[500px]:text-[1.2rem]",
    yello:
      "bg-[#d4a76a] text-white shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)] max-[500px]:text-[1.2rem]",
  };
  const appliedClass = buttonStyles[typeclass] || typeclass;
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`${appliedClass} ${padding} flex justify-center items-center gap-2 transition-colors cursor-pointer text-2xl rounded-bl-[20px] rounded-tr-[20px]`}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
