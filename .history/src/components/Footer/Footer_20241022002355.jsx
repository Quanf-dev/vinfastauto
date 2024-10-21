import React from "react";

export default function Footer() {
  return (
    <div className="h-[490px] bg-[#E0E7ED] px-10 pt-10 ">
      <div>
        <div className="flex flex-col items-center">
          <img
            src="images\Logo\Logo.svg"
            alt=""
            className="w-[43px] h-[36px]"
          />
          <span className="flex">
            <img src="images\Logo\LogoText.svg" alt="" />
          </span>
          <p>
            MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
            01/10/2019.
          </p>
          <p>
            Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes
            Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt
            Nam
          </p>
        </div>
      </div>
    </div>
  );
}
