import React from "react";
import TitleComponent from "../../Ui/TitleComponent/TitleComponent";
import FeatureCard from "../../Ui/FeatureCard/FeatureCard";
import { FaCode, FaPalette } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { BiSolidZap } from "react-icons/bi";
import { containerVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
import RevealSection from "../../Animation/RevealSection/RevealSection";
import AboutTextComponent from "../../Ui/AboutTextComponent/AboutTextComponent";
import { AboutTextData } from "../../Data/AboutTextData";
export default function AboutMeSection() {
  return (
    <RevealSection>
      <section
        id="about"
        className="about-me-section flex flex-col justify-center items-center w-full px-10 py-10 max-[1000px]:px-5 max-[1000px]:pt-0 [&_h2]:text-[4rem]"
      >
        <TitleComponent
          subTitle="THE STORY"
          title="About Me"
          typeClass="flex flex-col items-center justify-center text-center"
        />
        <div className="flex justify-between items-start mt-5 flex-wrap gap-5">
          <motion.div
            className="about-div flex flex-col justify-center items-start glass-effect px-10 pt-5 pb-5 w-[60%] gap-2 max-[1000px]:w-full! max-[1000px]:px-5 [&_h3]:max-[1000px]:text-[1.4rem] [&_p]:max-[1000px]:text-[1.4rem]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ perspective: "1000px" }}
          >
            {AboutTextData.map((item) => (
              <AboutTextComponent
                key={item.id}
                textTitle={item.textTitle}
                textContent={item.textContent}
              />
            ))}
          </motion.div>
          <motion.div
            className="features-div flex flex-col justify-center items-center w-[38%] max-[1000px]:w-full!"
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
              color="yello1"
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
