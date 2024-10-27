import React from "react";
import Slider from "./Slider";

import { RiDashboard2Fill } from "react-icons/ri";
import { FaChargingStation, FaArrowsLeftRightToLine } from "react-icons/fa6";
import { IoMdAlert } from "react-icons/io";

export default function MainSlider() {
  const infoBike = [
    { urlIcon: <RiDashboard2Fill />, title: "Tốc độ tối đa", desc: "99km/h" },
    {
      urlIcon: <FaArrowsLeftRightToLine />,
      title: "Độ rộng cốp xe",
      text: "99km/h",
    },
    { urlIcon: <IoMdAlert />, title: "Hệ thống phanh", text: "99km/h" },
    {
      urlIcon: <FaChargingStation />,
      title: "Quãng đường di chuyển",
      text: "99km/h",
    },
  ];
  return (
    <div className="h-[1019px] w-full relative mx-10">
      <div className="h-[924px] w-[152px] absolute top-0 ">
        <img src="images\Logo\VINFASTlogowhite.svg" alt="" />
      </div>
      <div className="flex flex-col gap-4 items-center mt-[68px]">
        <img src="images\Logo\logobike.svg" alt="" className="w-[967px] " />
        <p className="uppercase text-[1.5rem] ">
          Công nghệ bứt phá - Trải nghiệm đỉnh cao
        </p>
      </div>
      <ul className="flex flex-wrap w-[500px]">
        {infoBike.map((item, index) => (
          <li
            style="box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.1); backdrop-filter: blur(32px);"
            className="w-[213px] h-[120px] flex flex-col items-center"
            key={index}
          >
            {item.urlIcon}
            <p>{item.desc}</p>
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
      <Slider />
    </div>
  );
}