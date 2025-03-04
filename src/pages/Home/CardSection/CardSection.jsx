import React, { useState } from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
import DataBike from "./DataBike";

export default function CardSection() {
  const [list, setList] = useState("Trung Cấp");
  const Lists = ["Cao Cấp", "Trung Cấp", "Phổ Thông"];

  return (
    <div className="flex flex-col w-full h-auto px-10 s gap-28 ">
      <div className="flex justify-center ">
        <Card DataCard={DataCar} />
      </div>
      {/*************/}
      <div className="border-gradient "></div>
      {/*************/}
      <div className="flex flex-col items-center">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex items-center gap-24 mt-16 uppercase">
          {Lists.map((item, index) => (
            <li
              className={`${list === item ? "text-colors-primary font-bold text-2xl" : ""} cursor-pointer`}
              key={item}
              onClick={() => {
                setList(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/*************/}
      <div className="relative w-full -top-[87px] flex-col flex items-center overflow-x-scroll snap-x snap-mandatory  content z-20  ">
        <div className="flex ">
          <Card List={list} DataCard={DataBike} />
        </div>
      </div>
      {/* rengtale of scrollbar */}
      <div className="-top-[206.5px] left-1/2 z-10 -translate-x-1/2  w-[340px] h-[3px] bg-[#CBCBCB] relative"></div>
    </div>
  );
}
