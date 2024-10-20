import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function MenuHambuger({ isShowMenu }) {
  const menuItems = [
    {
      id: 1,
      title: "Tài Khoản",
      desc: [
        { text: "Đăng Nhập", link: "#" },
        { text: "Đăng ký", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Tiện ích",
      desc: [
        { text: "So sánh xe", link: "#" },
        { text: "Dự toán chi phí lăn bánh", link: "#" },
        { text: "Dự toán vay trả góp", link: "#" },
        { text: "Thẩm định vay trả góp", link: "#" },
      ],
    },
    {
      id: 3,
      title: "Tin tức",
      desc: [
        { text: "Công Ty", link: "#" },
        { text: "Cộng đồng", link: "#" },
      ],
    },
    {
      id: 4,
      title: "Mua sắm",
      desc: [{ text: "Phụ kiện Vinfast", link: "#" }],
    },
    {
      id: 5,
      title: "Hỗ trợ",
      desc: [
        { text: "Tìm Showroom & Trạm sạc", link: "#" },
        { text: "Đăng ký lái thử", link: "#" },
        { text: "Câu hỏi thường gặp", link: "#" },
      ],
    },
  ];
  return (
    <>
      <div
        className={`${isShowMenu === "Menuhamburger" ? "right-0" : "-right-[341px]"} transform ease-in duration-300 text-colors-bgColor  z-30 w-[341px] pb-[10rem] h-[800px] fixed bg-[#333339B2]  backdrop-blur-[10px] shadow-custom overflow-scroll overflow-x-hidden  
       scrollbar-thumb-red  scrollbar-track-slate-400  `}
      >
        <ul className="ml-6 mt-[80px] flex flex-col gap-10 ">
          {menuItems.map((item) => (
            <li key={item.id}>
              <h1 className="text-[22px]">{item.title}</h1>
              {item.desc.map((item) => (
                <p className="cursor-pointer leading-10 text-base font-thin ">
                  {item.text}
                </p>
              ))}
            </li>
          ))}
          <Select>
            <SelectTrigger className="relative right-[10px] bottom-3 w-[140px] text-base">
              <SelectValue placeholder="Quốc gia" />
            </SelectTrigger>
            <SelectContent className="text-colors-bgColor">
              <SelectItem value="vn">Việt Nam</SelectItem>
              <SelectItem value="us">United States</SelectItem>
            </SelectContent>
          </Select>
        </ul>
      </div>
    </>
  );
}
