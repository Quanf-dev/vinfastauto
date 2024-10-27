import React from "react";

import { Button } from "../ui/button";
export default function ItemCard(props) {
  return (
    <>
       {props.DataCard && (
      {props.List !== undefined ? "" : ""}
      {props.DataCard.map((item, index) => (
        <div
          className={`${index === 3 || index === 6 ? "snap-center" : ""}  relative w-[440px] h-[452px] bg-gradient-to-b from-[#E9E9E9] to-transparent mr-5  `}
        >
          <div className="absolute left-8 top-8 ">
            {item.hasOwnProperty("logo") ? (
              <img src={item.logo} className=" w-auto h-6 " />
            ) : (
              <h1 className="text-[1.25rem] font-black italic uppercase">
                {item.name}{" "}
              </h1>
            )}

            <div className="flex-col flex items-center ">
              <img src={item.urlImage} className="h-[13.625rem] " />
              <div className="flex-col gap-1 flex items-center">
                <p>{item.desc}</p>
                <h2 className="text-xl text-colors-black font-semibold">
                  {item.title}
                </h2>
              </div>
              <div className="flex gap-2 mt-6 ">
                <Button
                  size="sm"
                  className="relative -left-3 w-[230px] shadow-customButton"
                >
                  <span>Đặt cọc ngay</span>
                </Button>
                <Button size="sm" variant="outline" className="w-[165px]">
                  <span>Chi tiết</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}