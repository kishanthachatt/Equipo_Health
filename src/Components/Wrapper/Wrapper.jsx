import React from "react";
import PropTypes from "prop-types";

export default function Wrapper(props) {
  return <div className={props.className}>{props.children}</div>;
}

Wrapper.propTypes = {
  /**
   * child components to render in PageWrapper
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.any,
  ]),
  className: PropTypes.string,
};
