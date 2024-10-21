import React from "react";
import CardSection from "./CardSection/CardSection";
import Slider_carSection from "./Slider_carSection/Slider_carSection";
import IndexContent from "./Content/indexContent";
import IndexJoin from "./JoinSection/IndexJoin";
export default function Home() {
  return (
    <div>
      <Slider_carSection />
      <CardSection />
      <IndexContent />
      <IndexJoin />
    </div>
  );
}
