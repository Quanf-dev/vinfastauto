import React from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
import DataBike from "./DataBike";
export default function CardSection() {
  return (
    <div className="h-[1800px] w-full px-10 flex-col flex gap-28">
      <Card DataCard={DataCar} />
      <div className="border-gradient "></div>
      <div className="flex-col flex items-center text-[2rem]">
        <h1>XE MÁY ĐIỆN</h1>
        <ul>
          <li>Cao cấp </li>
          <li>Cao cấp </li>
          <li>Cao cấp </li>
        </ul>
        <Card DataCard={DataBike} />
      </div>
    </div>
  );
}
