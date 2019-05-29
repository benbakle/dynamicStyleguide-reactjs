import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from './Display';

describe("The color display component", () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<ColorDisplay name="My Name" color="red" />);
  });

  it("exists", () => {
    expect(_component).toBeDefined();
  });

  

});
