import React from "react";
import dataSlider from "./dataSlider";
export default function Slider() {
  const picks = [
    "/images/Product/Thenon/image57.svg",
    "/images/Product/Thenon/image58.svg",
    "/images/Product/Thenon/image59.svg",
  ];
  return (
    <>
      {dataSlider.map((item) => (
        <li
          className="list-none absolute flex right-[124px] bottom-[120px] "
          key={item.id}
        >
          <img src={item.urlImg} alt="" />
        </li>
      ))}
      <div className="absolute right-[266px] bottom-[77px] flex gap-4">
        {picks.map((item, index) => (
          <li
            className="list-none border-2 border-solid border-colors-primary rounded-full p-1 "
            key={index}
          >
            <img src={item} alt="" />
          </li>
        ))}
      </div>
    </>
  );
}
