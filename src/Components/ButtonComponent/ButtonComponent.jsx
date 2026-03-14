import React from "react";
import "./ButtonComponent.css";
import { motion } from "framer-motion";

export default function ButtonComponent({ text, typeclass, onClick, padding }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={` ${typeclass}  ${padding} flex justify-center items-center gap-2 transition-colors  cursor-pointer text-2xl  rounded-bl-[20px]  rounded-tr-[20px] `}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
}
