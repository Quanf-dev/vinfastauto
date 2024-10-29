import React from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
export default function Overview() {
  const data
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
