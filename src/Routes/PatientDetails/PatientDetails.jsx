import React from "react";
import PatientCard from "./PatientCard";
import ActivityArea from "./ActivityArea";

import cn from "./PatientDetail.module.scss";

export default function PatientDetail() {
  return (
    <div className={cn.patientDetail}>
      <PatientCard />
      <ActivityArea />
    </div>
  );
}
