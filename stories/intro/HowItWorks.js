import React from 'react';
import PropTypes from 'prop-types';
import Gist from 'react-gist';
import Nav from '../Nav';

const HowItWorks = ({ gistId }) => (
  <div>
    <Nav />
    <h2>How it works</h2>
    <p>
      Use <code>withStyles</code> from <code>mui-styling</code> and that's it.
    </p>
    <pre>{`import { withStyles } from 'mui-styling';`}</pre>
    <p>
      For those of you who are not familiar with material-ui styling,{' '}
      <a
        href="https://material-ui.com/styles/basics/"
        target="_blank"
        rel={'noopener'}
      >
        Check this out first
      </a>
      .
    </p>
    <p>
      the custom <code>withStyles</code> attaches some properties to the
      Component that will be used when it becomes a nested component.
    </p>
    <Gist id={gistId} file={'custom_withStyles'} />
    <p>Here is how it is used in the Parent</p>
    <Gist id={gistId} file={'getOverrides_usage'} />
    <p>
      <b>At line 30 : </b> since <code>Child</code>was wrapped with custom
      withStyles, it has extra props named <code>getOverrides</code>{' '}
      automatically. This fn accept (css, props) then it will pass to nested
      component until the last one.
    </p>
    <h3>Next step</h3>
    <ul>
      <li>Customization</li>
      <li>Total overriding</li>
      <li>Specific change</li>
      <li>3-level deep component</li>
    </ul>
  </div>
);

HowItWorks.propTypes = {};
HowItWorks.defaultProps = {};

export default HowItWorks;
