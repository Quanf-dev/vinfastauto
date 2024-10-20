import React from "react";
import DataCard from "./DataCard";
import { Button } from "../ui/button";
export default function ItemCard() {
  return (
    <div className="relative w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
      {DataCard.map((item) => (
        <div className="absolute left-8 top-8 ">
          <img src={item.logo} className="w-[95px] h-6 right-24 " />
          <div className="flex-col flex items-center gap-2 ">
            <img src={item.urlImage} />
            <div>
              <p>{item.desc}</p>
              <h2>{item.title}</h2>
            </div>
            <div className="flex ">
              <Button size="sm" className="relative -left-3">
                <span>Đặt cọc ngay</span>
              </Button>
              <Button size="sm" variant="outline">
                <span>Chi tiết</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
