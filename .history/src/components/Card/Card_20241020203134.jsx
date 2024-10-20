import React from "react";
import DataCard from "./DataCard";
import { Button } from "../ui/button";
export default function ItemCard() {
  return (
    <div className="flex gap">
      {DataCard.map((item) => (
        <div className=" relative w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent">
          <div className="absolute left-8 top-8 ">
            <img src={item.logo} className="w-[95px] h-6 right-24 " />
            <div className="flex-col flex items-center ">
              <img src={item.urlImage} />
              <div className="flex-col gap-1 flex items-center">
                <p>{item.desc}</p>
                <h2 className="text-xl text-colors-black font-semibold">
                  {item.title}
                </h2>
              </div>
              <div className="flex gap-2 mt-6 ">
                <Button
                  size="sm"
                  className="relative -left-3 w-[230px] shadow-customButton"
                >
                  <span>Đặt cọc ngay</span>
                </Button>
                <Button size="sm" variant="outline" className="w-[165px]">
                  <span>Chi tiết</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
