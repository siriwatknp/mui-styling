import React from 'react';
import PropTypes from 'prop-types';
import Gist from 'react-gist';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Child from 'tests/Child';
import Nav from 'stories/Nav';
import basicOverrideInspect from 'assets/basic_override_inspect.png';

const useOverrideStyles = makeStyles(() => ({
  childRoot: {
    borderRadius: 50,
    padding: '4px 12px',
    display: 'inline-block',
    lineHeight: 1,
    backgroundColor: '#ff5252',
  },
  childDot: {
    color: '#fff',
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.2,
  },
}));

const centerProps = {
  minHeight: 240,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bgcolor: '#f7f7f7',
};

const BasicOverrides = ({ gistId }) => {
  const styles = useOverrideStyles();
  return (
    <div>
      <Nav />
      <h2>Basic Overrides</h2>
      <p>
        What if I don't want to use the default styles, instead I want to use
        all of the new one that I created ?. This is why <code>withStyles</code>{' '}
        from mui-styling intended to solve the question.
      </p>
      <p>
        Let's look at the{' '}
        <a
          href="js:;"
          data-sb-kind={'styling'}
          data-sb-story={'basic-customization'}
        >
          previous example code
        </a>
      </p>
      <Gist id={gistId} file={'Child.jsx'} />
      <p>
        As you can see, withStyles inject another property named{' '}
        <code>css</code> to the component. Basically, it is the same as classes
        from official withStyles. The differences are.
      </p>
      <ul>
        <li>
          <code>css</code> is based on classes or overrides that you specify on
          the outside.
        </li>
        <li>
          <code>css</code> is filtered based on your attributes in style
          creator.
        </li>
      </ul>
      <p>
        Then, this is what happens when you specify <code>overrides</code> as
        props to Child
      </p>
      <Gist id={gistId} file={'OverrideChild.jsx'} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box {...centerProps}>
            <Child overrides={styles} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={basicOverrideInspect} />
          <p>
            there is only 1 className appear in the console (makeStyles-...).
            The default className (Child-...) is gone due to overrides.
          </p>
        </Grid>
      </Grid>
      <h4>Summary</h4>
      <p>
        After create new component with <code>withStyles</code> from{' '}
        <code>mui-styling</code>, 2 ways to customize the styles.
      </p>
      <ul>
        <li>
          pass <code>classes</code> to the component if you want to add extra
          styles (the same css key will override the default)
        </li>
        <li>
          pass <code>overrides</code> to the component if you want full control
          of the styles. This is useful when you want to reuse the component
          logic but with whole new looks.
        </li>
      </ul>
      <h3>
        <a
          href="js:;"
          data-sb-kind={'Styling'}
          data-sb-story={'nested-component'}
        >
          Next: Nested Component
        </a>
      </h3>
    </div>
  );
};

BasicOverrides.propTypes = {};
BasicOverrides.defaultProps = {};

export default BasicOverrides;
