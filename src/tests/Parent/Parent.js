import React from 'react';
import PropTypes from 'prop-types';
import Child from 'tests/Child';
import { attachStylingParams, withStyles } from 'index';
import createStyles from './Parent.styles';

const options = { name: 'Parent' };

const Parent = withStyles(createStyles, options)(props => {
  const { classes, overrides, label } = props;
  const css = overrides || classes;
  return (
    <div className={css.parentRoot}>
      <p className={css.parentLabel}>{label}</p>
      <Child {...Child.getOverrides(css, props)} />
    </div>
  );
});

Parent.propTypes = {
  label: PropTypes.string,
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
  childOverrides: PropTypes.shape({}),
};
Parent.defaultProps = {
  label: '',
  overrides: undefined,
  classes: undefined,
  childOverrides: undefined,
};

attachStylingParams(Parent, createStyles, options);

export default Parent;
