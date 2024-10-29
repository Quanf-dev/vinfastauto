import React, { act, useState } from "react";
import dataSlider from "./dataSlider";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Slider() {
  const [active, setActive] = useState(1);
  const picks = [
    "/images/Product/Thenon/image57.svg",
    "/images/Product/Thenon/image58.svg",
    "/images/Product/Thenon/image59.svg",
  ];

  const handleActiveSlide = (left) =>
    left === "left"
      ? setActive(active === 1 ? dataSlider.length : active - 1)
      : setActive(active === dataSlider.length ? 1 : active + 1);
  return (
    <>
      {dataSlider.map((item) => (
        <li
          className={` ${active === item.id ? "opacity-1" : "opacity-0"} transform ease-in duration-300 list-none absolute flex right-[174px] bottom-[120px] `}
          key={item.id}
        >
          <img src={item.urlImg} alt="" />
        </li>
      ))}
      <div className="absolute right-[194px] bottom-[120px]">
        <img src="images\Product\Thenon\Group19.png" />
      </div>
      <div className="absolute right-[337px] bottom-[60px] flex gap-4">
        {picks.map((item, index) => (
          <li
            className={` ${
              active === index + 1
                ? "border-2 border-solid border-colors-primary rounded-full p-1 "
                : ""
            } list-none `}
            key={index}
          >
            <img src={item} alt="" />
          </li>
        ))}
      </div>
      <div className="flex relative top-60 ">
        <MdKeyboardArrowLeft
          size={86}
          color="#8E8E97"
          className=" absolute left-[568px] bottom-0 cursor-pointer"
          onClick={() => handleActiveSlide("left")}
        />
        <MdKeyboardArrowRight
          size={86}
          color="#8E8E97"
          className=" absolute right-[68px] bottom-0 cursor-pointer"
          onClick={() => handleActiveSlide("right")}
        />
      </div>
    </>
  );
}
