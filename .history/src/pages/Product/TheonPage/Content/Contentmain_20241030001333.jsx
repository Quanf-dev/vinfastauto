import React from "react";
import Overview from "./Overview";
import Equip from "./Equip";
import Information from "./Information";
import General from "./General";

export default function Contentmain() {
  return (
    <div>
      <Overview />
      <Information />
      <Equip />
      <General />
    </div>
  );
}
