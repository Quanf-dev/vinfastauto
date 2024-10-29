import React from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
import { MdOutlineSecurity } from "react-icons/md";
import { CiCoins1 } from "react-icons/ci";
import { MdEnergySavingsLeaf } from "react-icons/md";
export default function Overview() {
  const Lists = [
    {
      title: "AN TOÀN",
      urlIcon: <MdOutlineSecurity size={24} />,
      desc: "Hệ thống phanh ABS tại cả bánh trước và sau. Đảm bảo an toàn trên mọi địa hình",
    },
    {
      title: "ĐỘNG CƠ",
      urlIcon: <MdEnergySavingsLeaf size={24} />,
      desc: "Động cơ điện đặt tại vị trí trung tâm. Công suất tối đa 7100W",
    },
    {
      title: "AN TOÀN",
      urlIcon: <CiCoins1 size={24} />,
      desc: "Trang bị công nghệ PAAK (Phone As A Key) Kết nối HMI - tích hợp Esim, và Khóa thông minh.",
    },
  ];
  return (
    <div className="h-[811px] w-full relative">
      <ReactPlayer
        url="video\bike.mp4"
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="auto"
      />
      <ul className="flex absolute top-0 text-colors-bgColor">
        {Lists.map((item, index) => (
          <li key={index}>
            {item.urlIcon}
            <img src="images\Product\Thenon\Vector18.svg" className="ab" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
