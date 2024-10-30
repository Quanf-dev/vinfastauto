import React from "react";
import GeneralData from "./GeneralListData";

export default function GeneralList() {
  const Lists = [{}];
  return (
    <div>
      <h1 className="text-[1.625rem] text-colors-textPrimaryColor font-semibold mb-5">
        THÔNG SỐ SẢN PHẨM
      </h1>
      <div className="bg-[#FCFCFC] backdrop-blur-[32px] shadow-customGeneral w-full h-[664px] px-[83px] py-[80px]">
        <ul className="grid grid-cols-3 gap-4">
          {GeneralData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index} className="flex">
                <span className="bg-colors-black h-12 w-12">
                  <IconComponent size={24} color="white" />
                </span>
                <h2 className="text-[1.375rem] font-semibold">{item.title}</h2>
                <h3 className="text-[1.375rem] font-normal">{item.value}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
