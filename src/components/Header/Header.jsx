import React, { useState } from "react";

import ReactPlayer from "react-player";
import MainMenuProduct from "./MenuProduct/MainMenuProduct";

export default function Header() {
  return (
    <header>
      <ReactPlayer
        url="/header-video.mp4"
        playing={true}
        muted={true}
        width="100%"
        height="auto"
        loop="true"
        className="transform xxl:translate-y-[-150px] "
      />
   
    </header>
  );
}
