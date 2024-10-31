// src/context/DataCardContext.js
import React, { createContext, useContext } from "react";
import {
  AiOutlineThunderbolt,
  BsFuelPump,
  FaRoute,
  GiCarDoor,
  MdOutlineElectricCar,
} from "react-icons/all";

const DataCardContext = createContext();

const DataCardProvider = ({ children }) => {
  const DataCardVf9 = [
    {
      iconName: AiOutlineThunderbolt,
      desc: "Công suất tối đa",
      title: "450 kW - 603 hp",
    },
    {
      iconName: BsFuelPump,
      desc: "Dung tích pin",
      title: "120 kWh",
    },
    {
      iconName: FaRoute,
      desc: "Phạm vi di chuyển",
      title: "600 km",
    },
    {
      iconName: GiCarDoor,
      desc: "Số cửa",
      title: "5 cửa",
    },
    {
      iconName: MdOutlineElectricCar,
      desc: "Loại động cơ",
      title: "Điện hoàn toàn",
    },
  ];

  return (
    <DataCardContext.Provider value={DataCardVf9}>
      {children}
    </DataCardContext.Provider>
  );
};

export const useDataCard = () => useContext(DataCardContext);
export default DataCardProvider;
