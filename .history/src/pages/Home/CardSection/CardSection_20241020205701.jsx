import React from "react";
import Card from "../../../components/Card/Card";
import DataCar from "./DataCar";
export default function CardSection() {
  return (
    <div className="h-[800px] w-full px-10 flex-col gap-20">
      <Card DataCard={DataCar} />
      <Card DataCard={DataCar} />
    </div>
  );
}
