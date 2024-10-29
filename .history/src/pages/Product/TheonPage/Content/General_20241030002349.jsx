import React from "react";

export default function General() {
  const Lists = [
    {
      title1: "CHI PHÍ MUA 02 PIN",
      title2: "17.200.000 VNĐ",
    },
    {
      title1: "CHI PHÍ CỌC 02 PIN",
      title2: "2.400.000 VNĐ",
    },
    {
      title1: "CHI PHÍ THUÊ PIN",
      title2: "350.000 VNĐ/tháng",
    },
  ];
  return (
    <div>
      <h1 className="text-[1.5rem] tracking-[1rem] uppercase  text-[#8E8E97]">
        vinfast - theon s
      </h1>
      <ul>
        {Lists.map((item, index) => (
          <li key={index} className="flex gap-12 font-bold text-[1.5rem]">
            <h1>{item.title1}</h1>
            <h1>{item.title2}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
