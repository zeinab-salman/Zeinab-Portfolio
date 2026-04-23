import React from "react";
export default function TitleComponent({ subTitle, title, text, typeClass }) {
  return (
    <div className={`title-component w-full ${typeClass}`}>
      <h5 className="text-3xl text-[#d4a76a] max-[600px]:text-[1.4rem]">
        {subTitle}
      </h5>
      <h2 className="gradient-text max-[600px]:text-[2rem]! max-[600px]:text-center">
        {title}
      </h2>
      <p className="text-2xl w-full max-w-2xl text-[#e0c3fc] ">{text}</p>
    </div>
  );
}
