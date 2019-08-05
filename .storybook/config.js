import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import * as Core from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Typography from 'typography';
import fairyGates from 'typography-theme-fairy-gates';

import './global.css';

const typography = new Typography(fairyGates);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1890ff',
    },
  },
});
const ThemeDecorator = storyFn => (
  <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  addDecorator(ThemeDecorator);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
