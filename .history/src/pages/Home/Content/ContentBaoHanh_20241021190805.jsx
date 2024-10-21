import React from "react";

export default function ContentBaoHanh() {
  return (
    <div className=" relative w-full h-[900px]">
      <div className="absolute left-[38px] z-10 flex flex-col justify-center gap-28 h-full">
        <div>
          <h1 className="text-[2rem]">Bảo hành & Dịch vụ</h1>
          <p className="max-w-">
            VinFast đã đầu tư nghiêm túc và bài bản để phát triển hệ thống
            Showroom, Nhà phân phối và xưởng dịch vụ rộng khắp, đáp ứng tối đa
            nhu cầu của Khách hàng
          </p>
        </div>
        {/* *********** */}
        <div>
          <h1>Chính sách bảo hành</h1>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
        </div>
        {/* *********** */}
        <div>
          <h1>Đặt lịch bảo dưỡng</h1>
          <p>Bảo hành vượt trội lên đến 10 năm.</p>
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
