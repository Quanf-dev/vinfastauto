import React from "react";
import Slider from "./Slider";

export default function mainSlider() {
  return (
    <div className="h-[1029px] w-full">
      <div>
        <img src="Logo\logoBike.png" alt="" />\
        <p>Công nghệ bứt phá - Trải nghiệm đỉnh cao</p>
      </div>
      <Slider />
    </div>
  );
}
