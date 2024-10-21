import React from "react";

export default function Footer() {
  return (
    <div className="h-[490px] bg-[#E0E7ED] px-10 pt-10 ">
      <div>
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
          <p className="text-[0.75rem]  text-colors-black mt-10">
            MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
            01/10/2019.
          </p>
          <p className="text-[0.75rem]  mt-2">
            Địa chỉ trụ sở chính: Số 7, đường Bằng Lăng 1, Khu đô thị Vinhomes
            Riverside, Phường Việt Hưng, Quận Long Biên, Thành phố Hà Nội, Việt
            Nam
          </p>
        </div>
      </div>
    </div>
  );
}
