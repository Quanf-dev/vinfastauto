import React from "react";
import Slider from "./Slider";

import { RiDashboard2Fill } from "react-icons/ri";
import { FaChargingStation, FaArrowsLeftRightToLine } from "react-icons/fa6";
import { IoMdAlert } from "react-icons/io";

export default function MainSlider() {
  const infoBike = [
    {
      urlIcon: <RiDashboard2Fill size={24} />,
      title: "Tốc độ tối đa",
      desc: "99km/h",
    },
    {
      urlIcon: <FaArrowsLeftRightToLine size={24} />,
      title: "Độ rộng cốp xe",
      desc: "24 lít",
    },
    {
      urlIcon: <IoMdAlert size={24} />,
      title: "Hệ thống phanh",
      desc: "ABS 2 kênh",
    },
    {
      urlIcon: <FaChargingStation size={24} />,
      title: "150 km/ 1 lần sạc",
      desc: "99km/h",
    },
  ];
  return (
    <div className="h-[1019px] w-full relative mx-10 ">
      <div className="h-[924px] w-[152px] absolute top-0 ">
        <img src="images\Logo\VINFASTlogowhite.svg" alt="" />
      </div>
      <div className="flex flex-col gap-4 items-center mt-[68px]">
        <img src="images\Logo\logobike.svg" alt="" className="w-[967px] " />
        <p className="uppercase text-[1.5rem] ">
          Công nghệ bứt phá - Trải nghiệm đỉnh cao
        </p>
      </div>
      <ul className="flex flex-wrap w-[500px] gap-4 relative top-52 ">
        {infoBike.map((item, index) => (
          <li
            className="w-[213px] h-[120px] flex flex-col items-center custom-border bg-[#FFFFFF80] pt-5  "
            key={index}
          >
            {item.urlIcon}
            <h2 className="text-[0.938rem]">{item.title}</h2>
            <p className="text-[1.5rem] text-colors-black">{item.desc}</p>
          </li>
        ))}
      </ul>
      <Slider />
    </div>
  );
}
