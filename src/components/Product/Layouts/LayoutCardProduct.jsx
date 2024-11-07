import React from "react";

import CardProduct from "../ProductCard";

export default function LayoutCardProduct({
  Logo,
  DataTextCard,
  DataTextBackgroud,
}) {
  const { DataTextCard, DataTextBackgroud } = useDataCard(); // Lấy dữ liệu từ Context
  return (
    <div className="w-full px-10 py-10 h-[967px] relative">
      <p>2023 | eSUV</p>
      <img className="mt-3 mb-10" src={Logo} />
      <CardProduct Data={DataTextCard} />
      <ul className="max-w-[427px]  ">
        {DataTextBackgroud.map((item, index) => (
          <li key={index}>
            <h3 className="text-2xl">{item.title}</h3>
            {/* Kiểm tra nếu desc là mảng thì render từng mục */}
            {Array.isArray(item.desc) ? (
              <ul className="text-small-15 font-light">
                {item.desc.map((price, i) => (
                  <li key={i}>{price}</li>
                ))}
              </ul>
            ) : (
              <p className="text-small-15 font-light">{item.desc}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
