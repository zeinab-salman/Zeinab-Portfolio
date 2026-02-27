import React from "react";
import "./MyToolkitSection.css";
import TitleComponent from "../TitleComponent/TitleComponent";
import MyToolkitItem from "../MyToolkitItem/MyToolkitItem";
export default function MyToolkitSection() {
  return (
    <section className="my-toolkit-section flex flex-col justify-center items-center w-full px-10 py-30">
      <TitleComponent
        subTitle=" EXPERTISE"
        title="My Toolkit"
        typeClass="flex flex-col items-center justify-center text-center "
      />
      <div className="toolkit-div flex items-center justify-center flex-wrap gap-5 py-10">
        <MyToolkitItem tool="React.js" color=" pink" />
        <MyToolkitItem tool="React Router" color="yello1" />
        <MyToolkitItem tool="React-Bootstrap" color="purble" />
        <MyToolkitItem tool="Tailwind CSS" color="pink" />
        <MyToolkitItem tool="Bootstrap" color="yello1" />
        <MyToolkitItem tool="Framer Motion" color="purble" />

        <MyToolkitItem tool="Java Script" color="pink" />
        <MyToolkitItem tool="Rest APIs" color="yello1" />
        <MyToolkitItem tool="Figma to code" color="purble" />
        <MyToolkitItem tool="Git" color="pink" />
        <MyToolkitItem tool="GitHub" color="yello1" />
        <MyToolkitItem tool="Jira" color="purble" />
        <MyToolkitItem tool="HTML5" color="pink" />
        <MyToolkitItem tool="CSS3" color="yello1" />
        <MyToolkitItem tool="Context Api" color="purble" />
      </div>
    </section>
  );
}
