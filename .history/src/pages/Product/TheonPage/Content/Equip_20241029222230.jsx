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
      desc: ["Thời gian sạc: khoảng 6 giờ từ 0-100%.", "Không chai pin"],
    },
    {
      title: "Cách bảo quản thông minh",
      desc: [
        "Duy trì dung lượng trên 20% trong quá trình sử dụng.",
        "Cắm sạc khi dung lượng pin thấp hơn 20%. Không nên sạc khi nhiệt độ pin cao hơn 45°C, hệ thống sẽ không nhận sạc khi pin nóng ở nhiệt độ 72°C.",
      ],
    },
  ];
  return (
    <div className="h-[1700px] px-10 text-[#000000]">
      <img src="images\Logo\thenonslogowhite.svg" className="absolute -z-0 " />
      <h1 className="text-[2.5rem] relative top-9 z-10 mb-20">
        Công nghệ Pin tiên tiến
      </h1>
      <div className="flex">
        <ul className="flex flex-col gap-6 max-w-[440px]">
          {Lists.map((item, index) => (
            <li key={index}>
              <h2 className="text-[1.625rem]">{item.title}</h2>
              {item.desc.map((item) => (
                <li className="list-disc text-[1.125rem]">
                  <p>{item}</p>
                </li>
              ))}
              {item.text !== undefined && (
                <span className="text-[0.75rem]">{item.text}</span>
              )}
            </li>
          ))}
        </ul>
        <img src="images\Product\Thenon\image68.png" />
      </div>
    </div>
  );
}
