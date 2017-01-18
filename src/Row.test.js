import unexpectedReact from 'unexpected-react';
import React, {Component } from 'react';
import Row from './Row';
import Label from './Label'

import unexpected from 'unexpected';
import TestUtils from 'react-addons-test-utils';

const expect = unexpected
  .clone()
  .use(unexpectedReact);

describe('Row', function () {
  let renderer;
  beforeEach(() => {
    renderer = TestUtils.createRenderer();
  });
  
  it('renders 3 cells', function () {
    
    renderer.render(<Row cellCount={3} />);
    expect(renderer, 'to contain', <div><Label /><Label /><Label /></div>)
  });
  
  it('turns a span to a input when clicked', function () {
  
    const component = TestUtils.renderIntoDocument(<Row cellCount={3} />);
    expect(component,
      'with event', 'click', 'on', <Label index={2}><span eventTarget /></Label>,
      'to contain', <input value="Label 2" />);
  });
  it('turns a span to a input when clicked', function () {
    
    const component = TestUtils.renderIntoDocument(<Row cellCount={3} />);
    expect(component,
      'with event', 'click', 'on', <Label index={1}><span eventTarget /></Label>,
      'with event', 'keyDown', { keyCode: 9 }, 'on', <input />,
      'to contain', <input value="Label 2" />);
  });
})
