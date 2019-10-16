class Styles {
    callbacks = [];

    colors = { light: "#efefef", mild: "#77839b", dark: "#282c34" };

    css = this.css();

    add(style) {
        let index = this.selectorExists(style.selector);
        if (!style.type)
            style.type = "unassigned"

        if (!this.isValid(style))
            return;

        index > -1
            ? (this.css[index].properties = { ...this.css[index].properties, ...style.properties })
            : this.css.push(style);

        this.updateSubscribers();
    }

    addColor(color) {
        this.colors[color.name] = color.value;
        this.updateSubscribers();
    }

    types() {
        return [...new Set(this.css.map(x => x.type))];
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

    css() {
        return [
            {
                type: "typography",
                selector: ":root",
                properties: {
                    fontSize: "62.5%",
                }
            },
            {
                type: "typography",
                selector: ".body, body",
                properties: {
                    margin: "0",
                    fontSize: "2rem",
                    fontFamily: "'Roboto', sans-serif",
                    transitionDuration: ".3s",
                    backgroundColor: "$light",
                    color: "$dark",
                }
            },
            {
                type: "heading",
                selector: ".heading",
                properties: {
                    marginBottom: ".25em",
                    lineHeight: "1.2",
                    transitionDuration: ".3s",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading1",
                properties: {
                    textTransform: "uppercase",
                    fontSize: "4rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading2",
                properties: {
                    fontSize: "3.2rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading3",
                properties: {
                    fontSize: "2.8rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading4",
                properties: {
                    fontSize: "2.4rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading5",
                properties: {
                    fontSize: "2rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading6",
                properties: {
                    fontSize: "1.6rem",
                }
            },

            {
                type: "typography",
                selector: ".p, p",
                properties: {
                    lineHeight: "1.7em",
                }
            },
            {
                type: "typography",
                selector: ".a, a",
                properties: {
                    color: "inherit",
                    opacity: ".5",
                    cursor: "pointer",
                    transitionDuration: ".3s",
                    textDecoration: "none",
                }
            },
            {
                type: "typography",
                selector: ".a.hover, .a:hover, a.hover, a:hover",
                properties: {
                    color: "$dark",
                    opacity: "1",
                }
            },

            {
                type: "button",
                selector: ".button, button",
                properties: {
                    display: "inline-block",
                    fontFamily: "'Roboto', sans-serif",
                    letterSpacing: ".1rem",
                    transitionDuration: ".3s",
                    fontWeight: "300",
                    fontSize: "2rem",
                    padding: "1rem",
                    boxSizing: "border-box",
                    backgroundColor: "transparent",
                    color: "inherit",
                    border: `.1rem solid`,
                    borderColor: `$mild`,
                    borderRadius: ".3rem",
                    cursor: "pointer",
                    marginRight: ".5rem",
                    opacity: ".7",
                }
            },
            {
                type: "button",
                selector: ".button.hover, .button:hover, button.hover, button:hover",
                properties: {
                    opacity: "1",
                    backgroundColor: "$mild",
                    borderColor: "$mild",
                    color: "$light",
                }
            },
            {
                type: "button",
                selector: ".button.large",
                properties: {
                    fontSize: "3.4rem",
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
                selector: ".label, label",
                properties: {
                    display: "inline-block",
                    fontSize: "1.4rem",
                    fontWeight: "900",
                    marginBottom: ".5rem",
                    marginTop: ".5rem",
                    transitionDuration: ".3s",
                }
            },
            {
                type: "form-control",
                selector: ".input, input",
                properties: {
                    display: "block",
                    width: "100%",
                    padding: "1rem",
                    boxSizing: "border-box",
                    border: ".1rem solid",
                    borderColor: "$mild",
                    borderRadius: ".3rem",
                    fontSize: "1.4rem",
                    transitionDuration: ".3s",
                }
            },
            // {
            //     type: "vanilla",
            //     selector: ".vanilla .swim-lane .left",
            //     properties: {
            //         backgroundColor: "$dark",
            //     }
            // },
            // {
            //     type: "vanilla",
            //     selector: ".vanilla .swim-lane .left:hover",
            //     properties: {
            //         backgroundColor: "rgba(0,0,0,.5)",
            //     }
            // },

        ]
    }

}
export default new Styles();
