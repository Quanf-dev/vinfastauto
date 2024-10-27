import React from "react";
import Slider from "./Slider";
import { RiDashboard2Fill, FaChargingStation } from "react-icons/ri";

export default function MainSlider() {
  const infoBike = [
    { urlIcon: <RiDashboard2Fill />, title: "Tốc độ tối đa", text: "99km/h" },
    { urlIcon: <RiDashboard2Fill />, title: "Độ rộng cốp xe", text: "99km/h" },
    { urlIcon: <RiDashboard2Fill />, title: "Hệ thống phanh", text: "99km/h" },
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
      <Slider />
    </div>
  );
}
