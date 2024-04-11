import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

import cn from "./Notification.module.scss";

export default function Notification(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <FontAwesomeIcon icon={faBell} />
      </div>
    </React.Fragment>
  );
}

Notification.protoType = {
  className: PropTypes.string,
};
