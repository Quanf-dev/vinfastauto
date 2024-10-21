import React from "react";

export default function ContentBaoHanh() {
  return (
    <div className="relative w-full h-[1000px]">
      <div className="absolute  left-[38px]">
        <h1>Bảo hành & Dịch vụ</h1>
        <p>
          VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
          Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa nhu
          cầu của Khách hàng
        </p>
      </div>
      {/* *********** */}
      <div className="absolute left-[38px]">
        <h1>Chính sách bảo hành</h1>
        <p>Bảo hành vượt trội lên đến 10 năm.</p>
      </div>
      {/* *********** */}
      <div className="absolute left-[38px]">
        <h1>Đặt lịch bảo dưỡng</h1>
        <p>Bảo hành vượt trội lên đến 10 năm.</p>
      </div>
      <img src="images\Home\Section\Content\bhanh.png" alt="" />
    </div>
  );
}
