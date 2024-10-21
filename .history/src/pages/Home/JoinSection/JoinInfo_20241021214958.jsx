import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function JoinInfo() {
  return (
    <div>
      <div className="relative h-[684px] w-full text-colors-bgColor">
        <div className="absolute z-20 w-full flex flex-col items-center justify-center h-full gap-7">
          <h1 className="text-[2.5rem]">Đăng ký nhận thông tin</h1>
          <p className="max-w-[657px]">
            Đăng ký tại đây để tìm hiểu thêm về các tính năng đặc biệt trong mọi
            chiếc xe VinFast và sứ mệnh của chúng tôi là thúc đẩy quá trình
            chuyển đổi xe điện của thế giới.
          </p>
          <Input
            className="max-w-[700px] border-l-0 border-r-0 border-t-0 rounded-none  "
            type="email"
            placeholder="Email"
          />
          <div className="flex">
            <p className="max-w-[450px] relative -left-3 text-[0.938rem] font-thin">
              Bằng cách đăng ký, bạn đồng ý cho phép chúng tôi gửi thông tin qua
              email cá nhân của bạn. Bạn có thể hủy bỏ đăng ký bằng cách hủy
              liên kết đăng ký trong thông tin liên lạc của tài khoản{" "}
              <span className="font-bold underline ">tại đây</span>
            </p>
            <Button className="shadow-customButton py-6 px-20 w-auto">
              <span>Đăng ký</span>
            </Button>
          </div>
        </div>

        <img
          src="images\Home\Section\Join\info.png"
          alt=""
          className="absolute h- h-full w-full "
        />
      </div>
      <p className="max-w-[720px] h-[320px] mt-7    ">
        1) Một số tính năng có thể là phiên bản tạm thời tiêu chuẩn hoặc tùy
        chọn. 2) Việc sử dụng gói Dịch vụ Hỗ trợ Lái xe & Dịch vụ Thông minh có
        thể phải trả thêm phí. Các tính năng hỗ trợ người lái là các hệ thống hỗ
        trợ không làm giảm trách nhiệm điều khiển phương tiện của người lái tại
        mọi thời điểm. Các tính năng hỗ trợ người lái có giới hạn tốc độ và các
        hạn chế khác và không nên chỉ dựa vào người lái. 3) Đề cập đến việc xử
        lý da động vật bằng quy trình thuộc da bằng thực vật. 4) Bảo hành thương
        mại bao gồm sửa chữa phần mềm, phần cứng hoặc lỗi sản xuất và bao gồm
        thay thế hoặc sửa chữa các bộ phận bị lỗi trong thời hạn 10 năm hoặc
        quãng đường tối đa 200.000 km, tùy theo điều kiện nào đến trước, theo
        các điều kiện bảo hành của VINFAST. Ắc quy khởi động 12V được bảo hành 3
        năm không giới hạn số km. Lốp xe được bảo hành bởi nhà sản xuất lốp xe
        và không thuộc phạm vi Bảo hành thương mại của VINFAST. Bảo hành Thương
        mại dành cho ắc quy động cơ (Điện áp cao) bao gồm các sửa chữa cần thiết
        để khôi phục dung lượng của ắc quy động cơ ở mức tối thiểu 70% so với
        công suất ban đầu trong giới hạn 10 năm không giới hạn quãng đường, miễn
        là xe được sử dụng đúng cách. Trong trường hợp đăng ký pin, các lỗi
        trong pin đẩy phải tuân theo các điều khoản của Chính sách về pin. Bảo
        hành bổ sung và không giới hạn các quyền theo luật định của khách hàng
        dựa trên trách nhiệm pháp lý của người bán đối với các khiếm khuyết. 5)
        Thông tin dựa trên báo cáo ChargeUp Europe 2023
      </p>
    </div>
  );
}
