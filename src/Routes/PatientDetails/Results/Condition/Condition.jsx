import React from "react";
import Wrapper from "../../../../Components/Wrapper";

import cn from "./Condition.module.scss";

export default function Condition() {
  return (
    <Wrapper className={cn.wraper}>
      <div className={cn.item}>
        <b className={cn.title}>Condition:</b>
        <span className={cn.value}>
          Heat failure, Hypertension, Ischemic Heat Disease
        </span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Habit:</b>
        <span className={cn.value}>Smoking</span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Vitals:</b>
        <span className={cn.value}>
          BMI: NA, Systolic/Diastolic: 127/84,Glucose: NA, O2 Saturation: NA
        </span>
      </div>
      <div className={cn.lab}>
        <b className={cn.title}>Lab:</b>
        <div className={cn.data}>
          <div>HDL : NA</div>
          <div>LDL : NA</div>
          <div>HBa1c : NA</div>
        </div>
      </div>
    </Wrapper>
  );
}
