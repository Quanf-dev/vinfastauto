import React, { createElement, useEffect, useRef } from "react";

export default function ProductCard(props) {
  const listRef = useRef(null);

  // Set position cho 2 li thứ 4 và 5
  useEffect(() => {
    const liElements = listRef.current.getElementsByTagName("li");
    if (liElements.length >= 5) {
      const wrapperDiv = document.createElement("div");
      wrapperDiv.className = "wrapper";

      wrapperDiv.appendChild(liElements[3].cloneNode(true)); // clone để giữ lại li gốc
      wrapperDiv.appendChild(liElements[4].cloneNode(true)); // clone để giữ lại li gốc

      // Xóa li cha thứ 4 và 5 khỏi DOM
      liElements[3].parentNode.removeChild(liElements[3]);
      liElements[3].parentNode.removeChild(liElements[3]);

      listRef.current.appendChild(wrapperDiv);
    }
  }, []);

  return (
    <ul ref={listRef} className="grid grid-cols-3 gap-3 CardProductPosition">
      {props.Data.map((item, index) => {
        const IconComponent = item.iconName;
        return (
          <li
            key={index}
            className="flex flex-col items-center justify-center gap-2 w-[440px] h-[120px] bg-[#FFFFFF1A] CardProductStyle "
          >
            <span className="h-6 aspect-square bg-colors-textSecondColor rounded-full flex justify-center items-center ">
              <IconComponent size={17} color="white" />
            </span>
            {item.Icon}
            <p className="text-[0.938rem]  text-colors-textSecondColor font-light">
              {item.desc}
            </p>
            <h1 className="text-colors-textPrimaryColor text-[1.5rem]">
              {item.title}
            </h1>
          </li>
        );
      })}
    </ul>
  );
}
