import React from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
import { MdOutlineSecurity } from "react-icons/md";
import { FaCoins } from "react-icons/fa";
import { MdEnergySavingsLeaf } from "react-icons/md";
export default function Overview() {
  const Lists = [
    {
      title: "AN TOÀN",
      urlIcon: MdOutlineSecurity,
      desc: "Hệ thống phanh ABS tại cả bánh trước và sau. Đảm bảo an toàn trên mọi địa hình",
    },
    {
      title: "ĐỘNG CƠ",
      urlIcon: MdEnergySavingsLeaf,
      desc: "Động cơ điện đặt tại vị trí trung tâm. Công suất tối đa 7100W",
    },
    {
      title: "CÔNG NGHỆ",
      urlIcon: FaCoins,
      desc: "Trang bị công nghệ PAAK (Phone As A Key) Kết nối HMI - tích hợp Esim, và Khóa thông minh.",
    },
  ];
  return (
    <div className="h-[811px] w-full relative ">
      <ReactPlayer
        url="video\bike.mp4"
        playing={true}
        muted={true}
        loop={true}
        width="100%"
        height="auto"
      />
      <ul className="flex gap-32 absolute bottom-5 text-colors-bgColor mx-10">
        {Lists.map((item, index) => {
          const Icon = item.urlIcon;
          return (
            <li key={index} className="flex flex-col relative">
              <h2 className="text-[1.4rem] font-bold items-center relative left-12 bottom-3">
                {item.title}
              </h2>
              <div className="flex ">
                <img src="images\Product\Thenon\Vector18.svg" />
                <Icon size={24} className="relative -top-2 left-5" />
              </div>
              <p className=" text-[1.175rem] font-semibold max-w-[331px] absolute top-12 left-16 ">
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
