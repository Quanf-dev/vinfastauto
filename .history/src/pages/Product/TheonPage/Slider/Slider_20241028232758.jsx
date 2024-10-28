import React from "react";

export default function Slider() {
  const picks = [
    "/images/Product/Thenon/image57.svg",
    "/images/Product/Thenon/image58.svg",
    "/images/Product/Thenon/image59.svg",
  ];
  return (
    <div>
      <div className="absolute right-0 flex">
        {picks.map((item, index) => {
          <li key={index}>
            <img src={item} alt="" />
          </li>;
        })}
      </div>
    </div>
  );
}
