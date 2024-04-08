import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import cn from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={cn.profileWrapper}>
      <div className={cn.profileImage}>K</div>
      <FontAwesomeIcon icon={faChevronDown} />
    </div>
  );
}
