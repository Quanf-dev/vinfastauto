import { Button } from "@/components/ui/button";
import React from "react";

export default function Information() {
  const Lists = [
    {
      title: "CÔNG NGHỆ PAAK",
      desc: "Công nghệ PAAK (Phone As A Key) cho khả năng điều khiển xe dễ dàng bằng một chạm qua ứng dụng điện thoại không cần chìa khóa.",
    },
    {
      title: "KẾT NỐI HMI TÍCH HỢP ESIM",
      desc: "Tự động chuẩn đoán và cảnh báo lỗi. Tự động cập nhật phần mềm trên xe thông qua ứng dụng trên điện thoại. Định vị xe (GPS) toàn cầu. Quản lý mọi hành trình.",
    },
    {
      title: "KHÓA THÔNG MINH",
      desc: "Trang bị cảm biến tự động để khởi động và tắt máy trong phạm vi một mét. Đa tính năng trên một chìa khóa: mở và khóa cổ xe, cốp xe và khởi động tính năng chống trộm.",
    },
  ];
  return (
    <div className="h-[827px] flex flex-col justify-center px-10  relative text-[#27272C]">
      <ul className="flex flex-col gap-10">
        {Lists.map((item, index) => (
          <li key={index} className="max-w-[493px]">
            <h1 className="text-[1.5rem] mb-5">{item.title}</h1>
            <p className="text-[0.938rem] font-light">{item.desc}</p>
          </li>
        ))}
        <Button className="w-[440px] py-7 shadow-customButton">
          <span className="uppercase ">mua ngay</span>
        </Button>
      </ul>
      <img
        src="images\Product\Thenon\image62.png"
        className="absolute right-0"
      />
    </div>
  );
}
