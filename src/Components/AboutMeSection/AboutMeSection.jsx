import React from "react";
import "./AboutMeSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import TechRadar from "../TechRadar/TechRadar";
import FeatureCard from "../FeatureCard/FeatureCard";
import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";
import { containerVariants } from "../Variants/Variants";
import { motion } from "framer-motion";
import RevealSection from "../RevealSection/RevealSection";
export default function AboutMeSection() {
  return (
    <RevealSection>
      <section className=" about-me-section  flex flex-col justify-center items-center w-full px-10 py-10 ">
        <TitleComponent
          subTitle=" EXPERTISE"
          title="About Me"
          typeClass="flex flex-col items-center justify-center text-center "
        />
        <div className="flex justify-between items-start mt-10 flex-wrap gap-5">
          <div className="about-div flex flex-col justify-center items-start glass-effect px-10 pt-10 pb-20  w-[60%]">
            <div className="flex ">
              <TechRadar />
              <h3 className=" gradient-text text-3xl ml-4">
                Hi, I'm Zeinab Salman - Front-End Developer.
              </h3>
            </div>
            <p className="about-info mt-5 w-full text-2xl text-gray-500">
              I am a detail-oriented Informatics Engineering graduate with a
              passion for bridging the gap between complex logic and elegant
              design. My journey in tech is fueled by a commitment to "Crafting
              Digital Elegance," ensuring every line of code translates into a
              seamless user experience. With hands-on experience from Focal X
              Agency and a deep foundation in Informatics (graduating with an
              excellent 95% grade), I specialize in building responsive,
              interactive web applications. I thrive on turning Figma designs
              into pixel-perfect reality using React.js, Tailwind CSS, and
              Framer Motion. My goal is always the same: to deliver scalable,
              high-performance solutions that don’t just work—they inspire.
            </p>
          </div>
          <motion.div
            className="features-div  flex-col justify-center items-center w-[38%] "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ perspective: "1000px" }}
          >
            <FeatureCard
              icon={FaCode}
              feature="Clean Code"
              text="Architecting scalable and maintainable solutions."
              color=" yello1 "
            />
            <FeatureCard
              icon={FaPalette}
              feature="UI Design"
              text="Crafting pixel-perfect, aesthetic interfaces."
              color="purble"
            />
            <FeatureCard
              icon={IoSparkles}
              feature="Animations"
              text="Branging life to static designs with Framer Motion."
              color="pink"
            />
            <FeatureCard
              icon={BiSolidZap}
              feature="Performance"
              text="Optimized delivery for lightning-fast loading."
              color="yello1"
            />
          </motion.div>
        </div>
      </section>
    </RevealSection>
  );
}
