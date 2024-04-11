import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import cn from "./RecentActivity.module.scss";

export default function RecentActivity() {
  return (
    <div className={cn.recentActivity}>
      <div className={cn.header}>
        <FontAwesomeIcon
          icon={faSuitcase}
          className={cn.suitcase}
          color="#ffffff"
        />
        <span className={cn.title}>Recent Activity</span>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={cn.plus}
          color="#ffffff"
        />
      </div>
      <div className={cn.detail}>Follow up</div>
    </div>
  );
}
