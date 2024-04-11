import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from './PageContent.module.scss';
export default class PageContent extends Component {
  render() {
    return (
      <section className={cn.pageContent}>{this.props.children}</section>
    );
  }
}
PageContent.defaultValue = {
  childern: null,
};
PageContent.propTypes = {
  /**
   * Children
   */
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
  ]),
};
