import React from "react";

import Header from "./Header";
import Details from "./Details";

import cn from "./PersonalDetails.module.scss";

export default function PersonalDetailsCard() {
  return (
    <div className={cn.personalDetailsCard}>
      <Header />
      <Details />
    </div>
  );
}
