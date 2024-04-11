import React from "react";
import Wrapper from "../../../../Components/Wrapper";

import cn from "./Programs.module.scss";

export default function Programs() {
  return (
    <Wrapper className={cn.wraper}>
      <div className={cn.item}>
        <b className={cn.title}>Programs:</b>
        <span className={cn.value}>
          Remote Monitoring, Disease Management program,CCM,AWV
        </span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Service Category:</b>
        <span className={cn.value}>High Acuity, Straight Medicare</span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Messure::</b>
        <span className={cn.value}>
          Adult access to Preventive/ Ambulatory Health service ALL, Adult BMI
          Assesment, Controling high blood presuure with 18-59 years of age{" "}
        </span>
      </div>
    </Wrapper>
  );
}
