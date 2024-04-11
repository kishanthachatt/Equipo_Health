import React from "react";

import PrimaryPhysician from "./PrimaryPhysician";
import Wrapper from "../../../Components/Wrapper";
import Condition from "./Condition";
import Allergy from "./Allergy";
import Programs from "./Programs";

import cn from "./Results.module.scss";

export default function Results() {
  return (
    <Wrapper className={cn.results}>
      <PrimaryPhysician />
      <Condition />
      <Allergy />
      <Programs />
    </Wrapper>
  );
}
