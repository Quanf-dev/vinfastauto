import React, { useState } from "react";
import { Button } from "../ui/button";
import { Vector_16, Vector_26, Vector_27, Vector_25 } from "@/assets/index.jsx";
import { Twirl as Hamburger } from "hamburger-react";
import MenuHambuger from "./MenuHambuger";
import MainMenuProduct from "./MenuProduct/MainMenuProduct";

export default function Topbar() {
  const [isShowMenu, setIsShowMenu] = useState("");
  const menu = [
    {
      text: "Giới thiệu",
      link: "#",
    },
    {
      text: "Sản phẩm",
      link: "#",
    },
    {
      text: "Dịch vụ hậu mãi",
      link: "#",
    },
    {
      text: "Pin và trạm sạc",
      link: "#",
    },
  ];
  return (
    <nav className="fixed top-0 bg-[#07070780] z-50 h-[72px] xxl:h-[90px] w-screen backdrop-blur-3xl overflow-hidden ">
      {/* ****************wrapper */}
      <div className="flex w-full h-full gap-5 xxl:gap=10 ">
        {/* ****************left */}
        <div className="relative basis-[50%]">
          <ul className="xl:flex hidden ml-10 xxl:ml-[140px] gap-10 xxl:gap-16   text-colors-bgColor z-20 absolute top-7 ">
            {menu.map((item) => (
              <li
                className="cursor-pointer text-[16px] font-medium "
                link={item.link}
                key={item.text}
                onClick={() => {
                  if (item.text === "Sản phẩm") {
                    setIsShowMenu(
                      isShowMenu === "MenuSanPham" ? "" : "MenuSanPham"
                    );
                  }
                }}
              >
                {item.text}
              </li>
            ))}
          </ul>{" "}
          <Vector_16 className="h-[50px] absolute lg:h-[70px] pb-2 xxl:h-[77px]" />
          <Vector_27 className="w-full h-[58px] absolute top-2 right-[11px] xxl:top-3" />
        </div>
        <MainMenuProduct isShowMenu={isShowMenu} />‍
        {/* ****************logocenter */}
        <div className="absolute left-1/2 transform -translate-x-[22px] xxl:-translate-x-[28px] top-[17px] w= xxl:w-[60px] xxl:h-[50px]">
          <img src="images/Logo/Logo.svg" className="w-full h-full " />
        </div>
        {/* ****************right */}
        <div className="relative basis-[50%] flex justify-end">
          {/* **************** */}

          <div className="hidden xl:block xl:absolute top-6 z-10 right-[90px]">
            <Button
              variant="default"
              className={`relative effect-custom effect-custom-default mr-8 `}
              size="default"
              link="/"
            >
              <span>Đăng ký lái thử</span>
            </Button>
          </div>
          {/* **************** */}
          <div className="absolute top-[18px] z-40 right-8">
            <Hamburger
              onToggle={(toggled) =>
                setIsShowMenu(
                  toggled == false && isShowMenu === "Menuhamburger"
                    ? ((toggled = true), "")
                    : "Menuhamburger"
                )
              }
              size={28}
              color="#FCFCFC"
            />
          </div>
          <MenuHambuger isShowMenu={isShowMenu} />
          {/* **************** */}
          <Vector_26 className="w-full h-[70px] pb-2 xxl:h-[77px]" />
          <Vector_25 className="w-full h-[58px] absolute top-2 left-2 xxl:top-3" />
        </div>
      </div>
    </nav>
  );
}
