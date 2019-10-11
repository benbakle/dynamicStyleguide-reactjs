import React from 'react';

export default class Style extends React.Component {

    constructor(props) {
        super(props);
        this.state = { css: null }
    }

    componentDidMount() {
        this.setState({ css: this.props.css })
    }

    stringified = () => {
        let cssString = "";
        const { css } = this.state;

        for (let i = 0; i < css.length; i++) {
            let style = css[i];
            cssString = cssString + `${style.selector} {${this.stringifyProperties(style.properties)}} `
        }

        console.log(cssString);
        return cssString;
    }

    stringifyProperties = (properties) => {
        let propString = "";

        for (let prop in properties) {
            propString = propString + `${this.formatProperty(prop)} : ${properties[prop]}; `
        }

        return propString;
    }

    formatProperty = (property) => {
        return property.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }

    render() {
        const { stringified } = this;
        if (!this.state.css)
            return null;

        return (
            <style dangerouslySetInnerHTML={{
                __html: stringified()
            }} />
        );
    }
}
