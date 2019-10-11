class Buttons {
    callbacks = [];
    css = [
      
    ]

    add(style) {
        this.css.push(style);
        this.updateSubscribers();
    }

    updateSubscribers() {
        this.callbacks.forEach(cb => cb());
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }


}
export default new Buttons();
