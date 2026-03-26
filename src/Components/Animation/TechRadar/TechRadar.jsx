import { motion } from "framer-motion";
const TechRadar = () => {
  const rings = [0, 1, 2];
  return (
    <div className="relative flex items-center justify-center w-10 h-10">
      {rings.map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border-[0.8px] border-[#a876aa] bg-[#a876aa]/10"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 2.5],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "linear",
          }}
          style={{
            width: "16px",
            height: "16px",
            position: "absolute",
          }}
        />
      ))}
      <div className="relative z-10 w-2 h-2 rounded-full bg-[#725073] shadow-[0_0_8px_#725073]" />
    </div>
  );
};

export default TechRadar;
