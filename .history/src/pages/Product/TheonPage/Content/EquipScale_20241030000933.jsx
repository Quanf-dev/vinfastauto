import React, { useState } from "react";

export default function EquipScale() {
  const [active, setActive] = useState(1);
  const Lists = [
    {
      id: 1,
      urlImage: "images/Product/Thenon/image93.png",
    },
    {
      id: 2,
      urlImage: "images/Product/Thenon/image94.png",
    },
    {
      id: 3,
      urlImage: "images/Product/Thenon/image95.png",
    },
    {
      id: 4,
      urlImage: "images/Product/Thenon/image96.png",
    },
    {
      id: 5,
      urlImage: "images/Product/Thenon/image97.png",
    },
  ];
  return (
    <ul className="flex -gap-10 w-full justify-center items-center">
      {Lists.map((item) => (
        <li
          onClick={() => setActive(item.id)}
          key={item.id}
          className={`${active === item.id ? "scale-125 mx-6 " : " custom-effect-scale"}  duration-300 ease-in flex-shrink-0 -mr-12 clip-path-parallelogram w-[222.67px] `}
        >
          <img src={item.urlImage} alt={item.title} />
        </li>
      ))}
    </ul>
  );
}
