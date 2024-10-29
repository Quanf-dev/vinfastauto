import React from "react";
import dataSlider from "./dataSlider";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  const picks = [
    "/images/Product/Thenon/image57.svg",
    "/images/Product/Thenon/image58.svg",
    "/images/Product/Thenon/image59.svg",
  ];
  return (
    <div className="h-[737px] w-[902px] relative">
      {dataSlider.map((item) => (
        <li
          className="list-none absolute flex right-[224px] bottom-[120px] "
          key={item.id}
        >
          <img src={item.urlImg} alt="" />
        </li>
      ))}
      <div className="absolute right-[337px] bottom-[60px] flex gap-4">
        {picks.map((item, index) => (
          <li
            className="list-none border-2 border-solid border-colors-primary rounded-full p-1 "
            key={index}
          >
            <img src={item} alt="" />
          </li>
        ))}
      </div>
      <MdKeyboardArrowLeft />
      <MdKeyboardArrowRight
        size={86}
        color="#8E8E97"
        className=" absolute right-[68px]"
      />
    </div>
  );
}