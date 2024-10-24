import React, { useState, Suspense } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import { IoIosLogOut } from "react-icons/io";

const ReactPlayer = React.lazy(() => import("react-player"));

export default function Header() {
  return (
    <header>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Suspense fallback={<div>Loading video...</div>}>
              <ReactPlayer
                url="video/header-video.mp4"
                playing={true}
                muted={true}
                width="100%"
                height="auto"
                loop="true"
                className="transform xxl:translate-y-[-150px] "
              />
            </Suspense>
          </CarouselItem>

          <CarouselItem>
            <div className="w-full h-full relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-32 flex-col flex items-center gap-5">
                <img
                  src="images/Home/SliderHead/logovf9.png"
                  className=""
                  alt=""
                />
                <h1 className="text-[#6D7784] text-[32px]">
                  Kiến tạo tương lai, bứt phá giới hạn.
                </h1>
                <Button className="w-auto py-5 px-11 effect-custom effect-custom-default   relative">
                  <span>Khám phá ngay</span>
                  <span>
                    <IoIosLogOut size={22} />
                  </span>
                </Button>
              </div>

              <img src="images/Home/SliderHead/image_207.png" alt="" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src="images/Home/SliderHead/image80.png" className="" alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent text-[#0000006f] border-none " />
        <CarouselNext className="bg-transparent text-[#0000006f] border-none " />
      </Carousel>
    </header>
  );
}
