import React from "react";
import cn from "./Analytics.module.scss";
import Wrapper from "../../../../Components/Wrapper";
import AnalyticsCard from "./AnalyticsCard";
import CareGapCard from "./CareGapCard";
import { ANALYTICS_DATA } from "./Analytics.constant";

export default function Analytics() {
  return (
    <Wrapper className={cn.analytics}>
      <AnalyticsCard data={ANALYTICS_DATA.RISK} />
      <CareGapCard />
      <AnalyticsCard data={ANALYTICS_DATA.ASCVD} />
      <AnalyticsCard data={ANALYTICS_DATA.SDOH} />
    </Wrapper>
  );
}
