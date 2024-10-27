import React from "react";
import CardSection from "./CardSection/CardSection";
import Slider_carSection from "./Slider_carSection/Slider_carSection";
import IndexContent from "./Content/indexContent";
import IndexJoin from "./JoinSection/IndexJoin";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <div>
      <Header
        urlVideo="video\header-video.mp4"
        urlImage1="images/Home/SliderHead/image80.png"
        urlImage2="images/Home/SliderHead/image_207.png"
      />
      <Slider_carSection />
      <CardSection />
      <IndexContent />
      <IndexJoin />
    </div>
  );
}
