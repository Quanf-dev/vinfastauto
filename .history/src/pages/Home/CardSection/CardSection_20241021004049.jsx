import React from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
import DataBike from "./DataBike";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
export default function CardSection() {
  return (
    <div className="h-[1800px] w-full px-10 flex-col flex gap-28">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <div className="flex-col flex items-center overflow-x-scroll  scrollbar-thumb-[#8E8E97] ">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex gap-24 mt-16 mb-12 uppercase   ">
          <li>Cao cấp </li>
          <li>Trung cấp</li>
          <li>Phổ thông </li>
        </ul>
        <PerfectScrollbar style={{ height: 400 }}>
          <Card DataCard={DataBike} />
        </PerfectScrollbar>
      </div>
    </div>
  );
}
