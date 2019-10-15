class StyleGuideCSS {

    darkest = "#111";

    label = {
        fontFamily: "'Roboto', sans-serif",
        display: "inline-block",
        fontSize: "16px",
        margin: "10px 0",
    }

    page_heading = {
        fontFamily: "'Roboto', sans-serif",
        padding: "30px 15px",
        boxSizing: "border-box",
        backgroundColor: "#333",
        color: "#fff",
        margin: "0",
        fontSize: "40px",
        textTransform:"capitalize",
    }

    button = {
        display: "inline-block",
        fontFamily: "'Roboto', sans-serif",
        letterSpacing: ".1rem",
        transitionDuration: ".3s",
        fontWeight: "400",
        fontSize: "16px",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        color: "inherit",
        border: `.1rem solid`,
        borderColor: `$mild`,
        borderRadius: ".3rem",
        cursor: "pointer",

    }

    button_small = {
        ...this.button,
        fontSize: "12px",
        padding: "5px",
        boxSizing: "border-box",
        minWidth: "55px",
    }

    input = {
        display: "block",
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: `.1rem solid ${this.darkest}`,
        borderRadius: "3px",
        fontSize: "14px",
        fontFamily: "'Roboto Mono', monospace",
    }

    selector = {
        fontFamily: "'Roboto Mono', monospace",
        padding: "30px",
        fontSize: "24px",
        boxSizing: "border-box",

    }

    panel = {
        width: "50%",
        boxSizing: "border-box",
        padding: "15px",
    }

    property_panel = {
        ...this.panel,
        backgroundColor: "#444",
        color: "#fff",
        borderBottom: ".6rem solid #333",
    }

    display_panel = {
        ...this.panel,
        backgroundColor: "#efefef",
        borderBottom: ".6rem solid",
        borderRight: ".6rem solid",
        borderColor: "#333",
    }

    properties_display = {
        fontFamily: "'Roboto Mono', monospace",
        paddingLeft: "3rem",
        boxSizing: "border-box",
        color: "#fff",
        // backgroundColor: "#444",
        // borderBottom: `.6rem solid #333`
    }

    // fontFamily: "'Roboto Mono', monospace",

    //         {
    //             type: "typography",
    //             selector: ".body, body",
    //             properties: {
    //                 margin: "0",
    //                 color: "$dark",
    //                 fontSize: "2rem",
    //                 fontFamily: "'Roboto', sans-serif",
    //                 transitionDuration: ".3s",
    //             }
    //         },
    //         {
    //             type: "typography",
    //             selector: ".p, p",
    //             properties: {
    //                 lineHeight: "1.7em",
    //             }
    //         },
    //         {
    //             type: "typography",
    //             selector: ".a, a",
    //             properties: {
    //                 color: "inherit",
    //                 opacity: ".6",
    //                 cursor: "pointer",
    //                 transitionDuration: ".3s",
    //                 textDecoration: "none",
    //             }
    //         },
    //         {
    //             type: "typography",
    //             selector: ".a.hover, .a:hover, a.hover, a:hover",
    //             properties: {
    //                 color: "$dark",
    //                 opacity: "1",
    //                 textDecoration: "underline",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading",
    //             properties: {
    //                 marginBottom: ".25em",
    //                 lineHeight: "1.2",
    //                 transitionDuration: ".3s",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading1",
    //             properties: {
    //                 fontSize: "4rem",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading2",
    //             properties: {
    //                 fontSize: "3.2rem",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading3",
    //             properties: {
    //                 fontSize: "2.8rem",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading4",
    //             properties: {
    //                 fontSize: "2.4rem",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading5",
    //             properties: {
    //                 fontSize: "2rem",
    //             }
    //         },
    //         {
    //             type: "heading",
    //             selector: ".heading.heading6",
    //             properties: {
    //                 fontSize: "1.6rem",
    //             }
    //         },
    //         {
    //             type: "button",
    //             selector: ".button",
    //             properties: {
    //                 display: "inline-block",
    //                 fontFamily: "'Roboto', sans-serif",
    //                 letterSpacing: ".1rem",
    //                 transitionDuration: ".3s",
    //                 fontWeight: "300",
    //                 fontSize: "2rem",
    //                 padding: "1rem",
    //                 boxSizing: "border-box",
    //                 backgroundColor: "transparent",
    //                 color: "inherit",
    //                 border: `.1rem solid`,
    //                 borderColor: `$mild`,
    //                 borderRadius: ".3rem",
    //                 cursor: "pointer",
    //                 marginRight: ".5rem",

    //             }
    //         },
    //         {
    //             type: "button",
    //             selector: ".button.hover, .button:hover",
    //             properties: {
    //                 backgroundColor: "$mild",
    //                 color: "$light",
    //             }
    //         },
    //         {
    //             type: "button",
    //             selector: ".button.large",
    //             properties: {
    //                 fontSize: "3.4rem",
    //                 border: `.1rem solid`,
    //             }
    //         },
    //         {
    //             type: "button",
    //             selector: ".button.small",
    //             properties: {
    //                 fontWeight: "400",
    //                 fontSize: "1.2rem",
    //             }
    //         },
    //         {
    //             type: "form-control",
    //             selector: ".label, label",
    //             properties: {
    //                 display: "inline-block",
    //                 fontSize: "1.4rem",
    //                 fontWeight: "900",
    //                 marginBottom: ".5rem",
    //                 marginTop: ".5rem",
    //             }
    //         },
    //         {
    //             type: "form-control",
    //             selector: ".input, input",
    //             properties: {

    //             }
    //         },
    //         {
    //             type: "vanilla",
    //             selector: ".vanilla .swim-lane .left",
    //             properties: {
    //                 backgroundColor: "$dark",
    //             }
    //         },
    //         {
    //             type: "vanilla",
    //             selector: ".vanilla .swim-lane .left:hover",
    //             properties: {
    //                 backgroundColor: "rgba(0,0,0,.5)",
    //             }
    //         },

    //     ]
    // }


























}
export default new StyleGuideCSS();
