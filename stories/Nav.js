import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const Nav = ({ element }) => (
  <Box pt={2}>
    <Grid container justify={'space-between'}>
      <Grid item>
        <a
          href="js:;"
          data-sb-kind={'intro'}
          data-sb-story={'Table of Content'}
        >
          Table of Content
        </a>
      </Grid>
      <Grid item>{element}</Grid>
    </Grid>
  </Box>
);

Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;
