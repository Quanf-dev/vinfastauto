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
  import {
    AArrowDown,
    BsBatteryFull,
    FaCarBattery,
    GiElectric,
    MdSpeed,
  } from "react-icons/all";

  const DataCardVf8 = [
    {
      iconName: AiOutlineThunderbolt,
      desc: "Công suất tối đa",
      title: "450 kW - 603 hp",
    },
    {
      iconName: BsBatteryFull,
      desc: "Dung lượng pin",
      title: "90 kWh",
    },
    {
      iconName: FaCarBattery,
      desc: "Loại pin",
      title: "Lithium-ion",
    },
    {
      iconName: GiElectric,
      desc: "Phạm vi di chuyển",
      title: "500 km",
    },
    {
      iconName: MdSpeed,
      desc: "Tốc độ tối đa",
      title: "200 km/h",
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
