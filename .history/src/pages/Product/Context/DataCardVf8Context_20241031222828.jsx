// src/context/DataCardContext.js
import React, { createContext, useContext } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsFuelPump } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";

const DataCardContext = createContext();

const DataCardProviderVf8 = ({ children }) => {
  const DataCardVf8 = [
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

  return (
    <DataCardContext.Provider value={DataCardVf8}>
      {children}
    </DataCardContext.Provider>
  );
};

export const useDataCard = () => useContext(DataCardContext);
export default DataCardProviderVf8;
