import React from "react";
import { useDataCard } from "@/pages/Product/Context/DataCardVf8Context";
import CardProduct from "./../CardProduct";

export default function LayoutCardProduct() {
  const dataCardVf8 = useDataCard(); // Lấy dữ liệu từ Context
  return (
    <div className="w-full px-10 py-4 h-[1367px]">
      <p>2023 | eSUV</p>
      <img src="images\Logo\VF8.svg" />
      <CardProduct Data={dataCardVf8} />
    </div>
  );
}
