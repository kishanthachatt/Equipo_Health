import React from "react";
import Wrapper from "../../../../Components/Wrapper";

import cn from "./Allergy.module.scss";

export default function Allergy() {
  return (
    <Wrapper className={cn.wraper}>
      <div className={cn.item}>
        <b className={cn.title}>Allergy:</b>
        <span className={cn.value}>
          Env (Fungicide), Food (Egg), Food (Tree nut)
        </span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Medication:</b>
        <span className={cn.value}>DIA-EZE</span>
      </div>
      <div className={cn.item}>
        <b className={cn.title}>Immunization:</b>
        <span className={cn.value}>1122 (dtp) </span>
      </div>
    </Wrapper>
  );
}
