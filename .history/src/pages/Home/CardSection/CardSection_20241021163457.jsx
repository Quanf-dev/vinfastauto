import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
import DataBike from "./DataBike";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function CardSection() {
  const [list, setList] = useState("Cao cấp");
  const Lists = ["Cao cấp", "Trung Cấp", "Phổ Thông"];
  return (
    <div className="h-[3800px] w-full px-10 flex-col flex gap-28  ">
      <div className="flex ">
        <Card DataCard={DataCar} />
      </div>
      {/*************/}
      <div className="border-gradient "></div>
      {/*************/}
      <div className="flex flex-col items-center">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex gap-24 mt-16  uppercase ">
          {Lists.map((item) => (
            <li
              className={`${list === item ? "text-colors-primary font-bold text-2xl" : ""}`}
              key={item}
              onClick={() => setList({ item })}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/*************/}
      <div className="relative -top-20 flex-col flex items-center overflow-x-scroll snap-x snap-mandatory  content z-20  ">
        <div className="flex ">
          <Card DataCard={DataBike} />
        </div>
      </div>
      {/* rengtale of scrollbar */}
      <div className="-top-[182.5px] left-1/2 z-10 -translate-x-1/2  w-[340px] h-[3px] bg-[#CBCBCB] relative"></div>
    </div>
  );
}
