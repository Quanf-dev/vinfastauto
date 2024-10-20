import React from "react";
import DataCard from "./DataCard";
export default function ItemCard() {
  return (
    <div className="w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
      {DataCard.map((item) => (
        <div></div>
      ))}
    </div>
  );
}
