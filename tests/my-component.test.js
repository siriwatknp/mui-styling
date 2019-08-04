import React from 'react';
import ReactDOM from 'react-dom';
import { MyComponent } from '../src/index.js';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
})
