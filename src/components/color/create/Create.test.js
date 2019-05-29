import React from 'react';
import { shallow } from 'enzyme';
import ColorCreate from './Create';
import Color from '../../../services/Color';

describe("The color create component", () => {
  let _component;

  beforeEach(() => {
    spyOn(Color, "add").and.stub();
    _component = shallow(<ColorCreate />);
  });

  it("has a name input", () => {
    expect(_component.find("input[name='name']").length).toEqual(1);
  });

  describe("when the name input changes", () => {
    it("updates the state", () => {
      simulateChangeOn("name", "any ol name");
      expect(_component.state().name).toEqual("any ol name");
    });
  });

  it("has a color picker", () => {
    _component.setState({pickerIsVisible:true});
    expect(_component.find("SketchPicker")).toEqual(1);
  });

  it("has an add color button", () => {
    expect(_component.find(".color-add").length).toEqual(1);
  });

  describe("when the add color button is clicked", () => {
    describe("given the name input is not empty", () => {
      it("does not call the add color service", () => {
        _component.setState({ name: "" });
        clickAddButton();
        expect(Color.add).not.toHaveBeenCalled();
      });
    });

    describe("given the name input is not empty", () => {
      it("calls the add color service", () => {
        _component.setState({ name: "notNothin'" });
        clickAddButton();
        expect(Color.add).toHaveBeenCalled();
      });

    });
  });

  function clickAddButton(){
    _component.find(".color-add").simulate("click");
  }

  function simulateChangeOn(name, value) {
    _component.find(`input[name='${name}']`).simulate("change", { target: { value: value, name: name } });
  }
});
