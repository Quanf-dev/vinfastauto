import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="h-[490px] bg-[#E0E7ED] px-10 pt-10 ">
      <div className="absolute w-full flex  justify-end right-10 ">
        <div>
          <ul className="flex flex-col gap-2 font-medium">
            <li>VỀ VINFAST</li>
            <li>DỊCH VỤ</li>
            <li>HỖ TRỢ</li>
            <li>CỘNG ĐỒNG</li>
          </ul>
        </div>
        <div className="ml-52">
          <ul className="flex flex-col gap-2 font-bold">
            <li>1900 23 23 89</li>
            <li>support.vn@vinfastauto.com</li>
            <li>FAQs</li>
            <li>Đại lý & Showroom</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-[300px]">
        <div className="flex items-center">
          <img
            src="images\Logo\Logo.svg"
            alt=""
            className="w-[43px] h-[36px]"
          />
          <span>
            <img src="images\Logo\LogoText.svg" alt="" />
          </span>
        </div>
        <p className="text-[0.75rem] font-medium mt-10">
          MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày 01/10/2019.
        </p>
        <p className="text-[0.75rem] font-medium mt-2">
          Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes
          Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt
          Nam
        </p>
      </div>
    </div>
  );
}
