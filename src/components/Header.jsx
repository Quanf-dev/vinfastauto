import React from "react";

import ReactPlayer from "react-player";
import { Button } from "./ui/button";
import { Vector_16, Vector_26, Vector_27, Vector_25 } from "@/assets/index.jsx";
import { Twirl as Hamburger } from "hamburger-react";
export default function Header() {
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
    <header>
      <ReactPlayer
        url="/header-video.mp4"
        playing={true}
        muted={true}
        width="100%"
        height="auto"
        loop="true"
        className="transform translate-y-[-150px]"
      />
      {/* ****************navbar */}
      <nav className="fixed top-0 bg-[#07070780] z-10 h-[72px] xxl:h-[90px] w-full backdrop-blur-[48px]">
        {/* ****************wrapper */}
        <div className="flex w-full h-full gap-5 xxl:gap=10 ">
          {/* ****************left */}
          <div className="relative basis-[50%]">
            <ul className="flex ml-10 xxl:ml-[140px] gap-10 text-colors-bgColor z-20 absolute top-7">
              {menu.map((item) => (
                <li
                  className="cursor-pointer text-[16px] font-medium "
                  link={item.link}
                  key={item.text}
                >
                  {item.text}
                </li>
              ))}
            </ul>
            <Vector_16 className="w-full h-[53px] absolute top-2 " />
            <Vector_27 className="w-full h-[58px] absolute top-3 xxl:top-5 right-2" />
          </div>
          ‍ {/* ****************logocenter */}
          <div className="absolute left-1/2 transform -translate-x-[22px] xxl:-translate-x-[28px] top-[17px] w= xxl:w-[60px] xxl:h-[55px]">
            <img src="/Logo.svg" alt="" />
          </div>
          {/* ****************right */}
          <div className="relative basis-[50%] flex justify-end">
            <div className="absolute top-5 z-10 flex">
              <Button variant="default" link="/">
                Đăng ký lái thử
              </Button>
              <Hamburger color="#FCFCFC" />
            </div>

            <Vector_26 className=" w-full h-[53px]  absolute top-2 " />
            <Vector_25 className="w-full h-[58px] top-3 absolute top-5 left-2" />
          </div>
        </div>
      </nav>
    </header>
  );
}
