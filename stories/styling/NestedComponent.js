import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'stories/Nav';
import Gist from 'react-gist';
import Grid from '@material-ui/core/Grid';

import step3 from 'assets/step_3.jpg';
import step32 from 'assets/step_3.2.jpg';
import attempt21 from 'assets/attempt2-1.png';
import attempt22 from 'assets/attempt2-2.png';
import attempt3 from 'assets/attempt3.png';

const NestedComponent = ({ gistId }) => (
  <div>
    <Nav />
    <h2>Nested Component</h2>
    <p>
      Your component will get bigger some day. This is how you create nested
      component with <code>mui-styling</code>
    </p>
    <p>
      Firstly, I will use <code>Child</code> and <code>Parent</code> component
      to demonstrate throughout this page. Let's create both of the components.
    </p>
    <h4>Attempt #1</h4>
    <code>Parent.styles.js</code>
    <Gist id={gistId} file={'DefaultParent.styles.js'} />
    <code>Parent.js</code>
    <Gist id={gistId} file={'DefaultParent.jsx'} />
    <p>Maybe an image can explain clearer than code</p>
    <img src={step3} />
    <p>
      As you can see, right now both component listen to individual styles. My
      idea is to combine those styles into one.
    </p>
    <h4>Attempt #2</h4>
    <img src={step32} />
    <p>
      combine parent + child styles and inject from the top (parent) pass it to
      child. It worked! but className in child is doubled. If it was 3-level
      component, child's className would have 3 similar css and so on. We're
      almost there.
    </p>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <img src={attempt21} />
        <p>Do you spot the duplicate of css ?</p>
      </Grid>
      <Grid item xs={6}>
        <img src={attempt22} />
      </Grid>
    </Grid>
    <h4>Attempt #3 (remove duplicate css from child)</h4>
    <p>
      We will use <code>getOverrides</code> (a property attached to component by
      custom <code>withStyles</code> to properly inject props into Child.
    </p>
    <code>Parent.js</code>
    <Gist id={gistId} file={'Parent.jsx'} />
    <p>This is what we got in console.</p>
    <img src={attempt3} />
    <h4>Gotcha! this is how you build nested components.</h4>
  </div>
);

NestedComponent.propTypes = {};
NestedComponent.defaultProps = {};

export default NestedComponent;
