import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Core from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const baseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1890ff',
    },
  },
});
const ThemeDecorator = storyFn => (
  <>
    <CssBaseline />
    <ThemeProvider theme={baseTheme}>{storyFn()}</ThemeProvider>
  </>
);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  addDecorator(ThemeDecorator);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
