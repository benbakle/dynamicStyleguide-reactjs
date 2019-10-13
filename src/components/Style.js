import React from 'react';
import styles from '../services/styles';
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
            <div className="style">
                <style dangerouslySetInnerHTML={{
                    __html: stringified()
                }} />
                {stringified()}
            </div>
        );
    }
}
