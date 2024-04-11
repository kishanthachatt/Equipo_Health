import React from "react";
import cn from "./Screening.module.scss";
import { SCREENING_DATA } from "../../../../Utils/demoData";

export default function Screening() {
  return (
    <div className={cn.screening}>
      <h5 className={cn.title}>Screenings</h5>
      <ul className={cn.list}>
        {SCREENING_DATA.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
