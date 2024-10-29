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
      text: "Theo điều kiện tiêu chuẩn của VinFast. Điều kiện vận hành tiêu chuẩn: xe chở 1 người 65 kg di chuyển với vận tốc 30 km/giờ.",
    },
    {
      title: "Thời gian vận hành",
      desc: ["Thời gian sạc: khoảng 6 giờ từ 0-100%."],
    },
  ];
  return (
    <div className="h-[1700px]">
      <img src="images\Logo\thenonslogowhite.svg" className="mt-12 mx-6" />
      <h1>Công nghệ Pin tiên tiến</h1>
    </div>
  );
}
