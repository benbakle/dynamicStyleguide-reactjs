class Styles {
    callbacks = [];
    
    colors = { light: "#efefef", dark: "#333" };

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
            selector: "body, .body",
            properties: {
                margin: "0",
                color: this.colors.dark,
                fontSize: "1.6rem",
                fontFamily: "'Roboto', sans-serif",
                transitionDuration: ".3s",
            }
        },
        {
            type: "typography",
            selector: "p, .p",
            properties: {
                lineHeight: "1.7em",
                fontSize: "2rem",
            }
        },
        {
            type: "typography",
            selector: "a, .a",
            properties: {
                color: this.colors.dark,
            }
        },

        {
            type: "navigation",
            selector: "nav, .nav",
            properties: {
                backgroundColor: this.colors.dark,
            }
        },
        {
            type: "navigation",
            selector: "nav a, .nav a",
            properties: {
                color:this.colors.light,
            }
        },
        {
            type: "typography",
            selector: "p.dark, .p.dark",
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
            selector: ".heading.dark",
            properties: {
                color: this.colors.light,
                borderColor: this.colors.light
            }
        },
        {
            type: "heading",
            selector: ".heading.heading1",
            properties: {
                fontWeight: "900",
                fontSize: "6rem",
                textTransform: "uppercase",
            }
        },
        {
            type: "heading",
            selector: ".heading.heading2",
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
                boxSizing: "border-box",
                backgroundColor: "transparent",
                color:this.colors.dark,
                border: `.2rem solid ${this.colors.dark}`,
                borderRadius: ".4rem",
                cursor: "pointer",
                marginRight: ".5rem",

            }
        },
        {
            type: "button",
            selector: ".button:hover, .button.hover",
            properties: {
                backgroundColor: this.colors.dark,
                color: this.colors.light,
            }
        },
        {
            type: "button",
            selector: ".button.dark",
            properties: {
                color: this.colors.light,
                borderColor: this.colors.light,
            }
        },
        {
            type: "button",
            selector: ".button.large",
            properties: {
                fontWeight:"200",
                fontSize: "3.4rem",
                border: `.2rem solid ${this.colors.dark}`,
            }
        },
        {
            type: "button",
            selector: ".button.small",
            properties: {
                fontSize: "1.2rem",
            }
        },
        {
            type: "form-control",
            selector: "label, .label",
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
                width:"100%",
                padding:".5rem 1rem",
                boxSizing:"border-box",
                fontSize:"1.4rem",
            }
        },
        {
            type: "custom",
            selector: ".template .swim-lane .left",
            properties: {
                backgroundColor: this.colors.dark,
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
