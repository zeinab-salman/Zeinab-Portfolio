import React from "react";
import TitleComponent from "../../Ui/TitleComponent/TitleComponent";
import MyToolkitItem from "../../Ui/MyToolkitItem/MyToolkitItem";
import { ToolkitData } from "../../Data/ToolkitData";
import RevealSection from "../../Animation/RevealSection/RevealSection";
import { containerVariants } from "../../Animation/Variants/Variants";
import { motion } from "framer-motion";
export default function MyToolkitSection() {
  return (
    <RevealSection>
      <section
        id="skills"
        className="my-toolkit-section flex flex-col justify-center items-center w-full px-10 py-10 [&_h2]:text-[4rem] max-[1000px]:px-5 max-[1000px]:pt-0"
      >
        <TitleComponent
          subTitle="TECHNOLOGIES"
          title="My Toolkit"
          typeClass="flex flex-col items-center justify-center text-center"
        />
        <motion.div
          className="toolkit-div flex items-center justify-center flex-wrap gap-5 py-10 max-[1000px]:justify-center!"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ perspective: "1000px" }}
        >
          {ToolkitData.map((item) => (
            <MyToolkitItem
              id={item.id}
              key={item.id}
              tool={item.toolkit}
              color={item.color}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </section>
    </RevealSection>
  );
}
