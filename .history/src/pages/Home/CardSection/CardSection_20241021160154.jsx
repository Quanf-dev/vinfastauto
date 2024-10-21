import React from "react";
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
  return (
    <div className="h-[3800px] w-full px-10 flex-col flex gap-28 ">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
      <ul className="flex gap-24 mt-16  uppercase ">
        <li>Cao cấp </li>
        <li>Trung cấp</li>
        <li>Phổ thông </li>
      </ul>
      <div className="flex-col flex items-center overflow-x-scroll snap-x snap-mandatory  content z-20  ">
        <div className="flex ">
          <Card DataCard={DataBike} />
        </div>
      </div>
      {/* rengtale cua scrollbar */}
      <div className="-top-[118px] left-1/2 z-10 -translate-x-1/2  w-[340px] h-[3px] bg-[#CBCBCB] relative"></div>
    </div>
  );
}
