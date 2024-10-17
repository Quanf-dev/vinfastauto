import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ItemMenuProduct from "./ItemMenuProduct";

export default function MainMenuProduct({ isShowMenu }) {
  const [active, setIsActive] = useState(false);
  const menuText = [
    { id: 1, title: "Xe ô tô", text: ["Động cơ điện", "Động cơ xăng"] },
    {
      id: 2,
      title: "Xe máy điện",
      text: ["Cao cấp", "Trung cấp", "Phổ thông"],
    },
  ];
  console.log(isShowMenu);
  return (
    <div
      className={`px-10 w-full h-[660px] fixed ${isShowMenu === "MenuSanPham" ? "top-[72px]" : "-top-[660px]"}  bg-[#07070780] backdrop-blur-3xl text-colors-bgColor flex gap-20`}
    >
      <ul className="mt-10">
        {menuText.map((item) => (
          <li key={item.id} className="mb-5 flex-col flex gap-5 relative">
            <h2 className="text-xl font-medium">{item.title}</h2>
            {item.text.map((text) => (
              <li
                className={`${active === text ? "activeProduct" : ""} transform ease-linear duration-200 rounded-lg pl-2 py-2 h-[34px] relative flex items-center cursor-pointer -left-2`}
                onClick={() => setIsActive(text)}
                key={text}
              >
                <span className="w-52">{text} </span>
                <MdOutlineKeyboardArrowRight className="" size={30} />
              </li>
            ))}
          </li>
        ))}
      </ul>
      <ItemMenuProduct active={active} />
    </div>
  );
}
