# MUI Styling

Utilities for building sustainable React Material-UI components

## The Problem

[Material-UI](https://material-ui.com) is a great react-component library. it has a lot of base components
and styling pattern is all about javascript. Jss means you don't need to write .css, .scss or do the compiling stuffs (it is the part I love the most).
But! there will be the day that you need customized components or very specific ones. Theses are problems that I found.

1. What is the pattern for building a new one.
2. Overriding components is hard
3. How to change some styles in the nested component?
4. If I want to change the default styles into a whole new one, how can I do that?

I spend a lot of time solving these questions, and the solution lies in `mui-styling`

## Benefits

`mui-styling` will help you
unleash the potential of Material-UI without external library (because it is based on `@material-ui/styles`)

- Able to create reusable components
- Follow styling best practice
- Styling with confidence

## Install

```
npm install mui-styling

// or

yarn add mui-styling
```

## API

#### `withStyles(styleCreator: fn, options?: object)`

this is the same [`withStyles`](https://material-ui.com/styles/api/#withstyles-styles-options-higher-order-component) from `@material-ui/styles`. it is exported here for convenient.

```
Example
import React from 'react';
import { withStyles } from 'mui-styling';

const createStyles = () => ({
  childRoot: {},
  childDot: { fontSize: 32, lineHeight: 1 },
});

const Child = withStyles(createStyles, { name: 'Child' })(({ css }) => {
  // withStyles will inject an object(named "css") as props
  // css = { childRoot: '{autogen className}', childDot: '{autogen className}' }
  return (
    <div className={css.childRoot}>
      <span className={css.childDot}>•</span>
    </div>
  );
});

expot default Child;
```

#### `withStyles(styleCreator: fn, options: object)(Component: ReactComponent)`

This fn will attach these properties `stylesAttrs`, `pickClasses` and `getOverrides` to the Component

```
Example;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'index';
import createStyles from './Child.styles';

const Child = withStyles(createStyles, { name: 'Child' })(({ css }) => (
  <div className={css.childRoot}>
    <span className={css.childDot}>text</span>
  </div>
));

Child.propTypes = {
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
};
Child.defaultProps = {
  overrides: undefined,
  classes: undefined,
};

// Now 'Child' have these properties that will be used in other components
// console.log(Child);
// Child.styleAttrs: ['childRoot', 'childDot'];
// Child.pickClasses: fn;
// Child.getOverrides: fn;

export default Child;
```

##### `styleAttrs` is an array of attributes that come from createStyles result (styles anatomy)

##### `pickClasses` is a fn that will pick only attributes that are defined in styleAttrs

##### `getOverrides` is a fn that return overrides props to the component

#### See implementation

#### `mergeStyleCreators(...creators: arrayOf(styleCreator))`

This fn is used when you create complex component that consist of multiple components
it returns a new styleCreator

```
Example
import { mergeStyleCreators } from 'mui-styling';

const createChildStyles = () => ({
  childRoot: {
    color: 'red',
  },
})

const createParentStyles = mergeStyleCreators(
  createChildStyles,
  () => ({
    parentRoot: {
      display: 'flex',
    },
  })
)

```

** The benefit of this fn is that it **warns\*\* you when it find attributes collision.

```
Example of attributes collision
import { mergeStyleCreators } from 'mui-styling';

const createChildStyles = () => ({
  childRoot: {
    color: 'red',
  },
  general: { fontSize: 16 },
})

const createParentStyles = mergeStyleCreators(
  createChildStyles,
  () => ({
    parentRoot: {
      display: 'flex',
    },
    general: { fontSize: 16 },
  })
)

In console
> mui-styling: Styles collision alert! attributes: [general]. This might cause bugs in styling, please check these style attributes
```

## Building Components

this example show how to create nested components with `mui-styling`

##### `Child.styles.js`

```
export default () => ({
  childRoot: {
    borderRadius: 50,
    backgroundColor: '#e7e7e7',
    padding: '4px 12px',
    display: 'inline-block',
    lineHeight: 1,
  },
  childDot: { fontSize: 18, lineHeight: 1.2 },
});
```

##### `Child.js`

```
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'index';
import createStyles from './Child.styles';

const Child = withStyles(createStyles, { name: 'Child' })(({ css }) => (
  <div className={css.childRoot}>
    <span className={css.childDot}>text</span>
  </div>
));

export default Child;

```

<br>

##### `Parent.styles.js`

```
import { mergeStyleCreators } from 'index';
import { createStyles as createChildStyles } from '../Child';

export default mergeStyleCreators(createChildStyles, () => ({
  parentRoot: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 40,
    padding: '0 16px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
  },
  parentLabel: {
    margin: '0 auto 0 0',
  },
}));
```

##### `Parent.js`

```
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'index';
import Child from '../Child';
import createStyles from './Parent.styles';

const options = { name: 'Parent' };

const Parent = withStyles(createStyles, options)(props => {
  const { label, css } = props;
  return (
    <div className={css.parentRoot}>
      <p className={css.parentLabel}>{label}</p>
      <Child {...Child.getOverrides(css, props)} />
    </div>
  );
});

export default Parent;

```

<br>

##### `Root.styles.js`

```
import { mergeStyleCreators } from 'index';
import { createStyles as createParentStyles } from '../Parent';

export default mergeStyleCreators(createParentStyles, () => ({
  root: {},
}));

```

##### `Root.js`

```
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'index';
import Parent from '../Parent';
import createStyles from './Root.styles';

const options = { name: 'Root' };

const Root = withStyles(createStyles, options)(props => {
  const { items, css, childOverrides } = props;
  return (
    <div className={css.root}>
      {items.map(label => (
        <Parent
          key={label}
          label={label}
          childOverrides={childOverrides}
          {...Parent.getOverrides(css, props)}
        />
      ))}
    </div>
  );
});

export default Root;

```

#### `Page.js`

This is where we use the Root component and try to customize it

```
import { makeStyles } from '@material-ui/styles';
import Root from './Root';
import Parent from './Parent';
import createParentStyles from './Parent.styles';

const useCustomStyles = makeStyles(({ palette }) => ({
  // as you can see, we can access every css api of the components
  // there is no magic, I just found the way to make it works
  // my code is easy as it looks, see in my repo
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
        // as you can see, you can override nested component with this approach
        color: '#fff',
      },
    },
  },
  parentLabel: {},
  childRoot: {
    marginLeft: 'auto',
  },
  childDot: {},
  test: {}, // this will not effect styling since it is not related to style attrs defined in Root
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
```

## [See Full Demo](https://siriwatknp.github.io/mui-styling/?path=/story/intro--table-of-content)

## Test

use jest & enzyme

```
yarn test
```

## License

MIT
