import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentMore() {
  return (
    <div className="w-full h-[1000px] flex gap-7">
      <div className="relative w-[660px] h-[467px]">
        <div className="absolute bg-custom-gradient w-full h-full opacity-50"></div>
        <img src="images\Home\Section\Content\image263.png" alt="" />
        <h1>Showroom & Đại lý</h1>
        <Button>
          <span>Tìm chúng tôi</span>
        </Button>
      </div>
      <div className="relative w-[660px] h-[467px]">
        <div className="absolute bg-custom-gradient w-full h-full opacity-50 "></div>
        <img src="images\Home\Section\Content\image84.png" alt="" />
        <h1>Hướng dẫn sử dụng App Vinfast</h1>
        <Button>
          <span>Đọc thêm</span>
        </Button>
      </div>
    </div>
  );
}
