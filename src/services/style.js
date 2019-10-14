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
                    color: "$dark",
                    fontSize: "2rem",
                    fontFamily: "'Roboto', sans-serif",
                    transitionDuration: ".3s",
                }
            },

            {
                type: "typography",
                selector: ".body.dark, body.dark",
                properties: {
                    color: "$light",
                    backgroundColor: "$dark",
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
                    opacity:".6",
                    cursor: "pointer",
                    transitionDuration: ".3s",
                    textDecoration:"none",
                }
            },
            {
                type: "typography",
                selector: ".a.hover, .a:hover, a:hover, a.hover",
                properties: {
                    color: "$dark",
                    opacity:"1",
                    textDecoration:"underline",
                }
            },
            {
                type: "typography",
                selector: ".p.dark, p.dark",
                properties: {
                    color: "$light",
                }
            },
            {
                type: "typography",
                selector: ".icon.dark",
                properties: {
                    color: "$light",
                }
            },

            {
                type: "typography",
                selector: ".update-panel",
                properties: {
                    padding: "3rem",
                    backgroundColor: "$mild",
                    color: "$light",
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
                    color: "$light",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading1",
                properties: {
                    letterSpacing: ".2rem",
                    fontWeight: "100",
                    fontSize: "4.2rem",
                    textTransform: "uppercase",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading2",
                properties: {
                    fontWeight: "700",
                    fontSize: "3.8rem",
                }
            },
            {
                type: "heading",
                selector: ".heading.heading3",
                properties: {
                    fontWeight: "700",
                    fontSize: "2.8rem",
                }
            },

            {
                type: "button",
                selector: ".button",
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

                }
            },
            {
                type: "button",
                selector: ".button.hover, .button:hover",
                properties: {
                    backgroundColor: "$mild",
                    color: "$light",
                }
            },
            {
                type: "button",
                selector: ".button.dark",
                properties: {
                    color: "$light",
                    borderColor: "$light",
                }
            },
            {
                type: "button",
                selector: ".button.large",
                properties: {
                    fontSize: "3.4rem",
                    border: `.1rem solid`,
                }
            },
            {
                type: "button",
                selector: ".button.small",
                properties: {
                    fontWeight: "400",
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
                    border:".1rem solid",
                    borderColor:"$mild",
                    borderRadius: ".3rem",
                    fontSize: "1.4rem",
                }
            },
            {
                type: "vanilla",
                selector: ".vanilla .swim-lane .left",
                properties: {
                    backgroundColor: "$dark",
                }
            },
            {
                type: "vanilla",
                selector: ".vanilla .swim-lane .left:hover",
                properties: {
                    backgroundColor: "rgba(0,0,0,.5)",
                }
            },

        ]
    }

}
export default new Styles();
