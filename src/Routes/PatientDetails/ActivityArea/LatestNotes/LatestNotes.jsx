import React from "react";
import { Carousel } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import cn from "./LatestNotes.module.scss";

export default function LatestNotes() {
  return (
    <div className={cn.latestNotes}>
      <div className={cn.header}>
        <FontAwesomeIcon
          icon={faSuitcase}
          className={cn.suitcase}
          color="#ffffff"
        />
        <span className={cn.title}>Latest Notes</span>
        <FontAwesomeIcon
          icon={faPlusCircle}
          className={cn.plus}
          color="#ffffff"
        />
      </div>
      <div className={cn.detail}>
        <Carousel dots={{ className: cn.dots }}>
          <div>
            <p className={cn.carousalContent}>
              A physician (doctor of medicine or osteopathy) or qualified
              non-physician practitioner (physician assistant, nurse
              practitioner, or certified clinical nurse specialist) can perform
              the IPPE [1].
            </p>
          </div>
          <div>
            <p className={cn.carousalContent}>
              The IPPE covers a review of the patient's medical history,
              including past surgeries, medications, allergies, and
              immunizations. It also includes a physical exam, which may include
              checking the patient's blood pressure, heart rate, lungs, and
              abdomen [1].
            </p>
          </div>
          <div>
            <p className={cn.carousalContent}>
              An IPPE is recommended once a year for beneficiaries who are new
              to Medicare [1].
            </p>
          </div>
          <div>
            <p className={cn.carousalContent}>
              There are several benefits to getting an IPPE. It can help to
              identify potential health problems early on, when they are easier
              to treat. It can also help to establish a baseline for your future
              health care. An IPPE can also help to improve communication
              between you and your doctor [1].
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
