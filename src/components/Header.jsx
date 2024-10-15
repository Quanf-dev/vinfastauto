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
      <div className="fixed top-0 bg-[#07070780] z-10 h-[90px] w-full backdrop-blur-[48px]">
        {/* ****************wrapper */}
        <div className="flex w-full h-full gap-12 ">
          {/* ****************left */}
          <div className="relative basis-[50%]">
            <ul className="flex ml-5 xxl:ml-[140px] font-medium xxl:text-xl gap-10 text-colors-bgColor absolute top-10 xxl:top-9 z-20 ">
              {menu.map((item) => (
                <li className="cursor-pointer" link={item.link} key={item.text}>
                  {item.text}
                </li>
              ))}
            </ul>

            <Vector_16 className="w-full h-[70px] absolute top-2" />
            <Vector_27 className="w-full h-[58px] absolute top-5 right-2" />
          </div>
          {/* ****************logocenter */}
          <div className="absolute left-1/2 transform -translate-x-[28px] top-[17px] w-[60px] h-[55px]">
            <img width={60} src="/Logo.svg" alt="" />
          </div>
          {/* ****************right */}
          <div className="ml-5 xxl:ml-[140px] relative basis-[50%] flex justify-end">
            <div className="absolute top-5 z-10 flex">
              <Button className="   " link="/">
                Đăng ký lái thử
              </Button>
              <Hamburger color="#FCFCFC" />
            </div>

            <Vector_26 className=" w-full h-[70px]  absolute top-2" />
            <Vector_25 className="w-full h-[58px] absolute top-5 left-2" />
          </div>
        </div>
      </div>
    </header>
  );
}
