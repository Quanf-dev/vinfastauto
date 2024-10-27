import React from "react";
import Slider from "./Slider";

export default function mainSlider() {
  return (
    <div className="h-[1029px] w-full">
      <div className="flex flex-col gap-4">
        <img src="Logo\logoBike.png" alt="" />\
        <p className="uppercase text-[1.5rem] ">
          Công nghệ bứt phá - Trải nghiệm đỉnh cao
        </p>
      </div>
      <Slider />
    </div>
  );
}
