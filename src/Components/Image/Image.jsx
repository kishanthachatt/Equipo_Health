import React from "react";
import PropTypes from "prop-types";

export default function Image(props) {
  return <img src={props.src} className={props.className} />;
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};
