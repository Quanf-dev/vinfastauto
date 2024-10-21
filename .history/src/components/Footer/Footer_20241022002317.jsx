import React from "react";

export default function Footer() {
  return (
    <div className="h-[490px] bg-[#E0E7ED] px-10 pt-10 ">
      <div>
        <div className="flex items-center">
          <img
            src="images\Logo\Logo.svg"
            alt=""
            className="w-[43px] h-[36px]"
          />
          <span>
            <img src="images\Logo\LogoText.svg" alt="" />
          </span>
          <p>
            MST/MSDN: 0108926276 do Sở KHĐT TP Hà Nội cấp lần đầu ngày
            01/10/2019.
          </p>
        </div>
      </div>
    </div>
  );
}
