import React from "react";
import Wrapper from "../../Components/Wrapper";
import PatientCard from "./PatientCard";
import ActivityArea from "./ActivityArea";
import Results from "./Results";

import cn from "./PatientDetail.module.scss";

export default function PatientDetail() {
  return (
    <Wrapper className={cn.patientDetail}>
      <Wrapper className={cn.personal}>
        <PatientCard />
        <ActivityArea />
      </Wrapper>
      <Wrapper>
        <Results />
      </Wrapper>
    </Wrapper>
  );
}
