import React from "react";

export default function Equip() {
  const Lists = [
    {
      title: "Công nghệ Pin LFP",
      desc: [
        "Tăng công suất động cơ.",
        "Tăng tốc độ lớn nhất cho phép tăng quãng đường di chuyển tối đa lên tới 150 km/lần sạc trong điều kiện tiêu chuẩn.",
        "Giảm thiểu tiêu hao không cần thiết.",
        "Ổn định & an toàn hơn, chống cháy nổ trên mọi trường hợp.",
      ],
    },
  ];
  return (
    <div className="h-[1700px]">
      <img src="images\Logo\thenonslogowhite.svg" className="mt-12 mx-6" />
      <h1>Công nghệ Pin tiên tiến</h1>
    </div>
  );
}
