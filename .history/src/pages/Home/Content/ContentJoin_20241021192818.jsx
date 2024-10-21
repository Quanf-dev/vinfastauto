import { Button } from "@/components/ui/button";
import React from "react";

export default function ContentJoin() {
  return (
    <div className="relative">
      <h1>Người tiên phong, tri ân người tiên phong</h1>
      <p>
        Ưu đãi dành cho các khách hàng đồng hành khai phá kỷ nguyên xe điện toàn
        cầu
      </p>
      <Button>
        <span>Đặt cọc ngay</span>
      </Button>
      <img
        className="absolute top-0 z-0"
        src="images\Home\Section\Content\technology.jpg.png"
        alt=""
      />
    </div>
  );
}
