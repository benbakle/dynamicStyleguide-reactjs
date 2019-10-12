import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class Headings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            headingText: "heading",
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
        this.setState({ css: styles.css.filter(i => i.type === "heading") }, () => {
            console.log(this.state.css);
        });
    }

    render() {
        const { css, headingText } = this.state;
        const { handleChange } = this;


        return (
            <div className="headings">
                <StyleAdd type="heading" />
                <div className="heading heading1">Headings</div>
                <hr />
                <p></p>
                <div className="control-group flex align-center">
                    <label>Heading Text: </label>
                    <div className="input-wrapper">
                        <input value={headingText} onChange={handleChange} name="headingText" />
                    </div>
                </div>
                <p></p>
                <hr />
                <p></p>
                {
                    css && css.map((item, key) =>
                        <div className="control-group" key={key}>
                            <label>{item.selector}</label>
                            <div className="button-wrapper" >
                                <div className={`heading ${item.selector.replace(/\./g, ' ')}`}>
                                    {headingText}
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                }
            </div>
        );
    }
}
