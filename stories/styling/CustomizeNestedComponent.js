import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'stories/Nav';
import Gist from 'react-gist';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import customNested1 from 'assets/customNested-1.png';
import customNested2 from 'assets/customNested-2.png';
import overrideNestedChild1 from 'assets/overrideNestedChild-1.png';
import overrideNestedChild2 from 'assets/overrideNestedChild-2.png';

const CustomizeNestedComponent = ({ gistId }) => (
  <div>
    <Nav />
    <h2>Customize Nested Component</h2>
    <p>
      We will use previous components (Parent & Child) in this demonstration
    </p>
    <h4>General</h4>
    <p>
      You can treat Parent as it is a basic component. look at its styles
      anatomy
    </p>
    <ul>
      <li>parentRoot</li>
      <li>parentLabel</li>
      <li>childRoot</li>
      <li>childDot</li>
    </ul>
    <Gist id={gistId} file={'CustomParent.jsx'} />
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img src={customNested1} />
      </Grid>
      <Grid item xs={6}>
        <img src={customNested2} />
      </Grid>
    </Grid>
    <Typography variant={'caption'}>
      This picture shows the result of passing classes as props to Parent
    </Typography>
    <br />
    <br />
    <p>
      As you can see, we can still use the power of mui-styling. Let me rephrase
      this.
    </p>
    <ul>
      <li>
        pass <code>classes</code> to the component if you want to add extra
        styles (the same css key will override the default)
      </li>
      <li>
        pass <code>overrides</code> to the component if you want full control of
        the styles. This is useful when you want to reuse the component logic
        but with whole new looks.
      </li>
    </ul>
    <h4>Override only child</h4>
    <p>
      What if I want to reset only child's default styles and inject the new one
      ? Obviously, you cannot pass <code>overrides</code> directly to parent
      because it will also remove parent's default styles.
    </p>
    <p>This is the solution.</p>
    <p>
      When you create component with custom <code>withStyles</code> from
      mui-styling, the component will automatically listen to a special prop
      named "component overrides". Ex. if you define the name as "Child", this
      special prop will be "childOverrides"
    </p>
    <pre>
      {`const Whatever = withStyles(styles, { name: "Child" })(...Component)`}
    </pre>
    <p>
      Pass this props to Parent and then you can fully control the child inside.
    </p>
    <Gist id={gistId} file={'OverrideNestedChild.jsx'} />
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img src={overrideNestedChild1} />
      </Grid>
      <Grid item xs={6}>
        <img src={overrideNestedChild2} />
      </Grid>
    </Grid>
    <p>
      Look at child on the right, now it use new styles (makeStyles-...) with
      out using the default one
    </p>
    <h2>Congratulations!</h2>
    <h3>
      You just completed{' '}
      <a
        target={'_blank'}
        rel={'noopener'}
        href={'https://github.com/siriwatknp/mui-styling'}
      >
        mui-styling
      </a>
    </h3>
    <p>Tweet me @siriwatknp</p>
    <h3>
      <a
        href="js:;"
        data-sb-kind={'api'}
        data-sb-story={'reference'}
      >
        Next: API Reference
      </a>
    </h3>
  </div>
);

CustomizeNestedComponent.propTypes = {};
CustomizeNestedComponent.defaultProps = {};

export default CustomizeNestedComponent;
