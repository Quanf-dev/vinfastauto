import Header from "@/components/Header/Header";
import React from "react";
import MainSlider from "./Slider/MainSlider";
import Contentmain from "./Content/Contentmain";
export default function ThenonMain() {
  return (
    <div>
      <Header
        urlVideo="video\bike.mp4"
        urlImage1="images/Header/SliderHead/image180.png"
        urlImage2="images/Header/SliderHead/image1821.png"
      />
      <MainSlider />
      <Contentmain />
    </div>
  );
}
