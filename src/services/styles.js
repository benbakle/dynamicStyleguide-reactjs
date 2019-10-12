class Styles {
    callbacks = [];

    lightColor = "#efefef";
    primaryColor = "#333";
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
                margin: "0",
                color: this.primaryColor,
                fontSize: "1.6rem",
                fontFamily: "'Roboto', sans-serif",
                transitionDuration: ".3s",
            }
        },
        {
            type: "typography",
            selector: "p",
            properties: {
                lineHeight: "1.7em",
                fontSize: "2rem",
            }
        },
        {
            type: "typography",
            selector: "p.dark",
            properties: {
                color: this.lightColor,
            }
        },
        {
            type: "typography",
            selector: ".icon.dark",
            properties: {
                color: this.lightColor,
            }
        },
        {
            type: "heading",
            selector: ".heading",
            properties: {
                marginBottom: "1rem",
                transitionDuration: ".3s",
            }
        },
        {
            type: "heading",
            selector: ".dark",
            properties: {
                color: this.lightColor,
                borderColor: this.lightColor
            }
        },
        {
            type: "heading",
            selector: ".heading1",
            properties: {
                fontWeight: "900",
                fontSize: "6rem",
                textTransform: "uppercase",
            }
        },
        {
            type: "heading",
            selector: ".heading2",
            properties: {
                fontWeight: "700",
                fontSize: "4.2rem",
            }
        },
        {
            type: "button",
            selector: ".button",
            properties: {
                letterSpacing: ".1rem",
                transitionDuration: ".3s",
                fontWeight: "900",
                fontSize: "2rem",
                padding: ".5rem 2rem",
                marginBottom: ".5rem",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                border: `.2rem solid ${this.primaryColor}`,
                borderRadius: ".4rem",
                cursor: "pointer",
            }
        },
        {
            type: "button",
            selector: ".button:hover",
            properties: {
                backgroundColor: this.primaryColor,
                color: this.lightColor,
            }
        },
        {
            type: "button",
            selector: ".dark",
            properties: {
                color: this.lightColor,
                borderColor: this.lightColor,
            }
        },
        {
            type: "button",
            selector: ".button1",
            properties: {
                fontSize: "3.4rem",
                border: `.5rem solid ${this.primaryColor}`,
            }
        },

        {
            type: "button",
            selector: ".small",
            properties: {
                fontSize: "1.6rem",
            }
        },
        {
            type: "custom",
            selector: ".template .swim-lane .left",
            properties: {
                backgroundColor: this.primaryColor,
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
