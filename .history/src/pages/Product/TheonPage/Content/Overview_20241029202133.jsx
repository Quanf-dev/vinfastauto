import React from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
import { MdOutlineSecurity } from "react-icons/md";
export default function Overview() {
  const Lists = [
    {
      title: "AN TOÀN",
      urlIcon: <MdOutlineSecurity size={24} />,
      desc: "Hệ thống phanh ABS tại cả bánh trước và sau. Đảm bảo an toàn trên mọi địa hình",
    },
    {
      title: "AN TOÀN",
      urlIcon: <MdOutlineSecurity size={24} />,
      desc: "Hệ thống phanh ABS tại cả bánh trước và sau. Đảm bảo an toàn trên mọi địa hình",
    },
    {
      title: "AN TOÀN",
      urlIcon: <MdOutlineSecurity size={24} />,
      desc: "Hệ thống phanh ABS tại cả bánh trước và sau. Đảm bảo an toàn trên mọi địa hình",
    },
  ];
  return (
    <div className="h-[811px]">
      <ReactPlayer
        url="video\bike.mp4"
        playing={true}
        muted={true}
        loop="true"
        width="100%"
        height="auto"
      />
    </div>
  );
}
