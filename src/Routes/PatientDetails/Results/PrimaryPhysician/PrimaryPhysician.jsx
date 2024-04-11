import React from "react";
import Wrapper from "../../../../Components/Wrapper";

import cn from "./PrimaryPhysician.module.scss";

export default function PrimaryPhysician() {
  return (
    <Wrapper className={cn.wraper}>
      <div className={cn.item}>
        <b className={cn.title}>Primary Physician:</b>
        <span className={cn.value}>TEST ONLY</span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Primary Location:</b>
        <span className={cn.value}>EBS Demo facility - 35</span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Reffered By:</b>
        <span className={cn.value}>Not provided</span>
      </div>
      <div className={`${cn.itemRow} ${cn.marginTop} ${cn.marginBottom}`}>
        <b className={cn.title}>Last Vist:</b>
        <span className={cn.value}>15 -Nov-2019</span>
      </div>
      <div className={`${cn.itemRow} ${cn.marginTop} ${cn.marginBottom}`}>
        <div className={cn.title}>
          <b>No of Vist:</b>
          <span>(in last 12 Months)</span>
        </div>
        <span className={cn.value}>7</span>
      </div>
      <div className={cn.itemRow}>
        <div className={cn.title}>
          <b>No of Hospitalization:</b>
          <span>(in last 3 Months)</span>
        </div>
        <span className={cn.value}>0</span>
      </div>
      <div className={`${cn.redemsions} ${cn.marginTop} ${cn.marginBottom}`}>
        <b className={cn.title}>Readmission:</b>
        <span className={cn.value}>0</span>
      </div>
    </Wrapper>
  );
}
