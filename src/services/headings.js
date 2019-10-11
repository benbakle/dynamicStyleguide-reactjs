class Headings {
    callbacks = [];
    css = [
        {
            selector: ".heading",
            properties: {
                color: "#333",
                fontFamily: "'Open Sans', sans-serif",
                marginBottom:"1rem"
            }
        },
        {
            selector: ".heading1",
            properties: {
                fontSize: "50px",
            }
        },
        {
            selector: ".heading2",
            properties: {
                fontSize: "40px",
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
export default new Headings();
