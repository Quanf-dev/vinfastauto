import React from "react";

export default function EquipScale() {
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
    <ul className="flex -gap-10 w-full justify-center">
      {Lists.map((item) => (
        <li key={item.id} className="flex-shrink-0 -mr-16">
          <img
            src={item.urlImage}
            alt={item.title}
            className="clip-path-parallelogram custom-effect"
          />
        </li>
      ))}
    </ul>
  );
}
