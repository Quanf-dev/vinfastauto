import Header from "@/components/Header/Header";
import LayoutCardProduct from "@/components/Product/Layouts/LayoutCardProduct";
import React from "react";
import DataCardvf8 from "../Context/DataCardVf8";

const {}

export default function Vf8Main() {
  return (
    <div>
      <Header
        urlVideo="video/vf8.mp4"
        urlImage1="images/Product/VF8/vf8Header.png"
        urlImage2="images/Product/VF8/VF83.png"
      ></Header>
      <LayoutCardProduct />
    </div>
  );
}
