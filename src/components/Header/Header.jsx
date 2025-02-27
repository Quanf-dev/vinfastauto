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

export default function Header(props) {
  const showContent =
    props.urlImage1 === "images/Header/SliderHead/image_207.png" ||
    props.urlImage1 === "images/Product/VF8/vf8Header.png";
  return (
    <header>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Suspense fallback={<div>Loading video...</div>}>
              <ReactPlayer
                url={props.urlVideo}
                playing={true}
                muted={true}
                width="100%"
                height="auto"
                className="transform xxl:translate-y-[-150px] "
              />
            </Suspense>
          </CarouselItem>
          <CarouselItem>
            <div className="relative w-full h-full ">
              {showContent && (
                <div className="absolute flex flex-col items-center gap-5 -translate-x-1/2 left-1/2 top-32">
                  <img
                    src={`${props.urlImage1 === "images/Product/VF8/vf8Header.png" ? "public/images/Logo/VF8.svg" : "images/Header/SliderHead/logovf9.png"} `} // nếu router = vf8 thì logo vF8 ngược lại
                    className=""
                    alt=""
                  />
                  <h1 className="text-[#6D7784] text-[32px]">
                    Kiến tạo tương lai, bứt phá giới hạn.
                  </h1>
                  {props.urlImage1 !== "images/Product/VF8/vf8Header.png" && (
                    <Button className="relative w-auto py-5 px-11 effect-custom effect-custom-default">
                      <span>Khám phá ngay</span>
                      <span>
                        <IoIosLogOut size={22} />
                      </span>
                    </Button>
                  )}
                </div>
              )}

              <img src={props.urlImage1} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={props.urlImage2} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent text-[#0000006f] border-none " />
        <CarouselNext className="bg-transparent text-[#0000006f] border-none " />
      </Carousel>
    </header>
  );
}
