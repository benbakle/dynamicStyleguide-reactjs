import Color from './Color';

describe("The color services", () => {
  let x = 0;
  let y = 100;

  it("can be subscribed to", () => {
    let func = () => { x = 1 };
    Color.subscribe(func);
    expect(Color.callbacks[0]).toEqual(func);
  });

  describe("when adding a color", () => {
    beforeEach(() => {
      Color.colors = [{ name: "primary", color: "blue" }]
    });

    describe("given the name already exists", () => {
      it("does not add to the color list", () => {
        let color = { name: "primary", color: "#333" };
        Color.add(color);
        expect(Color.colors.length).toEqual(1);
      });
    });

    describe("given the color already exists", () => {
      it("does not add to the color list", () => {
        let color = { name: "secondary", color: "blue" };
        Color.add(color);
        expect(Color.colors.length).toEqual(1);
      });
    });

    describe("given the name is unique", () => {
      it("adds a color", () => {
        let color = { name: "secondary", color: "#333" };
        Color.add(color);
        expect(Color.colors[1]).toEqual(color);
      });

      it("updates the subscribers", () => {
        let func2 = () => y = 0;
        Color.subscribe(func2);

        Color.add({});

        expect(x).toEqual(1);
        expect(y).toEqual(0);
      });
    });
  });
});
