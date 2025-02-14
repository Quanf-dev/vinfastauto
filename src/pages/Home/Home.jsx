import React from "react";
import CardSection from "./CardSection/CardSection";
import Slider_carSection from "./Slider_carSection/Slider_carSection";
import IndexContent from "./Content/IndexContent";
import IndexJoin from "./JoinSection/IndexJoin";
import Header from "@/components/Header/Header";
export default function Home() {
  return (
    <div>
      <Header
        urlVideo="video\bike.mp4"
        urlImage1="images/Header/SliderHead/image_207.png"
        urlImage2="images/Header/SliderHead/image80.png"
      />
      <Slider_carSection />
      <CardSection />
      <IndexContent />
      <IndexJoin />
    </div>
  );
}
