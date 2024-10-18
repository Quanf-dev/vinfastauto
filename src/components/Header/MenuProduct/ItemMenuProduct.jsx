import React from "react";
import DataProduct from "./DataProduct";
export default function ItemMenuProduct({ active }) {
  const filteredData = DataProduct.find((item) => item.id === active);

  return (
    <div className={` w-[72.875rem] h-[33.5rem] mt-16`}>
      {filteredData && (
        <ul key={filteredData.id}>
          <li className="flex items-center text-2xl flex-wrap">
            {filteredData.ImageUrl.map((i, index) => (
              <div
                key={index}
                className="w-[16.46875rem] h-[16.75rem] flex flex-col items-center"
              >
                {filteredData.id === "Động cơ xăng" ||
                filteredData.id === "Động cơ điện" ? (
                  <img loading="lazy" width={296} src={i.url} alt={i.desc} />
                ) : (
                  <img src={i.url} alt={i.desc} />
                )}
                <p>{i.desc}</p>
              </div>
            ))}
          </li>
        </ul>
      )}
    </div>
  );
}
