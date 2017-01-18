import unexpectedReact from 'unexpected-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import unexpected from 'unexpected';
import TestUtils from 'react-addons-test-utils';

const expect = unexpected
  .clone()
  .use(unexpectedReact);

describe('App', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  
  it('renders some code', () => {
  
    const component = TestUtils.renderIntoDocument(<App x="111"/>);
    return expect(component, 'to contain', <code>src/app.js</code>);
  });
  
  
  
});
