class Styles {
    callbacks = [];

    colors = { light: "#fff", mild: "#77839b", dark: "#282c34" };

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
                    fontWeight: "700"
                }
            },
            {
                type: "heading",
                selector: ".heading.heading1",
                properties: {
                    textTransform: "uppercase",
                    letterSpacing: ".3rem",
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
                    textTransform: "uppercase",
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
                    padding: ".5em 1.5em",
                    boxSizing: "border-box",
                    backgroundColor: "$dark",
                    borderStyle: `solid`,
                    borderWidth: ".1rem",
                    borderColor: `$dark`,
                    color: "$light",
                    cursor: "pointer",
                    marginRight: ".5rem",
                }
            },
            {
                type: "button",
                selector: ".button.hover, .button:hover, button.hover, button:hover",
                properties: {
                    backgroundColor: "transparent",
                    color: "$dark",
                }
            },
            {
                type: "button",
                selector: ".button.large",
                properties: {
                    fontWeight: "400 ",
                    fontSize: "2.8rem",
                    borderWidth: `.2rem`,
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
            {
                type: "vanilla",
                selector: ".navigation",
                properties: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "5rem 10rem",
                    boxSizing: "border-box",
                }
            },

            {
                type: "vanilla",
                selector: ".navigation .a, .navigation a",
                properties: {
                    opacity: "1",
                    textTransform: "uppercase",
                    letterSpacing: ".1rem",
                    color: "$light",
                    textShadow: "0 0 .3rem rgba(0,0,0,.75)",
                }
            },

            {
                type: "vanilla",
                selector: ".navigation .a.hover, .navigation .a:hover, .navigation a:hover, .navigation a.hover",
                properties: {
                    textDecoration: "underline",
                }
            },
            {
                type: "vanilla",
                selector: ".video-banner",
                properties: {
                    backgroundColor: "$mild",
                }
            },
            {
                type: "vanilla",
                selector: ".video-banner .content-wrapper",
                properties: {
                    justifyContent: "flex-start",
                    alignItems: "center",
                }
            },

            {
                type: "vanilla",
                selector: ".video-banner .content",
                properties: {
                    maxWidth: "76.8rem",
                    color: "$light",
                    textShadow: "0 0 .3rem rgba(0,0,0,.6)",
                    padding: " 0 10rem",
                    boxSizing: "border-box",
                }
            },

            {
                type: "vanilla",
                selector: ".video-banner .button",
                properties: {
                    color: "light",
                    textShadow: "0 0 .3rem rgba(0,0,0,.6)",
                    borderColor: "$light",
                    backgroundColor: "transparent",
                }
            },

            {
                type: "vanilla",
                selector: ".video-banner .button.hover, .video-banner .button:hover, .video-banner button.hover, .video-banner button:hover",
                properties: {
                    backgroundColor: "$mild",
                    color: "$light",
                    textShadow: "none",
                }
            },

            {
                type: "vanilla",
                selector: ".mask",
                properties: {
                    backgroundColor: "$mild",
                    opacity: ".5",

                }
            },

            {
                type: "vanilla",
                selector: ".swim-lane",
                properties: {
                    display: "flex",
                    padding: "10rem 5rem",
                    boxSizing: "border-box",
                }
            },


            {
                type: "vanilla",
                selector: ".swim-lane .left",
                properties: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "30rem",
                    color: "$mild",
                    width: "40%",
                }
            },

            {
                type: "vanilla",
                selector: ".swim-lane .right",
                properties: {
                    width: "60%",
                }
            },

            {
                type: "vanilla",
                selector: ".swim-lane .heading.heading3",
                properties: {
                    color: "$dark",
                }
            },

            {
                type: "vanilla",
                selector: ".swim-lane .right .content",
                properties: {
                    backgroundColor: "rgba(0,0,0,.5)",
                }
            },

        ]
    }

}
export default new Styles();
