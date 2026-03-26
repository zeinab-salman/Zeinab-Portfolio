import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
const GoldenNetworkLoader = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log("loaded", container);
  };
  const dotVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  const ringVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center w-full background-purple">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 60 },
              color: { value: "#d4a76a" },
              links: {
                enable: true,
                distance: 150,
                color: "#d4a76a",
                opacity: 0.5,
              },
              move: { enable: true, speed: 1 },
              size: { value: 3 },
            },
          }}
          className="absolute inset-0 -z-10"
        />
      )}
      <div className="relative  w-24 h-24  flex flex-col justify-center items-center " >
        <motion.div
          variants={ringVariants}
          animate="animate"
          className="absolute inset-0 border-2 border-transparent border-t-[#d4a76a] border-r-[#d4a76a] rounded-full"
        />
        {[0, 72, 144, 216, 288].map((angle, index) => (
          <motion.div
            key={index}
            variants={dotVariants}
            animate="animate"
            custom={index}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "8px",
              height: "8px",
              backgroundColor: "#d4a76a",
              borderRadius: "50%",
              boxShadow: "0 0 10px #d4a76a",
              transform: `rotate(${angle}deg) translate(40px) rotate(-${angle}deg)`,
            }}
            className="glow-gold "
          />
        ))}
      
      </div>
    </div>
  );
};

export default GoldenNetworkLoader;
