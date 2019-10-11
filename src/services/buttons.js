class buttons {
    callbacks = [];
    css = [
        {
            selector: ".button",
            properties: {
                fontFamily: "'Open Sans', sans-serif",
                letterSpacing:".1rem"
            }
        }
    ]

    add(style) {
        if(!style.selector)
            return;
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
export default new buttons();
