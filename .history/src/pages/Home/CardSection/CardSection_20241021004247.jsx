import React from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
import DataBike from "./DataBike";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function CardSection() {
  return (
    <div className="h-[1800px] w-full px-10 flex-col flex gap-28 overflow-x-scroll">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <div className="flex-col flex items-center  ">
        <h1 className="text-[2rem]">XE MÁY ĐIỆN</h1>
        <ul className="flex gap-24 mt-16 mb-12 uppercase   ">
          <li>Cao cấp </li>
          <li>Trung cấp</li>
          <li>Phổ thông </li>
        </ul>
        <Card DataCard={DataBike} />
      </div>
    </div>
  );
}
