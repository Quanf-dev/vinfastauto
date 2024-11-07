// src/context/DataCardContext.js
import React, { createContext, useContext } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsFuelPump } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";

const DataCardContext = createContext();

const DataCardProviderVf8 = ({ children }) => {
  const DataTextCard = [
    {
      iconName: AiOutlineThunderbolt,
      desc: "Công suất tối đa",
      title: "450 kW - 603 hp",
    },
    {
      iconName: BsFuelPump,
      desc: "Dung lượng pin",
      title: "90 kWh",
    },
    {
      iconName: FaRoute,
      desc: "Loại pin",
      title: "Lithium-ion",
    },
    {
      iconName: GiCarDoor,
      desc: "Phạm vi di chuyển",
      title: "500 km",
    },
    {
      iconName: MdOutlineElectricCar,
      desc: "Tốc độ tối đa",
      title: "200 km/h",
    },
  ];

  const DataTextBackgroud = [
    {
      title: "Mẫu eSUV cỡ trung thời thượng",
      desc: "VF 8 đạt đến sự kết hợp hoàn hoàn hảo giữa chất lượng và giá trị thông qua công nghệ cao cấp, kỹ thuật sản xuất đặc biệt và dịch vụ tận tâm.",
    },
    {
      title: "GIÁ XE KHÔNG GỒM PIN",
      desc: ["Bản ECO | 1.090.000.000 VNĐ", "Bản Plus | 1.270.000.000 VNĐ"],
    },
    {
      title: "GIÁ XE GỒM PIN",
      desc: ["Bản ECO | 1.290.000.000 VNĐ", "Bản Plus | 1.430.000.000 VNĐ"],
    },
  ];

  return (
    <DataCardContext.Provider value={{ DataTextCard, DataTextBackgroud }}>
      {children}
    </DataCardContext.Provider>
  );
};

export const useDataCard = () => useContext(DataCardContext);
export default DataCardProviderVf8;
