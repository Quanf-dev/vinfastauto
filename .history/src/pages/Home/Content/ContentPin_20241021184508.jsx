import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentPin() {
  return (
    <div className="h-[500px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[2rem]">Pin và trạm sạc</h1>
        <p className="max-w-[800px] text-center">
          Với phương châm luôn đặt lợi ích Khách hàng lên hàng đầu, VinFast áp
          dụng chính sách cho thuê pin độc đáo, ưu việt và khác biệt với tất cả
          các mô hình cho thuê pin từ trước tới nay trên thế giới.
        </p>
      </div>
      <div className="flex">
        <div>
          <img src="images\Home\Section\Content\carr.png" alt="" />

          <Button>
            <span>Chi tiết</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
