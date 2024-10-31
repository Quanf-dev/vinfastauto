import React from "react";

export default function CardProduct(props) {
  return (
    <div>
      {props.Data.map((item, index) => {
        const IconComponent = item.Icon;
        return (
          <li key={index} className="flex flex-col gap-1">
            <IconComponent size={24} />
            {item.Icon}
            <p>{item.desc}</p>
            <h1>{item.title}</h1>
          </li>
        );
      })}
    </div>
  );
}
