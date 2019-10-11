import React from 'react';
import buttons from '../services/buttons';

export default class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            selector: "",
            property: "",
            value: "",
        }
    }

    componentDidMount() {
        buttons.subscribe(this.setCSS)
        this.setCSS();
    }

    setCSS = () => {
        this.setState({ css: buttons.css });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        buttons.add({ selector: this.state.selector, properties: { [this.state.property]: this.state.value } })
    }

    render() {
        const { css } = this.state;

        return (
            <div className="buttons">
                <div className="heading heading1">Buttons</div>

                <input value={this.state.selector} name="selector" onChange={this.handleChange} />
                <input value={this.state.property} name="property" onChange={this.handleChange} />
                <input value={this.state.value} name="value" onChange={this.handleChange} />

                <button onClick={this.add}>Add</button>
                {
                    css.map((item, key) =>
                        <div className="button-wrapper" key={key}>
                            <button className={`button ${item.selector.slice(1, item.selector.length)}`}>
                                {item.selector}
                            </button>
                        </div>
                    )
                }
            </div>
        );
    }
}
