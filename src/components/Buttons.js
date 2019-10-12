import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class Headings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            buttonText: "Button",
        }
    }

    componentDidMount() {
        styles.subscribe(this.setCSS)
        this.setCSS();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setCSS = () => {
        this.setState({ css: styles.css.filter(i => i.type === "button") }, () => {
            console.log(this.state.css);
        });
    }

    render() {
        const { css, buttonText } = this.state;
        const { handleChange } = this;

        return (
            <div className="buttons">
                <StyleAdd type="button" />
                <div className="heading heading1">Buttons</div>
                <hr />
                <p></p>
                <div className="control-group flex align-center">
                    <label>Button Text: </label>
                    <div className="input-wrapper">
                        <input value={buttonText} onChange={handleChange} name="buttonText" />
                    </div>
                </div>
                <p></p>
                <hr />
                <p></p>
                {
                    css.map((item, key) =>
                        <div className="control-group" key={key}>
                            <label>{item.selector}</label>
                            <div className="button-wrapper" >
                                <button className={`button ${item.selector.replace(/\./g, ' ')}`}>
                                    {buttonText}
                                </button>
                            </div>
                            <br />
                        </div>
                    )
                }
            </div>
        );
    }
}
