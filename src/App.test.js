import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe("The dynamic style guide app", () => {
  let _component;
  
  beforeEach(() => {
    _component = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("has a style list component", ()=>{
    expect(_component.find("StyleList").length).toEqual(1);
  });
});
