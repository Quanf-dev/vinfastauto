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
          {GeneralData.map((item, index) => (
            <li key={index}>
              <span className="icon"></span>
              <span className="title">{item.title}</span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
