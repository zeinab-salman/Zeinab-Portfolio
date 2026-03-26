import React from "react";
import TitleComponent from "../../Ui/TitleComponent/TitleComponent";
import { MdEmail } from "react-icons/md";
import {
  FaMapMarkedAlt,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidPhone } from "react-icons/bi";
import ButtonComponent from "../../Ui/ButtonComponent/ButtonComponent";
import RevealSection from "../../Animation/RevealSection/RevealSection";
import pdfURL from "../../../assets/Images/cv.pdf";
export default function ContactMeSection() {
  const yello11Class =
    "text-[#d4a76a] border border-[#d4a76a] p-[5px] rounded-bl-[20%] rounded-tr-[20%] shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)] cursor-pointer transition-all duration-1000 hover:text-[#a876aa] hover:border-[#a876aa] max-[400px]:text-[2rem]!";
  return (
    <RevealSection>
      <section
        id="contact"
        className="contact-me-section flex flex-col justify-center items-center w-full px-10 py-10 [&_h2]:text-[4rem] max-[1000px]:pt-0 max-[1000px]:px-5"
      >
        <TitleComponent
          subTitle="GET IN TOUCH"
          title="Contact Me"
          typeClass="flex flex-col items-center justify-center text-center"
        />

        <div className="info-div flex justify-between items-center w-full flex-wrap mt-10">
          {[
            {
              href: "mailto:zeinabslman004@gmail.com",
              icon: <MdEmail className={`${yello11Class} text-[3rem]`} />,
              text: "zeinabslman004@gmail.com",
              divClass: "email-div",
            },
            {
              href: "https://maps.app.goo.gl/deE94eko9EHY8YiPA",
              icon: (
                <FaMapMarkedAlt className={`${yello11Class} text-[3rem]`} />
              ),
              text: "Lattakia,syria",
              divClass: "address-div",
            },
            {
              href: "tel:+963982681016",
              icon: <BiSolidPhone className={`${yello11Class} text-[3rem]`} />,
              text: "+9639 82-681-016",
              divClass: "phone-div",
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className={`${item.divClass} transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-5 text-[1.8rem] max-[1000px]:w-full max-[1000px]:justify-start max-[1000px]:mb-2.5 [&_p]:max-[1000px]:text-[23px] [&_p]:max-[400px]:text-[1.2rem]`}
            >
              {item.icon}
              <p className="gradient-text">{item.text}</p>
            </a>
          ))}
        </div>

        <div className="let-us-connect-div w-full mt-20 max-[1000px]:mt-7.5 [&_h3]:max-[1000px]:text-[1.4rem]">
          <h3 className="gradient-text text-5xl">Let's Connect </h3>

          <div className="connect-info-div flex justify-between items-center w-full flex-wrap max-[1000px]:flex-col max-[1000px]:justify-start">
            <div className="social flex justify-start items-center text-[2rem] w-max mt-20 gap-4 max-[1000px]:w-full max-[1000px]:mt-5! max-[1000px]:gap-0.5! max-[1000px]:flex-wrap max-[1000px]:justify-center">
              <div className="social1 flex justify-start items-center w-max gap-4 max-[1000px]:w-full max-[1000px]:mt-3.75 max-[1000px]:flex-col max-[1000px]:items-start">
                <SocialLink
                  href="https://www.facebook.com/share/189RUgy6x1/"
                  icon={<SiFacebook className={yello11Class} />}
                  label="Facebook"
                />
                <SocialLink
                  href="https://www.instagram.com/zeinab.salman1?igsh=MTBhODJjeGZ5ZHdjbg=="
                  icon={<AiFillInstagram className={yello11Class} />}
                  label="Instagram"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/zeinab-salman?..."
                  icon={<FaLinkedin className={yello11Class} />}
                  label="Linkedin"
                />
              </div>

              <div className="social2 flex justify-start w-max items-center gap-4 max-[1000px]:w-full max-[1000px]:mt-3.75 max-[1000px]:flex-col max-[1000px]:items-start">
                <SocialLink
                  href="https://wa.me/qr/7FGEYU7ISBAWI1"
                  icon={<IoLogoWhatsapp className={yello11Class} />}
                  label="Whatsapp"
                />
                <SocialLink
                  href="https://github.com/zeinab-salman"
                  icon={<FaGithub className={yello11Class} />}
                  label="GitHub"
                />
                <SocialLink
                  href="https://t.me/Zeinab_Salman1"
                  icon={<FaTelegram className={yello11Class} />}
                  label="Telegram"
                />
              </div>
            </div>

            <h3 className="let-build-text gradient-text text-[2.1rem] w-[30%] mt-20 text-center max-[1000px]:w-full max-[1000px]:text-start max-[1000px]:mt-5">
              Let's build a project together, with love.♥{" "}
            </h3>

            <a
              href={pdfURL}
              target="_blank"
              rel="noopener noreferrer"
              download="filename.pdf"
              className="max-[1000px]:self-start"
            >
              <ButtonComponent
                text="Download CV"
                typeclass="yello"
                padding="px-10 py-5 mt-10 "
              />
            </a>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}
function SocialLink({ href, icon, label }) {
  return (
    <a
      className="icon-div transition-all duration-300 transform hover:scale-105 flex flex-col justify-center items-center max-[1000px]:flex-row! max-[1000px]:gap-3.75 max-[1000px]:w-full max-[1000px]:justify-start"
      href={href}
    >
      {icon}
      <h5 className="text-center text-2xl text-[#d4a76a] max-[400px]:text-[1.2rem]!">
        {label}
      </h5>
    </a>
  );
}
