import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

export default function Announcement(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <FontAwesomeIcon icon={faBullhorn} />
      </div>
    </React.Fragment>
  );
}

Announcement.protoType = {
  className: PropTypes.string,
};
