import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Parent from 'tests/Parent';
import { attachStylingParams } from 'index';
import createStyles from './Root.styles';

const options = { name: 'Root' };

const Root = withStyles(createStyles, options)(props => {
  const { items, classes, overrides, childOverrides } = props;
  const css = overrides || classes;
  return (
    <div className={css.root}>
      {items.map(label => (
        <Parent
          key={label}
          label={label}
          childOverrides={childOverrides}
          {...Parent.getOverrides(css, props)}
        />
      ))}
    </div>
  );
});

Root.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
  parentOverrides: PropTypes.shape({}),
  childOverrides: PropTypes.shape({}),
};
Root.defaultProps = {
  items: [],
  overrides: undefined,
  classes: undefined,
  parentOverrides: undefined,
  childOverrides: undefined,
};
Root.displayName = 'Root';

attachStylingParams(Root, createStyles, options);

export default Root;
