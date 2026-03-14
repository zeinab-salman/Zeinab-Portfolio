import React, { useEffect, useState } from "react";
import img from "../../assets/Images/c.png";
import "./Hero.css";
import RevealSection from "../RevealSection/RevealSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from "react-scroll";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TitleComponent from "../TitleComponent/TitleComponent";

export default function Hero() {
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

  const pdfURL = "../../assets/Images/cv.pdf";

  return (
    <RevealSection>
      <section
        id="home"
        className="hero  flex flex-row justify-between items-center px-10 pt-30 w-full   relative min-h-screen overflow-hidden  "
      >
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
        <div className="left-side flex flex-col items-start justify-center relative z-10 ">
          <TitleComponent
            subTitle="Front-End Developer"
            title="Crafting digital elegance"
            text="I design and build beautiful, performant web experiences with meticulous attention to detail and a passion for pixel-perfect craft."
            typeClass="hero-title"
          />

          <div className="btns-hero  flex justify-start items-center gap-5 py-10 flex-wrap">
            <a
              href={pdfURL}
              target="_blank"
              rel="noopener noreferrer"
              download="filename.pdf"
            >
              
              <ButtonComponent
                text="Download CV"
                typeclass="yello"
                padding="px-10 py-5 "
              />
            </a>
            <Link to="contact">
            <ButtonComponent
              text="Say Hello"
              typeclass="no-color"
              padding="px-15 py-5 "
            /></Link>
          </div>
        </div>

        <div className="right-side  relative z-10">
          <img
            src={img}
            alt="profile-photo"
            className="profile-img block w-120 h-120 object-cover aspect-square mb-10"
          />
        </div>
      </section>
    </RevealSection>
  );
}
