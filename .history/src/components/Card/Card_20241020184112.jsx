import React from "react";
import DataCard from "./DataCard";
import { Button } from "../ui/button";
export default function ItemCard() {
  return (
    <div className="relative w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
      {DataCard.map((item) => (
        <>
          <div className="absolute left-8 top-8 flex-col">
            <img src={item.logo} className="w-[95px] h-6 " />
            <img src={item.urlImage} />
            <p>{item.desc}</p>
            <h2>{item.title}</h2>
          </div>
          <Button></Button>
        </>
      ))}
    </div>
  );
}
