import React from "react";
import TitleComponent from "../TitleComponent/TitleComponent";
import "./ContactMeSection.css";
import { MdEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BiSolidPhone } from "react-icons/bi";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
export default function ContactMeSection() {
  return (
    <section className="contact-me-section  flex flex-col justify-center items-center  w-full px-10 py-10">
      <TitleComponent
        subTitle=" EXPERTISE"
        title="Contact Me"
        typeClass="flex flex-col items-center justify-center text-center"
      />
      <div className="info-div flex justify-between items-center w-full flex-wrap mt-10">
        <div className="email-div flex justify-center items-center gap-5 text-[1.8rem]">
          <MdEmail className="yello11 text-[3rem]" />
          <p className="gradient-text">zeinabslman004 @gmail.com</p>
        </div>

        <div className="address-div flex justify-center items-center text-[1.8rem] gap-5">
          <FaMapMarkedAlt className="yello11 text-[3rem]" />
          <p className="gradient-text">Lattakia,syria</p>
        </div>
        <div className="phone-div flex justify-center items-center text-[1.8rem] gap-5">
          <BiSolidPhone className="yello11 text-[3rem]" />
          <p className="gradient-text">+9639 82-681-016</p>
        </div>
      </div>

      <div className="let-us-connect-div  w-full mt-20  ">
        <h3 className="gradient-text text-5xl">Let's Connect </h3>
        <div className="connect-info-div  flex justify-between items-center w-full flex-wrap ">
          <div className="social flex justify-start items-center  text-[2rem]  w-max mt-20 gap-4 ">
            <div className="social1 flex justify-start items-center w-max  gap-4 ">
              <div className="icon-div">
                <SiFacebook className="   yello11" />
                <h5 className="  text-center text-2xl yello-text">Facebook</h5>
              </div>
              <div className="icon-div">
                <AiFillInstagram className="yello11" />
                <h5 className="text-center text-2xl yello-text">Instagram</h5>
              </div>
              <div className="icon-div">
                <FaLinkedin className="yello11" />
                <h5 className="text-center text-2xl yello-text">Linkedin</h5>
              </div>
            </div>
            <div className=" social2 flex justify-start w-max items-center  gap-4">
              <div className="icon-div">
                <IoLogoWhatsapp className="yello11" />
                <h5 className="text-center text-2xl yello-text">Whatsapp</h5>
              </div>
              <div className="icon-div">
                <FaGithub className="yello11" />
                <h5 className="text-center text-2xl yello-text">GitHub</h5>
              </div>
              <div className="icon-div">
                <FaTelegram className="yello11" />
                <h5 className="text-center text-2xl yello-text">Telegram</h5>
              </div>
            </div>
          </div>
          <h3 className=" let-build-text  gradient-text text-[2.1rem] w-[30%] mt-20 text-center">
            Let,s build a project together, with love.♥{" "}
          </h3>
          <ButtonComponent
            text="Download CV"
            typeclass="yello"
            padding="px-10 py-5 mt-10 "
          />
        </div>
      </div>
    </section>
  );
}
