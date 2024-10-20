import React from "react";
import DataCard from "./DataCard";
export default function ItemCard() {
  return (
    <div className="absolute relativew-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
      {DataCard.map((item) => (
        <>
          <img src={item.logo} className=" pl-8 pt-8 w-[95px] h-6 " />
        </>
      ))}
    </div>
  );
}
