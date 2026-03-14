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
   const pdfURL = "../../assets/Images/cv.pdf";
  return (
    <section
      id="contact"
      className="contact-me-section  flex flex-col justify-center items-center  w-full px-10 py-10"
    >
      <TitleComponent
        subTitle="GET IN TOUCH"
        title="Contact Me"
        typeClass="flex flex-col items-center justify-center text-center"
      />
      <div className="info-div flex justify-between items-center w-full flex-wrap mt-10">
        <a
          href="mailto:zeinabslman004@gmail.com"
          className="email-div transition-all duration-300 transform hover:scale-105   flex justify-center items-center gap-5 text-[1.8rem]"
        >
          <MdEmail className="yello11 text-[3rem]" />
          <p className="gradient-text">zeinabslman004 @gmail.com</p>
        </a>

        <a
          href="https://maps.app.goo.gl/deE94eko9EHY8YiPA "
          className="address-div transition-all duration-300 transform hover:scale-105   flex justify-center items-center text-[1.8rem] gap-5"
        >
          <FaMapMarkedAlt className="yello11 text-[3rem]" />
          <p className="gradient-text">Lattakia,syria</p>
        </a>
        <a
          href="tel:+963982681016"
          className="phone-div  transition-all duration-300 transform hover:scale-105   flex justify-center items-center text-[1.8rem] gap-5"
        >
          <BiSolidPhone className="yello11 text-[3rem]" />
          <p className="gradient-text ">+9639 82-681-016</p>
        </a>
      </div>

      <div className="let-us-connect-div  w-full mt-20  ">
        <h3 className="gradient-text text-5xl">Let's Connect </h3>
        <div className="connect-info-div  flex justify-between items-center w-full flex-wrap ">
          <div className="social flex justify-start items-center  text-[2rem]  w-max mt-20 gap-4 ">
            <div className="social1 flex justify-start items-center w-max  gap-4 ">
              <a
                className="icon-div  transition-all duration-300 transform hover:scale-105 "
                href="https://www.facebook.com/share/189RUgy6x1/ "
              >
                <SiFacebook className="   yello11" />
                <h5 className="  text-center text-2xl yello-text">Facebook</h5>
              </a>
              <a
                className="icon-div transition-all duration-300 transform hover:scale-105  "
                href="https://www.instagram.com/zeinab.salman1?igsh=MTBhODJjeGZ5ZHdjbg== "
              >
                <AiFillInstagram className="yello11" />
                <h5 className="text-center text-2xl yello-text">Instagram</h5>
              </a>
              <a
                className="icon-div transition-all duration-300 transform hover:scale-105  "
                href="https://www.linkedin.com/in/zeinab-salman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              >
                <FaLinkedin className="yello11" />
                <h5 className="text-center text-2xl yello-text">Linkedin</h5>
              </a>
            </div>
            <div className=" social2 flex justify-start w-max items-center  gap-4">
              <a
                className="icon-div transition-all duration-300 transform hover:scale-105  "
                href="https://wa.me/qr/7FGEYU7ISBAWI1 "
              >
                <IoLogoWhatsapp className="yello11" />
                <h5 className="text-center text-2xl yello-text">Whatsapp</h5>
              </a>
              <a
                className="icon-div  transition-all duration-300 transform hover:scale-105 "
                href=" https://github.com/zeinab-salman"
              >
                <FaGithub className="yello11" />
                <h5 className="text-center text-2xl yello-text">GitHub</h5>
              </a>
              <a
                className="icon-div transition-all duration-300 transform hover:scale-105    "
                href="https://t.me/Zeinab_Salman1   "
              >
                <FaTelegram className="yello11" />
                <h5 className="text-center text-2xl yello-text">Telegram</h5>
              </a>
            </div>
          </div>
          <h3 className=" let-build-text  gradient-text text-[2.1rem] w-[30%] mt-20 text-center">
            Let's build a project together, with love.♥{" "}
          </h3>
           <a
              href={pdfURL}
              target="_blank"
              rel="noopener noreferrer"
              download="filename.pdf"
            >
          <ButtonComponent
            text="Download CV"
            typeclass="yello"
            padding="px-10 py-5 mt-10 "
          /></a>
        </div>
      </div>
    </section>
  );
}
