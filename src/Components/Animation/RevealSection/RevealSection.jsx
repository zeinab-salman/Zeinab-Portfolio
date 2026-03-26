import { motion } from "framer-motion";
const RevealSection = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotateX: 12,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 1.5,
        ease: [0.25, 1, 0.5, 1],
      }}
      style={{ perspective: "1200px", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
