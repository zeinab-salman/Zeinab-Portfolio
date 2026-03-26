import React, { useState } from "react";
import { Link } from "react-scroll";
import { PiListHeartBold } from "react-icons/pi";
export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const navLinkStyle =
    "text-[#d4a76a] cursor-pointer hover:opacity-80 transition-opacity";
  const logoStyle =
    "logo gradient-text text-[#a876aa] text-[2rem] max-[1000px]:text-[1.4rem]";
  const iconStyle = "nav-icon text-[#a876aa] text-[2rem] cursor-pointer";

  return (
    <div className="flex justify-center items-center">
      <nav className="nav-bar hidden min-[1001px]:flex w-[97%] px-10 py-4 glass-effect fixed mt-30 justify-between items-center z-100">
        <h1 className={logoStyle}>Dev.Zeinab♥</h1>
        <ul className="flex items-center justify-center gap-4 text-2xl">
          {["home", "about", "work", "skills", "contact"].map((target) => (
            <li key={target} className={navLinkStyle}>
              <Link
                to={target}
                smooth={true}
                duration={500}
                className="capitalize"
              >
                {target}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={`nav-bar-open flex min-[1001px]:hidden w-[97%] px-5 py-2 fixed z-100 flex-col justify-between items-center transition-all duration-300
          ${
            navOpen
              ? "mt-88 background-purple rounded-br-lg rounded-bl-lg glow-gold pb-5"
              : "glass-effect mt-20"
          }`}
      >
        <div className="flex justify-between items-center w-full">
          <h1 className={logoStyle + " w-max"}>Dev.Zeinab♥</h1>
          <PiListHeartBold className={iconStyle} onClick={toggleNav} />
        </div>
        <ul
          className={`w-full mt-2 flex-col items-start justify-center gap-4 text-2xl 
            ${navOpen ? "flex" : "hidden"} 
            max-[1000px]:text-[1.2rem]`}
        >
          {["home", "about", "work", "skills", "contact"].map((target) => (
            <li
              key={target}
              className={`${navLinkStyle} w-max glass-effect p-1`}
            >
              <Link
                to={target}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="capitalize block w-full"
              >
                {target}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
