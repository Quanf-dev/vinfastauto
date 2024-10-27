import Header from "@/components/Header/Header";
import React from "react";
import mainSlider from "../SliderBikeSection/Slider/mainSlider";
export default function ThenonMain() {
  return (
    <div>
      <Header
        urlVideo="video\bike.mp4"
        urlImage1="images/Header/SliderHead/image180.png"
        urlImage2="images/Header/SliderHead/image1821.png"
      />
      <mainSlider />
    </div>
  );
}
