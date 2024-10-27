import React from "react";
import ContentPin from "./ContentPin";
import ContentBaoHanh from "./ContentBaoHanh";
export default function IndexContent() {
  return (
    <div className="h-[1800px] w-full px-10 flex-col gap-10">
      <ContentPin />
      <ContentBaoHanh />
    </div>
  );
}