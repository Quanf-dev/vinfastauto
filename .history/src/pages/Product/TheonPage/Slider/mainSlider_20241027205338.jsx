import React from "react";
import Slider from "./Slider";

export default function MainSlider() {
  return (
    <div className="h-[1029px] w-full">
      <div className="flex flex-col gap-4 items-center">
        <img src="images\Logo\logobike.png" alt="" className="w-[967px] " />
        <p className="uppercase text-[1.5rem] ">
          Công nghệ bứt phá - Trải nghiệm đỉnh cao
        </p>
      </div>
      <Slider />
    </div>
  );
}
