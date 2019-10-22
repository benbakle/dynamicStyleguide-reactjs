class Color {
    callbacks = [];
    colors = { light: "#ffffff", mild: "#77839b", dark: "#282c34" };

    async addColor(color) {
        this.colors[color.name] = color.value;
        this.updateSubscribers();
    }

    async getColors() {
        let colorsArray = [];
        for (var color in this.colors) {
            colorsArray.push({ name: color, value: this.colors[color] });
        }
        return colorsArray;
    }

    updateSubscribers() {
        this.callbacks.forEach(cb => cb());
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }
}
export default new Color();
