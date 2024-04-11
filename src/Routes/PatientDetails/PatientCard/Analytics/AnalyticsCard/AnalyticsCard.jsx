import React from "react";
import cn from "./AnalyticsCard.module.scss";

export default function AnalyticsCard(props) {
  return (
    <div className={cn.analytics}>
      <div className={cn.title}>{props.data.title}</div>
      <div className={cn.data}>
        <span>{props.data.data1Title}:</span>
        <b>{props.data.data1Value}</b>
      </div>
      <div className={cn.data}>
        <span>{props.data.data2Title}:</span>
        <b>{props.data.data2Value}</b>
      </div>
    </div>
  );
}
