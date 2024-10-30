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
              <span className="icon "></span>
              <h2 className="text-[1.375rem]">{item.title}</h2>
              <p className="value">{item.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
