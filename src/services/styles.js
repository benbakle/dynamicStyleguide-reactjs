class Styles {
    callbacks = [];
    
    colors = { light: "#efefef", primary: "#333" };

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
                color: this.colors.primary,
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
                color: this.colors.light,
            }
        },
        {
            type: "typography",
            selector: ".icon.dark",
            properties: {
                color: this.colors.light,
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
                color: this.colors.light,
                borderColor: this.colors.light
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
                padding: ".25em 1em",
                marginBottom: ".5rem",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                color:this.colors.primary,
                border: `.2rem solid ${this.colors.primary}`,
                borderRadius: ".4rem",
                cursor: "pointer",
            }
        },
        {
            type: "button",
            selector: ".button:hover, .button.hover",
            properties: {
                backgroundColor: this.colors.primary,
                color: this.colors.light,
            }
        },
        {
            type: "button",
            selector: ".dark",
            properties: {
                color: this.colors.light,
                borderColor: this.colors.light,
            }
        },
        {
            type: "button",
            selector: ".large",
            properties: {
                fontSize: "3.4rem",
                border: `.5rem solid ${this.colors.primary}`,
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
            type: "form-control",
            selector: "label",
            properties: {
                display:"inline-block",
                fontSize: "1.4rem",
                fontWeight: "900",
                marginBottom: ".5rem",
                marginTop: ".5rem",
            }
        },
        {
            type: "form-control",
            selector: "input",
            properties: {
                margin:".5rem 1rem",
                fontSize:"1.8rem",
                padding:".5rem 1rem",
            }
        },
        {
            type: "custom",
            selector: ".template .swim-lane .left",
            properties: {
                backgroundColor: this.colors.primary,
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
