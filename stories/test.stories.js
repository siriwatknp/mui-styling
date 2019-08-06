import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

import Root from 'tests/Root';
import Parent, { createStyles as createParentStyles } from 'tests/Parent';
import Child from 'tests/Child';

const useCustomStyles = makeStyles(({ palette }) => ({
  parentRoot: {
    '&:hover': {
      '& $parentLabel, $childDot': {
        color: palette.primary.main,
      },
    },
  },
  parentLabel: {},
  childDot: {},
}));

const useOverrideStyles = makeStyles(theme => ({
  root: {
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.32)',
  },
  parentRoot: {
    ...createParentStyles(theme).parentRoot,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& $parentLabel, $childDot': {
        color: '#fff',
      },
    },
  },
  parentLabel: {},
  childRoot: {
    marginLeft: 'auto',
  },
  childDot: {},
  test: {},
}));

const useChildOverrides = makeStyles(() => ({
  childRoot: {
    display: 'inline-block',
    backgroundColor: '#ff5252',
  },
  childDot: {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const ITEMS = ['Siriwat', 'Kotchakorn', 'Hello World', 'Programming'];

const CustomRoot1 = () => {
  const styles = useCustomStyles();
  return <Root items={ITEMS} classes={styles} />;
};

const OverrideRoot1 = () => {
  const styles = useOverrideStyles();
  return <Root items={ITEMS} overrides={styles} />;
};

const CustomParent = () => {
  const styles = useCustomStyles();
  return <Parent label={'Option'} classes={styles} />;
};

const CustomParent2 = () => {
  const styles = useChildOverrides();
  return <Parent label={'Option'} childOverrides={styles} />;
};

storiesOf('Test', module)
  .addDecorator(storyFn => (
    <Box maxWidth={400} mt={4} mx={'auto'}>
      {storyFn()}
    </Box>
  ))
  .add('Child', () => <Child />)
  .add('Parent', () => <Parent label={'Option'} />)
  .add('CustomParent', () => <CustomParent />)
  .add('CustomParent2', () => <CustomParent2 />)
  .add('Root', () => <Root items={ITEMS} />)
  .add('CustomRoot1', () => <CustomRoot1 />)
  .add('OverrideRoot1', () => <OverrideRoot1 />);
