import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
export default function Slider_carSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState("");

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 2)); // Điều chỉnh chỉ số tối đa
  };
  console.log(activeIndex);
  return (
    <div className=" relative h-[800px] w-full flex-col flex items-center gap-4">
      <img
        src="images\Logo/VF9.svg"
        className={`absolute top-20  transition-opacity  ${
          // hiệu ứng mờ logo khi chuyển tiếp
          activeIndex === 0 ? "opacity-100" : "opacity-0"
        } w-[187px] h-[50px]`}
      />
      <img
        src="images\Logo/VF8.svg"
        className={` absolute top-20 transition-opacity  ${
          // hiệu ứng mờ logo khi chuyển tiếp
          activeIndex === 1 ? "opacity-100" : "opacity-0"
        } w-[187px] h-[50px] `}
      />
      <img
        src="images\Logo/VFe34.svg"
        className={`absolute top-20 transition-opacity  ${
          // hiệu ứng mờ logo khi chuyển tiếp
          activeIndex === 2 ? "opacity-100" : "opacity-0"
        } w-[260px] h-[50px`}
      />

      <p className="relative top-36 max-w-[808px] text-center leading-[22px] mb-[60px]">
        Ngôn ngữ thiết kế của VinFast pha trộn giữa những đường cong thể thao,
        nét sang trọng và sự hiện diện mạnh mẽ, đồng thời tối ưu hóa hiệu suất,
        chức năng và sự đơn giản thanh lịch.
      </p>

      <div>
        <Carousel className="mt-40">
          <CarouselContent>
            <CarouselItem className=" max-w-[1150px] flex justify-end mr-14">
              <img
                src="images/Home/Section/SliderCar/image213.png"
                alt=""
                className={`w-[887px] aspect-auto transform ease-linear duration-500 ${
                  isHovered === "0" && activeIndex === 0
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              ></img>
              <img // image when  isHovered
                src="images/Home/Section/SliderCar/image214.png"
                alt=""
                className={`absolute w-[887px] transform ease-linear duration-500 aspect-auto ${
                  isHovered === "0" && activeIndex === 0
                    ? "opacity-100"
                    : "opacity-0"
                } `}
              ></img>
              <div // AREA Hover
                className="absolute w-[887px] h-full"
                onMouseEnter={() => setIsHovered("0")}
                onMouseLeave={() => setIsHovered("")}
              ></div>
            </CarouselItem>
            <CarouselItem className=" max-w-[800px] flex justify-center mt-4">
              <img
                src="images/Home/Section/SliderCar/image217.png"
                alt=""
                className={`w-[887px] aspect-auto transform ease-linear duration-500 ${
                  isHovered === "1" && activeIndex === 1
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />
              <img // image when  isHovered
                src="images/Home/Section/SliderCar/image210.png"
                alt=""
                className={`absolute w-[887px] transform ease-linear duration-500 aspect-auto ${
                  isHovered === "1" && activeIndex === 1
                    ? "opacity-100"
                    : "opacity-0"
                } `}
              ></img>
              <div // AREA Hover
                className="absolute  w-[687px] h-full"
                onMouseEnter={() => setIsHovered("1")}
                onMouseLeave={() => setIsHovered("")}
              ></div>
            </CarouselItem>
            <CarouselItem className="max-w-[1200px] flex justify-start ml-24">
              .{" "}
              <img
                src="images/Home/Section/SliderCar/image254.png"
                alt=""
                className={`w-[887px] transform ease-linear duration-500 aspect-auto ${
                  isHovered === "2" && activeIndex === 2
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />
              <img // image when  isHovered
                src="images/Home/Section/SliderCar/image217-1.png"
                alt=""
                className={`absolute transform ease-linear duration-500 w-[887px] aspect-auto ${
                  isHovered === "2" && activeIndex === 2
                    ? "opacity-100"
                    : "opacity-0"
                } `}
              ></img>
              <div // AREA Hover
                className="absolute ml-32 w-[687px] h-full "
                onMouseEnter={() => setIsHovered("2")}
                onMouseLeave={() => setIsHovered("")}
              ></div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            onClick={() => handlePrevious()}
            className="bg-[#8E8E9780] h-12 w-12  text-white border-none"
          />
          <CarouselNext
            onClick={() => handleNext()}
            className="bg-[#8E8E9780] h-13 w-13  text-white rounded-full border-none"
          />
        </Carousel>
      </div>
      <div className="flex gap-5 ">
        <Button size="sm" className=" shadow-customButton">
          <span> Đặt cọc ngay</span>
        </Button>
        <Button size="sm" variant="outline">
          <span> Xem thêm</span>
        </Button>
      </div>
    </div>
  );
}
