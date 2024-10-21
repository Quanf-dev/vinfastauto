import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentBaoHanh() {
  return (
    <div className=" relative w-full h-[900px]">
      <div className="top-0 absolute left-[38px] z-10 flex flex-col justify-center gap-10 h-full">
        <div>
          <h1 className="text-[2rem] mb-5">Bảo hành & Dịch vụ</h1>
          <p className="max-w-[425px] font-light">
            VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
            Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa
            nhu cầu của Khách hàng
          </p>
        </div>
        {/* *********** */}
        <div>
          <h3 className="text-[1.625rem] mb-4">Chính sách bảo hành</h3>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
          <Button variant="outline" size="lg" className="mt-5">
            <span>Chi tiết</span>
          </Button>
        </div>
        {/* *********** */}
        <div>
          <h2 className="text-[1.75rem] mb-5">Đặt lịch bảo dưỡng</h2>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
          <Button size="lg" className="mt-4 shadow-customButton">
            <span>Đặt lịch</span>
          </Button>
        </div>
      </div>
      <img
        src="images\Home\Section\Content\bhanh.png"
        alt=""
        className="absolute top-0 z-0 h-[781px]"
      />
    </div>
  );
}
