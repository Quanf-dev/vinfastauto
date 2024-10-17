import React from "react";

export default function ItemMenuProduct({ active }) {
  const data = [
    {
      id: "Phổ thông",
      ImageUrl: [
        { url: "/evo_200.png", desc: "Evo 200" },
        { url: "/evo_200_lite.png", desc: "Evo 200 Lite" },
        { url: "/impes.png", desc: "Impes" },
        { url: "/ludo.png", desc: "Ludo" },
        { url: "/tempest.png", desc: "Tempest" },
      ],
    },
    {
      id: "Khong Pho Thong",
      ImageUrl: [
        { url: "/evo_200.png", desc: "Evo 200" },
        { url: "/evo_200_lite.png", desc: "Evo 200 Lite" },
        { url: "/impes.png", desc: "Impes" },
        { url: "/ludo.png", desc: "Ludo" },
        { url: "/tempest.png", desc: "Tempest" },
      ],
    },
  ];

  const filteredData = data.find((item) => item.id === active);
  console.log(active);
  return (
    <div className={` w-[72.875rem] h-[33.5rem] mt-16`}>
      {filteredData && (
        <ul key={filteredData.id}>
          <li className="flex items-center text-2xl flex-wrap">
            {filteredData.ImageUrl.map((i, index) => (
              <div
                key={index}
                className="w-[16.46875rem] h-[16.75rem] flex flex-col gap-4 items-center"
              >
                <img src={i.url} alt="" />
                <p>{i.desc}</p>
              </div>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}
