import React from 'react';
import PropTypes from 'prop-types';
import Gist from 'react-gist';
import concept from '../../assets/step_5.jpg';
import Nav from '../Nav';

const Concept = ({ gistId }) => (
  <div>
    <Nav />
    <h2>Concept</h2>
    <p>
      We will focus on the <code>Child</code> perspective. There are 2 cases:
    </p>
    <ul>
      <li>
        <b>Isolated Case</b> the component can be rendered anywhere with its
        default styles and can be overrided by external styles
      </li>
      <li>
        <b>Nested Case</b> the component is rendered as a nested one in another
        component. For example,
        <Gist id={gistId} file={'concept_nested_case.jsx'} />
        <img src={concept} />
        In this case, the same styles that <code>Child</code> receive in
        isolated case will be merged to the parent styles which will be transfer
        to <code>Child</code>. (Because we don't want duplication to happen,{' '}
        <code>Child</code> must neglect default styles and receive only styles
        that passed from parent)
      </li>
    </ul>
    <p>
      This way is proved to be efficient because it allows root component to
      reference nested attribute styles in deep children and customize it.
    </p>
    <p>
      <a href="">Read Full Article</a> about the concept & design
    </p>
    <h3>
      <a href="js:;" data-sb-kind={'intro'} data-sb-story={'how-it-works'}>
        Next: How it works
      </a>
    </h3>
  </div>
);

Concept.propTypes = {};
Concept.defaultProps = {};

export default Concept;
