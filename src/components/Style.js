import React from 'react';
import styles from '../services/style';
import '../assets/css/components/style.scss';


export default class Style extends React.Component {
    constructor(props) {
        super(props);
        this.state = { css: null }
    }

    componentDidMount() {
        styles.subscribe(this.setCSS);
        this.setCSS();
    }

    setCSS = () => {
        this.setState({ css: styles.css });
    }

    stringified = () => {
        let cssString = "";
        const { css } = this.state;

        for (let i = 0; i < css.length; i++) {
            let style = css[i];
            cssString = cssString +
                `${style.selector} {${this.stringifyProperties(style.properties)}} `
        }

        return cssString;
    }

    wrapSelector = (selector) => {
        if (selector === ":root")
            return selector;
        if (selector === ".body, body")
            return ".custom.body, .custom.body";

        let custom = selector.split(", ");
        let result = "";

        custom.map((item, key) => {
            result = result + `.custom ${item}${custom.length - 1 === key ? " " : ", "}`
        })
        return selector;
    }

    stringifyProperties = (properties) => {
        let propString = "";

        for (let prop in properties) {
            propString = propString + `${this.formatProperty(prop)} : ${this.formatValue(properties[prop])}; `
        }

        return propString;
    }

    formatValue = (value) => {
        let isVariable = value.includes("$");
        return isVariable ? styles.colors[value.split("$")[1]] : value;
    }

    formatProperty = (property) => {
        return property.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }

    render() {
        const { stringified } = this;
        if (!this.state.css)
            return null;

        return (
            <div className="style">
                <style dangerouslySetInnerHTML={{
                    __html: stringified()
                }} />
                {stringified()}
            </div>
        );
    }
}
