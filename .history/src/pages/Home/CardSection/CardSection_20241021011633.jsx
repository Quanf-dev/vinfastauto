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
import { ScrollArea } from "@/components/ui/scroll-area";
export default function CardSection() {
  return (
    <div className="h-[1800px] w-full px-10 flex-col flex gap-28">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <div className="flex-col flex items-center w-full  scrollbar-thumb-[#8E8E97] ">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex gap-24 mt-16 mb-12 uppercase   ">
          <li>Cao cấp </li>
          <li>Trung cấp</li>
          <li>Phổ thông </li>
        </ul>
        <Carousel className="w-full">
          <ScrollArea className="h-full w-fullrounded-md border p-4">
            <CarouselContent className="flex gap-5  ">
              <CarouselItem className="">
                <Card DataCard={DataCar} />
              </CarouselItem>
              <CarouselItem>
                <Card DataCard={DataCar} />
              </CarouselItem>
            </CarouselContent>
          </ScrollArea>
        </Carousel>
      </div>
    </div>
  );
}
