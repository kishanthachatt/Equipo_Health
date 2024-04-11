import React from "react";
import cn from "./CareGapCard.module.scss";
export default function CareGapCard() {
  return (
    <div className={cn.CareGapCard}>
      <div className={cn.title}>Care Gap</div>
      <div className={cn.data}>
        <div>3</div>
      </div>
    </div>
  );
}
