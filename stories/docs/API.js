import React from 'react';
import PropTypes from 'prop-types';
import Gist from 'react-gist';
import Nav from './Nav';

const API = ({ gistId }) => (
  <div>
    <Nav />
    <h2>API Reference</h2>
    <h6>
      <code>withStyles(styleCreator: fn | object, options: object)</code>
    </h6>
    <ul>
      <li>
        <code>styleCreator</code> a fn | object that define component styles.
      </li>
      <li>
        <code>options</code> an object that follow{' '}
        <a
          href="https://material-ui.com/styles/api/#withstyles-styles-options-higher-order-component"
          target="_blank"
          rel={'noopener'}
        >
          Material-UI structure
        </a>
      </li>
    </ul>
    <p>
      <b>output : </b> Higher-order component
    </p>
    <p>
      <b>usage : </b> use when create new component
    </p>
    <hr />
    <h6>
      <code>getOverrides(css: object, props: object)</code>
    </h6>
    <ul>
      <li>
        <code>css</code> an object of styles (same as classes in official docs)
      </li>
      <li>
        <code>props</code> component's props
      </li>
    </ul>
    <p>
      <b>output : </b> an object that contain "overrides" key-value
      <pre>{`{ overrides: [...classNames that match component's spec] }`}</pre>
    </p>
    <p>
      <b>usage : </b> use this fn when rendered as nested component
    </p>
    <hr />
    <h6>
      <code>mergeStyleCreators(...styleCreators: array)</code>
    </h6>
    <p>
      <b>output : </b> new style creator
      <Gist id={gistId} file={'mergeStyleCreators'} />
      Encouraged to use this fn because it will alert in console if it finds out
      there is style attributes collision between style creators.
    </p>
    <p>
      <b>usage : </b> use when you need to combine multiple style creators in
      parent component.
    </p>
  </div>
);

API.propTypes = {};
API.defaultProps = {};

export default API;
