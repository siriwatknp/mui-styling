import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Gist from 'react-gist';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Child from 'tests/Child';

import basicCustomInspect from '../../assets/basic_custom_inspect.png';

const useChildStyles = makeStyles(() => ({
  childRoot: {
    backgroundColor: '#ff5252',
  },
  childDot: {
    color: '#fff',
    fontWeight: 500,
  },
}));

const centerProps = {
  minHeight: 240,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: '#f7f7f7',
};

const BasicCustomization = ({ gistId }) => {
  const childStyles = useChildStyles();
  return (
    <div>
      <h2>Basic Customization</h2>
      <p>
        In this page, we will learn how to correctly customize the component
        both in isolated and nested case.
      </p>
      <p>
        Let's say we have this very basic component, and we want to customize it
        to become the right side
      </p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box {...centerProps}>
            <Child />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box {...centerProps}>
            <Child classes={childStyles} />
          </Box>
        </Grid>
      </Grid>
      <br />
      <p>Firstly, let's look at the code of the component on the left</p>
      <code>Child.styles.js</code>
      <Gist id={gistId} file={'Child.styles.js'} />
      <code>Child.js</code>
      <Gist id={gistId} file={'Child.jsx'} />
      <p>Simple as it is. There are 2 ways to do this</p>
      <ol>
        <li>Add extra styles to the component</li>
        <li>Neglect the default styles and use the whole new one</li>
      </ol>
      <p>
        Because on the right side has not changed much, we will use the first
        way of customization. We will use <code>makeStyles</code> from
        @material-ui/styles to create a react hook and then use that hook inside
        the component to create styles. Finally, pass that styles as{' '}
        <code>classes</code> props to Child.
      </p>
      <Gist id={gistId} file={'CustomChild.jsx'} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box {...centerProps}>
            <Child classes={childStyles} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={basicCustomInspect} />
          <p>
            there are 2 classes appear in the console. one from the default
            (Child-...) and one from makeStyles-...
          </p>
        </Grid>
      </Grid>
      <br />
      <blockquote>
        Congratulations! you just completed the basic of customization in
        Material-UI
      </blockquote>
      <h3>Next</h3>
      <a href="js:;" data-sb-kind={'Styling'} data-sb-story={'basic-overrides'}>
        Basic Overrides (2nd way of customization)
      </a>
    </div>
  );
};

BasicCustomization.propTypes = {};
BasicCustomization.defaultProps = {};

export default BasicCustomization;
