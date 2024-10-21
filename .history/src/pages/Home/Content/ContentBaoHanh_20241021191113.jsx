import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentBaoHanh() {
  return (
    <div className=" relative w-full h-[900px]">
      <div className="absolute left-[38px] z-10 flex flex-col justify-center gap-28 h-full">
        <div>
          <h1 className="text-[2rem]">Bảo hành & Dịch vụ</h1>
          <p className="max-w-[425px] font-light">
            VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
            Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa
            nhu cầu của Khách hàng
          </p>
        </div>
        {/* *********** */}
        <div>
          <h3 className="text-[1.625rem]">Chính sách bảo hành</h3>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
          <Button>
            <span>Chi tiết</span>
          </Button>
        </div>
        {/* *********** */}
        <div>
          <h2 className="text-[1.75rem]">Đặt lịch bảo dưỡng</h2>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
          <Button>
            <span>Chi tiết</span>
          </Button>
        </div>
      </div>
      <img
        src="images\Home\Section\Content\bhanh.png"
        alt=""
        className="absolute top-0 z-0"
      />
    </div>
  );
}
