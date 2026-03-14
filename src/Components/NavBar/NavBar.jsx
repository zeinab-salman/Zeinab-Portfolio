import React from "react";
import { useState } from "react";
import { Link, Element } from "react-scroll";
import "./NavBar.css";
import { PiListHeartBold } from "react-icons/pi";
export default function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="flex justify-center items-center ">
      <nav className="nav-bar w-[97%] px-10 py-4 glass-effect fixed mt-30 flex justify-between items-center z-100">
        <h1 className="logo gradient-text ">Dev.Zeinab♥ </h1>
        <ul className="flex items-center justify-center gap-4 text-2xl  ">
          <li className="cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`nav-bar-open   w-[97%] px-5 py-2 glass-effect fixed mt-20 flex flex-col justify-between items-center z-100  ${navOpen ? " mt-70" : ""}  `}
      >
        <div className="  flex  justify-between items-center w-full">
          <h1 className="logo gradient-text w-max ">Dev.Zeinab♥ </h1>
          <PiListHeartBold
            className="nav-icon cursor-pointer"
            onClick={toggleNav}
          />
        </div>
        <ul
          className={`w-full mt-4 flex flex-col  items-start justify-center gap-4 text-2xl ${navOpen ? "open " : "list-nav"}  `}
        >
          <li className="cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              {" "}
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              {" "}
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
