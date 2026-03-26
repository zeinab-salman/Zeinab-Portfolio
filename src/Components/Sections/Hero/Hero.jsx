import React, { useEffect, useState } from "react";
import img from "../../../assets/Images/c.png";
import RevealSection from "../../Animation/RevealSection/RevealSection";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from "react-scroll";
import ButtonComponent from "../../Ui/ButtonComponent/ButtonComponent";
import TitleComponent from "../../Ui/TitleComponent/TitleComponent";
import pdfURL from "../../../assets/Images/cv.pdf";
export default function Hero() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <RevealSection>
      <section
        id="home"
        className="hero relative z-10 flex flex-row justify-between items-center px-10 pt-30 w-full min-h-screen overflow-hidden 
                   max-[1000px]:flex-col-reverse max-[1000px]:gap-10 max-[1000px]:pt-0 max-[1000px]:mt-18.75 max-[1000px]:px-5 max-[1000px]:justify-center
                   [&_h2]:text-[6rem]"
      >
        {init && (
          <Particles
            id="tsparticles"
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

        <div className="left-side relative z-10 flex flex-col items-start justify-center max-[1000px]:items-center">
          <TitleComponent
            subTitle="Front-End Developer"
            title="Crafting digital elegance"
            text="I design and build beautiful, performant web experiences with meticulous attention to detail and a passion for pixel-perfect craft."
            typeClass="hero-title w-full 
                       max-[1000px]:text-center max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center
                       [&_h2]:max-[1000px]:text-[3rem]! [&_h2]:max-[1000px]:w-full [&_h2]:max-[1000px]:text-center
                       [&_p]:max-[1000px]:text-[1.2rem]! [&_p]:max-[1000px]:w-full [&_p]:max-[1000px]:text-center
                       [&_h2]:max-[500px]:text-[2.4rem]!
                       [&_h5]:max-[500px]:text-[1.6rem]!"
          />

          <div className="btns-hero flex justify-start items-center gap-5 py-10 flex-wrap max-[1000px]:justify-center max-[1000px]:pt-5">
            <a
              href={pdfURL}
              target="_blank"
              rel="noopener noreferrer"
              download="filename.pdf"
            >
              <ButtonComponent
                text="Download CV"
                typeclass="yello"
                padding="px-10 py-5"
              />
            </a>
            <Link to="contact">
              <ButtonComponent
                text="Say Hello"
                typeclass="no-color"
                padding="px-15 py-5"
              />
            </Link>
          </div>
        </div>

        <div className="right-side relative z-10">
          <img
            src={img}
            alt="profile-photo"
            className="profile-img block w-120 h-120 object-cover aspect-square mb-10 border-b-2 border-[#d4a76a]
                       max-[1000px]:w-88! max-[1000px]:h-88! max-[1000px]:mb-0"
          />
        </div>
      </section>
    </RevealSection>
  );
}
