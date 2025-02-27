import React from "react";
import CardSection from "./CardSection/CardSection";
import Slider_carSection from "./Slider_carSection/Slider_carSection";
import IndexJoin from "./JoinSection/IndexJoin";
import Header from "@/components/Header/Header";
import IndexContent from "./Content/IndexContent";
export default function Home() {
  return (
    <div className="w-screen max-w-[1440px] mx-auto overflow-x-hidden ">
      <Slider_carSection />
      <CardSection />
      <IndexContent />
    </div>
  );
}
