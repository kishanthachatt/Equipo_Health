import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMars,
  faEarth,
  faSuitcase,
  faIdCard,
  faArrowDown19,
  faLocationDot,
  faPhone,
  faPhoneVolume,
  faFileShield,
  faHouseCrack,
} from "@fortawesome/free-solid-svg-icons";

import cn from "./Details.module.scss";

export default function Details() {
  return (
    <div className={cn.detailsWrap}>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faMars} /> Male <b>DOB:</b>
        <span>15-03-1999 (25Yrs)</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faLocationDot} />
        <span>No details provided</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faEarth} />
        <b>Ethnicity:</b> <span>Caucasian (European)</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faPhone} />
        <b>Primary:</b>
        <span>+91 9539717775</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faSuitcase} />
        <b>Occupation:</b> <span>Management</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faPhoneVolume} />
        <b>Emergancy:</b>
        <span>+91 8157040308</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faIdCard} />
        <b>Account #:</b> <span>141521484556</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faFileShield} />
        <b>Policy Number:</b>
        <span>9999999999</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faArrowDown19} />
        <b>MRN:</b> <span>(EBS - demo facility -35)</span>
      </div>
      <div className={cn.detailItem}>
        <FontAwesomeIcon icon={faHouseCrack} />
        <b>Insurer:</b>
        <span>Medicare</span>
      </div>
    </div>
  );
}
