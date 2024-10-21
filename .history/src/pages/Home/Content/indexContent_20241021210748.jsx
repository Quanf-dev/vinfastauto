import React from "react";
import ContentPin from "./ContentPin";
import ContentBaoHanh from "./ContentBaoHanh";
import ContentMore from "./ContentMore";
import ContentNhanThongTin from "./ContentNhanThongTin";
export default function IndexContent() {
  return (
    <div className="h-auto w-full px-10 flex-col flex gap-20">
      <ContentPin />
      <ContentBaoHanh />
      <ContentMore />
      <ContentNhanThongTin />
    </div>
  );
}
