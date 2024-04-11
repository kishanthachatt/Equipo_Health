import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Settings(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <FontAwesomeIcon icon={faGear} />
      </div>
    </React.Fragment>
  );
}

Settings.protoType = {
  className: PropTypes.string,
};
