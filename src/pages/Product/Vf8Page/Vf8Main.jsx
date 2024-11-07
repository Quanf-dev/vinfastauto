import Header from "@/components/Header/Header";
import LayoutCardProduct from "@/components/Product/Layouts/LayoutCardProduct";
import React from "react";
import DataCardProviderVf8 from "../Context/DataCardVf8Context";
import { useDataCard } from "@/pages/Product/Context/DataCardVf8Context";

export default function Vf8Main() {
  return (
    <div>
      <Header
        urlVideo="video/vf8.mp4"
        urlImage1="images/Product/VF8/vf8Header.png"
        urlImage2="images/Product/VF8/VF83.png"
      ></Header>
      <DataCardProviderVf8>
        <LayoutCardProduct />
      </DataCardProviderVf8>
    </div>
  );
}
