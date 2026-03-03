import React from "react";
import { Link, Element } from "react-scroll";
import "./NavBar.css";
import TechRadar from "../TechRadar/TechRadar"
export default function NavBar() {
  return (
    <div className="flex justify-center items-center ">
      <nav className="nav-bar w-[97%] px-10 py-4 glass-effect fixed mt-30 flex justify-between items-center z-100">
       
        
        <h1 className="logo gradient-text ">Zeinab Salman.</h1>
        <ul className="flex items-center justify-center gap-4 text-2xl ">
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
