class Styles {
    callbacks = [];
    css = [
        {
            type: "typography",
            selector: ":root",
            properties: {
                fontSize: "62.5%",
            }
        },
        {
            type: "typography",
            selector: "body",
            properties: {
                color: "#333",
                fontSize: "1.6rem",
                fontFamily: "'Open Sans', sans-serif",
                transitionDuration:".3s",
            }
        },
        {
            type: "heading",
            selector: ".heading",
            properties: {
                marginBottom: "1rem",
                transitionDuration:".3s",
            }
        },

        {
            type: "button",
            selector: ".button",
            properties: {
                letterSpacing: ".1rem",
                transitionDuration:".3s",
            }
        }
    ]

    add(style) {
        let index = this.selectorExists(style.selector);

        if (!this.isValid(style))
            return;

        index > -1
            ? (this.css[index].properties = { ...this.css[index].properties, ...style.properties })
            : this.css.push(style);

        this.updateSubscribers();
    }

    isValid(style) {
        return style.selector !== "";
    }

    selectorExists(selector) {
        return this.css.indexOf(this.css.filter(s => s.selector === selector)[0]);
    }

    updateSubscribers() {
        this.callbacks.forEach(cb => cb());
    }

    subscribe(callback) {
        this.callbacks.push(callback);
    }


}
export default new Styles();
