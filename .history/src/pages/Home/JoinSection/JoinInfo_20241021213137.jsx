import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function JoinInfo() {
  return (
    <div className="relative h-[1084px] w-full text-colors-bgColor">
      <div className="absolute z-20 w-full flex flex-col items-center justify-center h-[684px] gap-7">
        <h1 className="text-[2.5rem]">Đăng ký nhận thông tin</h1>
        <p className="max-w-[657px]">
          Đăng ký tại đây để tìm hiểu thêm về các tính năng đặc biệt trong mọi
          chiếc xe VinFast và sứ mệnh của chúng tôi là thúc đẩy quá trình chuyển
          đổi xe điện của thế giới.
        </p>
        <Input className="max-w-[700px]" type="email" placeholder="Email" />
      </div>
      <div className="flex">
        <p>
          Bằng cách đăng ký, bạn đồng ý cho phép chúng tôi gửi thông tin qua
          email cá nhân của bạn. Bạn có thể hủy bỏ đăng ký bằng cách hủy liên
          kết đăng ký trong thông tin liên lạc của tài khoản tại đây{" "}
        </p>
        <Button>
          <span>Đăng ký</span>
        </Button>
      </div>
      <img
        src="images\Home\Section\Join\info.png"
        alt=""
        className="absolute h-[684px] w-full "
      />
    </div>
  );
}
