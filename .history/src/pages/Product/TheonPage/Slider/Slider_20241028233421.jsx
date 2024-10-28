import React from "react";
import dataSlider from "./dataSlider";
export default function Slider() {
  const picks = [
    "/images/Product/Thenon/image57.svg",
    "/images/Product/Thenon/image58.svg",
    "/images/Product/Thenon/image59.svg",
  ];
  return (
    <div>
      <div>{dataSlider.map(item)}</div>
      <div className="absolute right-10 bottom-16 flex gap-4">
        {picks.map((item, index) => (
          <li
            className="list-none border-2 border-solid border-colors-primary rounded-full p-1 "
            key={index}
          >
            <img src={item} alt="" />
          </li>
        ))}
      </div>
    </div>
  );
}
