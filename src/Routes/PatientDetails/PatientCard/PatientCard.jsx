import React from "react";
import ImageUpload from "../../../Components/ImageUpload";
import PersonalDetails from "./PersonalDetails";
import cn from "./PatientCard.module.scss";
import Card from "../../../Components/Card";
import Analytics from "./Analytics";
import Wrapper from "../../../Components/Wrapper";
export default function PatientCard() {
  return (
    <Card className={cn.patientCard}>
      <Wrapper className={cn.upperPart}>
        <ImageUpload />
        <PersonalDetails />
      </Wrapper>
      <Wrapper className={cn.lowerPart}>
        <Analytics />
      </Wrapper>
    </Card>
  );
}
