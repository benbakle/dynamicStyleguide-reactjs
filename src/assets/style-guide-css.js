import { thisExpression } from "@babel/types"

class StyleGuideCSS {

    color = {
        darkest: "#050607", //222
        darker: "#282c34", //333
        dark: "#3c424f", //444
        lightest: "#fff",
    }

    borderColor = this.color.darker;
    borderWidth = "10px";
    fontSize = "16px";

    app = {
        position: "relative",
        padding: "0",
        width: "calc(100% - 300px)",
    }

    label = {
        display: "inline-block",
        fontSize: this.fontSize,
        margin: "10px 0",
        color: this.color.lightest,
    }

    link = {
        color: this.color.lightest,
    }

    button = {
        display: "inline-block",
        transitionDuration: ".3s",
        fontWeight: "400",
        fontSize: this.fontSize,
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        color: "inherit",
        border: `1px solid`,
        borderColor: `$mild`,
        borderRadius: "3px",
        cursor: "pointer",

    }

    button_small = {
        ...this.button,
        fontSize: "12px",
        padding: "5px",
        boxSizing: "border-box",
        minWidth: "75px",
        fontFamily: "inherit",
    }

    input = {
        display: "block",
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        border: `1px solid ${this.color.darkest}`,
        borderRadius: "3px",
        fontSize: "14px",
        fontFamily: "'Roboto Mono', monospace",
    }

    selector = {
        fontFamily: "'Roboto Mono', monospace",
        padding: "30px 0",
        fontSize: "24px",
        boxSizing: "border-box",

    }

    navigation = {
        backgroundColor: this.color.darker,
        borderLeft: `${this.borderWidth} solid`,
        borderRight: `${this.borderWidth} solid`,
        borderColor: this.borderColor,
        fontSize: this.fontSize,
        paddingTop: "158px",
        boxSizing: "border-box",
        width: "300px"
    }

    navigation_heading = {
        fontSize: "18px",
        fontWeight: "700",
    }

    panel = {
        backgroundColor: this.color.dark,
        padding: "30px 15px",
        boxSizing: "border-box",
        borderTop: `${this.borderWidth} solid`,
        borderRight: `${this.borderWidth} solid`,
        borderBottom: `${this.borderWidth} solid`,
        borderLeft: `${this.borderWidth} solid`,
        borderColor: this.borderColor,
        margin: "0",
        listStyle: "none",
    }

    navigation_panel = {
        ...this.panel,
        color: this.color.lightest,
        borderRight: "none",
        borderLeft: "none",
        borderTop: "none",
    }

    heading_panel = {
        ...this.panel,
        color: this.color.lightest,
        borderLeft: `none`,
        // fontSize: "40px",
        padding: "45px 30px",
        marginLeft: "-290px",
        width: "calc(100vw - 27px)",
    }

    update_panel = {
        ...this.panel,
        color: this.color.lightest,
        borderLeft: "none",
        borderTop: "none",
        // display: "none",
    }

    property_panel = {
        ...this.panel,
        color: this.color.lightest,
        width: "50%",
        color: this.color.lightest,
        borderTop: `none`,
        borderLeft: `none`,
    }

    display_panel = {
        ...this.panel,
        width: "50%",
        backgroundColor: "#efefef",
        borderTop: `none`,
        borderLeft: `none`,
    }

    table = {
        width: "100%",
    }

    table_row = {
        display: "flex",
    }

    table_cell = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "10px",
        boxSizing:"border-box",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
    }

    property_input_cell = {
        ...this.table_cell,
        fontFamily: "'Roboto Mono', monospace",
        width: "calc(50% - 48px)",
        margin: "-7px -1px",

    }

    property_label_cell = {
        ...this.table_cell,
        fontFamily: "'Roboto Mono', monospace",
        width: "calc(50% - 48px)",
        margin: "-7px -1px",
        padding: "10px 20px",
    }

    property_button_cell = {
        ...this.table_cell,
        width: "96px",
    }


    properties_display = {
        color: this.color.lightest,
        fontSize: "16px",
        padding: "0 15px",
        boxSizing: "border-box"
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
