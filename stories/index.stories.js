import React from 'react';
import { storiesOf } from '@storybook/react';
import { withLinks } from '@storybook/addon-links';
import Box from '@material-ui/core/Box';
import TOC from './intro/TOC';
import Concept from './intro/Concept';
import HowItWorks from './intro/HowItWorks';
import API from './intro/API';

import BasicCustomization from './styling/BasicCustomization';
import BasicOverrides from './styling/BasicOverrides';
import NestedComponent from './styling/NestedComponent';
import CustomizeNestedComponent from './styling/CustomizeNestedComponent';

const gistId = 'ab2b1be16712a1bee0215964e0be267a';

storiesOf('Intro', module)
  .addDecorator(withLinks)
  .addDecorator(fn => (
    <Box bgcolor={'common.white'} minHeight={'100vh'}>
      <Box maxWidth={732} mx={'auto'} pt={'1px'} px={2}>
        {fn()}
      </Box>
      <Box height={300} />
    </Box>
  ))
  .add('Table of Content', () => <TOC />)
  .add('Concept', () => <Concept gistId={gistId} />)
  .add('How it works', () => <HowItWorks gistId={gistId} />);

storiesOf('Styling', module)
  .addDecorator(withLinks)
  .addDecorator(fn => (
    <Box bgcolor={'common.white'} minHeight={'100vh'}>
      <Box maxWidth={732} mx={'auto'} pt={'1px'} px={2}>
        {fn()}
      </Box>
      <Box height={300} />
    </Box>
  ))
  .add('Basic customization', () => <BasicCustomization gistId={gistId} />)
  .add('Basic overrides', () => <BasicOverrides gistId={gistId} />)
  .add('Nested component', () => <NestedComponent gistId={gistId} />)
  .add('Customize Nested component', () => (
    <CustomizeNestedComponent gistId={gistId} />
  ));

storiesOf('API', module)
  .addDecorator(withLinks)
  .addDecorator(fn => (
    <Box bgcolor={'common.white'} minHeight={'100vh'}>
      <Box maxWidth={732} mx={'auto'} pt={'1px'} px={2}>
        {fn()}
      </Box>
      <Box height={300} />
    </Box>
  ))
  .add('Reference', () => <API gistId={gistId} />);
