import React from "react";
import DataCard from "./DataCard";
export default function ItemCard() {
  return (
    <div className="relative w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
      {DataCard.map((item) => (
        <>
          <div className="absolute left-8 top-8 ">
            <img src={item.logo} className="w-[95px] h-6 " />
            <img src={item.urlImage} />
          </div>
        </>
      ))}
    </div>
  );
}
