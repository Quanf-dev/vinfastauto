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
      <ul className="flex  absolute bottom-5 text-colors-bgColor ">
        {Lists.map((item, index) => {
          const Icon = item.urlIcon;
          return (
            <li key={index} className="flex flex-col items-center relative">
              ;<h2>{item.title}</h2>
              <div className="flex relative">
                <img src="images\Product\Thenon\Vector18.svg" />
                <Icon className="absolute bottom-4" />
              </div>
              <p className="max-w-[331px] absolute top-10 left-16 ">
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
