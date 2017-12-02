import React from 'react';
import { render } from 'react-dom';

const Test = props => {
  return <h3>Hello</h3>;
};

render(<Test />, document.querySelector('#app'));
