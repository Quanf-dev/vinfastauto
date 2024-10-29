import { Button } from "@/components/ui/button";
import React from "react";
import EquipScale from "./EquipScale";
import Slider from "../Slider/Slider";

export default function General() {
  const Lists = [
    {
      title1: "CHI PHÍ MUA 02 PIN",
      title2: "17.200.000 VNĐ",
    },
    {
      title1: "CHI PHÍ CỌC 02 PIN",
      title2: "2.400.000 VNĐ",
    },
    {
      title1: "CHI PHÍ THUÊ PIN",
      title2: "350.000 VNĐ/tháng",
    },
  ];
  return (
    <div className="h-[1530px] relative px-10 flex">
      <div className="flex-shrink-0 ">
        <h1 className="text-[1.5rem] tracking-[1rem] uppercase  text-[#8E8E97]">
          vinfast - theon s
        </h1>
        <ul className="w-[514px]">
          {Lists.map((item, index) => (
            <li
              key={index}
              className="flex justify-between font-bold text-[1.3rem] mt-5"
            >
              <h1>{item.title1}</h1>
              <h1>{item.title2}</h1>
            </li>
          ))}
          <p className="text-[0.938rem] font-light">
            Đã bao gồm VAT, Không giới hạn quãng đường di chuyển
          </p>
          <Button className="shadow-customButton w-[440px] py-6 mt-10">
            <span className="uppercase">mua ngay</span>
          </Button>
        </ul>
      </div>
      <div className="grow">
        <Slider />
      </div>
    </div>
  );
}
