import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";

export default function Files(props) {
  return (
    <React.Fragment>
      <div className={props.className}>
        <FontAwesomeIcon icon={faFile} />
      </div>
    </React.Fragment>
  );
}

Files.protoType = {
  className: PropTypes.string,
};
