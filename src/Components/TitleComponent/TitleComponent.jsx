import React from "react";
import "./TitleComponent.css";
export default function TitleComponent({ subTitle, title, text, typeClass }) {
  return (
    <div className={`title-component w-full  ${typeClass}`}>
      <h5 className="text-3xl   ">{subTitle}</h5>
      <h2 className="gradient-text ">{title}</h2>
      <p className="text-2xl  w-2xl  text-gray-500"> {text}</p>
    </div>
  );
}
