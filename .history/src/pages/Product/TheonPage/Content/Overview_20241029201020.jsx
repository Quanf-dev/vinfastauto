import React from "react";
const ReactPlayer = React.lazy(() => import("react-player"));
export default function Overview() {
  return (
    <div>
      <ReactPlayer
        url={props.urlVideo}
        playing={true}
        muted={true}
        width="100%"
        height="auto"
        className="transform xxl:translate-y-[-150px] "
      />
    </div>
  );
}
