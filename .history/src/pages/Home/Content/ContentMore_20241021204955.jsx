import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentMore() {
  return (
    <div className="w-full h-[1000px] flex gap-7 text-colors-bgColor">
      <div className="relative w-[660px] h-[467px] ">
        <div className="absolute bg-custom-gradient w-full h-full opacity-30"></div>
        <img src="images\Home\Section\Content\image263.png" alt="" />

        <div className="absolute bottom-6 left-[22px] flex flex-col gap-2 ">
          <h1 className="text-[1.75rem]">Showroom & Đại lý</h1>
          <Button variant="outline">
            <span>Tìm chúng tôi</span>
          </Button>
        </div>
      </div>
      <div className="relative w-[660px] h-[467px]">
        <div className="absolute bg-custom-gradient w-full h-full opacity-50 "></div>
        <img src="images\Home\Section\Content\image84.png" alt="" />
        <div className="absolute bottom-6 left-[22px] flex flex-col gap-2">
          <h1 className="max-w-[230px] text-[1.75rem]">
            Hướng dẫn sử dụng App Vinfast
          </h1>
          <Button variant="outline">
            <span>Đọc thêm</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
