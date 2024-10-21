import React from "react";
import { Input } from "@/components/ui/input";
export default function JoinInfo() {
  return (
    <div className="relative h-[1084px] w-full text-colors-bgColor">
      <div className="absolute z-20">
        <h1>Đăng ký nhận thông tin</h1>
        <p>
          Đăng ký tại đây để tìm hiểu thêm về các tính năng đặc biệt trong mọi
          chiếc xe VinFast và sứ mệnh của chúng tôi là thúc đẩy quá trình chuyển
          đổi xe điện của thế giới.
        </p>
        <Input type="email" placeholder="Email" />
      </div>
      <img
        src="images\Home\Section\Join\info.png"
        alt=""
        className="absolute h-[684px] w-full "
      />
    </div>
  );
}
