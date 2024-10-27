import React from "react";
import Slider from "./Slider";

export default function MainSlider() {
  return (
    <div className="h-[1029px] w-full">
      <h1 className="uppercase text-[#00000008] w-[152px]">vinfast</h1>
      <div className="flex flex-col gap-4 items-center">
        <img src="images\Logo\logobike.svg" alt="" className="w-[967px] " />
        <p className="uppercase text-[1.5rem] ">
          Công nghệ bứt phá - Trải nghiệm đỉnh cao
        </p>
      </div>
      <Slider />
    </div>
  );
}
