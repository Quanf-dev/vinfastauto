import React from "react";
import Overview from "./Overview";
import Equip from "./Equip";
import Information from "./Information";

export default function Contentmain() {
  return (
    <div>
      <Overview />
      <Information />
      <Equip />
      <Overview />
    </div>
  );
}
