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
    <ul className="flex -gap-10">
      {Lists.map((item) => (
        <li key={item.id} className="flex-shrink-0">
          {" "}
          {/* Thêm lớp flex-shrink-0 để giữ kích thước */}
          <img
            src={item.urlImage}
            alt={item.title}
            className="clip-path-parallelogram w-40 h-40 object-cover" // Thêm kích thước cho hình ảnh
          />
        </li>
      ))}
    </ul>
  );
}
