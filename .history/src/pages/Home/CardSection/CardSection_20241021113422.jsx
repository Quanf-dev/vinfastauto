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
    <div className="h-[1800px] w-full px-10 flex-col flex gap-28 ">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <div className="flex-col flex items-center w-full overflow-x-scroll   scrollbar-thumb-neutral-950  scrollbar-track-amber-400  ">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex gap-24 mt-16 mb-12 uppercase   ">
          <li>Cao cấp </li>
          <li>Trung cấp</li>
          <li>Phổ thông </li>
        </ul>
        <Carousel className="w-full  ">
          <CarouselContent className="flex">
            <Card DataCard={DataBike} />
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
