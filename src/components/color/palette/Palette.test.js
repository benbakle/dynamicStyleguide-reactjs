import React from 'react';
import { shallow } from 'enzyme';
import Palette from './Palette';

describe("The palette component", () => {
  let _component;

  describe("given no color", () => {
    it("shows a palette with the a light grey", () => {
      _component = shallow(<Palette />);
      expect(_component.find(".color-palette").props().style).toEqual({ backgroundColor: "#efefef" });
    });

    it("has the class 'no-color'", () => {
      expect(_component.find(".no-color").length).toEqual(1);
    });
  });


  describe("given a color", () => {
    it("shows a palette with the given color", () => {
      _component = shallow(<Palette color="red" />);
      expect(_component.find(".color-palette").props().style).toEqual({ backgroundColor: "red" });
    });

    it("does not have the class 'no-color'", () => {
      expect(_component.find(".no-color").length).toEqual(0);
    });
  });

  describe("when the palette is clicked", () => {
    describe("given an onClick callback", () => {
      it("calls the callback", () => {
        let x = 0;
        _component = shallow(<Palette color="red" onClick={() => x = 999} />);
        _component.find(".color-palette").simulate("click");
        expect(x).toEqual(999);
      });
    });
  });
});
