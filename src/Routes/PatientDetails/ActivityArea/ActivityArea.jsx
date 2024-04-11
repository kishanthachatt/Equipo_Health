import React from "react";
import RecentActivity from "./RecentActivity";
import LatestNotes from "./LatestNotes";
import Wrapper from "../../../Components/Wrapper";

import cn from "./ActivityArea.module.scss";

export default function ActivityArea() {
  return (
    <Wrapper className={cn.activityArea}>
      <RecentActivity />
      <LatestNotes />
    </Wrapper>
  );
}
