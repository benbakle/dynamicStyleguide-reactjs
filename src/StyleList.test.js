import React from 'react';
import { shallow } from 'enzyme';
import StyleList from './StyleList';

describe("The style list component", () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<StyleList />);
  });

  it("exists", () => {
    expect(_component).toBeDefined();
  });

});
