import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentPin() {
  return (
    <div className="flex flex-col h-full gap-11">
      <div className="flex flex-col items-center gap-5 ">
        <h1 className="text-[2rem]">Pin và trạm sạc</h1>
        <p className="max-w-[800px] text-center">
          Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp
          dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất cả
          các mô hình cho thuê pin từ trước tới nay trên thế giới.
        </p>
      </div>
      <div className="flex gap-3 ">
        <div className="flex flex-col items-center gap-5">
          <img src="images\Home\Section\Content\carr.png" alt="" />
          <h2 className="text-[1.5rem]">Pin và trạm sạc ô tô</h2>
          <Button variant="outline">
            <span>Chi tiết</span>
          </Button>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="images\Home\Section\Content\image260.png" alt="" />
          <h2 className="text-[1.5rem]">Pin và trạm sạc xe máy</h2>
          <Button variant="outline">
            <span>Chi tiết</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
