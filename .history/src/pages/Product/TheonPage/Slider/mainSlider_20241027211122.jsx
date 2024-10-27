import React from "react";
import Slider from "./Slider";

export default function MainSlider() {
  return (
    <div className="h-[1029px] w-full relative mx-10">
      <div className="h-[924px] w-[152px] absolute ">
        <h1 className="uppercase text-[#0000118] rotate-180 text-[100px] flex flex-col font-bold ">
          <span>V</span>
          <span>I</span>
          <span>N</span>
          <span>F</span>
          <span>A</span>
          <span>S</span>
          <span>T</span>
        </h1>
      </div>
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
