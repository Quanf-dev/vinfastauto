import React from "react";
import GeneralData from "./GeneralListData";
import { Button } from "@/components/ui/button";

export default function GeneralList() {
  const Lists = [{}];
  return (
    <div>
      <h1 className="text-[1.625rem] text-colors-textPrimaryColor font-semibold mb-5">
        THÔNG SỐ SẢN PHẨM
      </h1>
      <div className="bg-[#FCFCFC] backdrop-blur-[32px] shadow-customGeneral w-full h-[664px] px-[83px] py-[80px]">
        <ul className="grid grid-cols-3 gap-14">
          {GeneralData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex items-center gap-3">
                <span className="bg-colors-black h-12 w-12 flex justify-center items-center rounded-full">
                  <IconComponent size={24} color="white" />
                </span>
                <div className="flex flex-col justify-start">
                  <h2 className="text-[1.375rem] font-semibold uppercase">
                    {item.title}
                  </h2>
                  <h3 className="text-[1.375rem] font-normal">{item.value}</h3>
                </div>
              </li>
            );
          })}
        </ul>
        <Button>
          {" "}
          <span>Ta</span>
        </Button>
      </div>
    </div>
  );
}
