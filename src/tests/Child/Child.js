import React from 'react';
import PropTypes from 'prop-types';
import { attachStylingParams, withStyles } from 'index';
import createStyles from './Child.styles';

const options = { name: 'Child' };

const Child = withStyles(createStyles, options)(({ classes, overrides }) => {
  const css = overrides || classes;
  return (
    <div className={css.childRoot}>
      <span className={css.childDot}>•</span>
    </div>
  );
});

Child.propTypes = {
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
};
Child.defaultProps = {
  overrides: undefined,
  classes: undefined,
};

attachStylingParams(Child, createStyles, options);

export default Child;
