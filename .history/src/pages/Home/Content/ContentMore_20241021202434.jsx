import React from "react";

export default function ContentMore() {
  return (
    <div className="w-full h-[1000px] flex gap-7">
      <div className="relative w-[660px] h-[467px]">
        <div
          style={{
            background:
              "linear-gradient(360deg, #000000 0%, rgba(217, 217, 217, 0) 100%)",
          }}
          className="absolute bg-custom-gradient w-full h-full "
        ></div>
        <img src="images\Home\Section\Content\image263.png" alt="" />
      </div>
      <div className="relative w-[660px] h-[467px]">
        <div
          style={{
            background:
              "linear-gradient(360deg, #000000 0%, rgba(217, 217, 217, 0) 100%)",
          }}
          className="absolute bg-custom-gradient w-full h-full"
        ></div>
        <img
          src="images\Home\Section\Content\image84.png"
          alt=""
          className="opacity-50"
        />
      </div>
    </div>
  );
}
