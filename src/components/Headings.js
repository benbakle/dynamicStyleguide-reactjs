import React from 'react';
import headings from '../services/headings';

export default class Headings extends React.Component {

    constructor(props) {
        super(props);
        this.state = { css: [] }
    }

    componentDidMount() {
        headings.subscribe(this.setCSS)
        this.setCSS();
    }

    setCSS = () => {
        this.setState({ css: headings.css });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        headings.add({ selector: this.state.selector, properties: { [this.state.property]: this.state.value } }, this.setCSS)
    }

    render() {
        const { css } = this.state;

        return (
            <div className="headings">
                <div className="heading heading1">Headings</div>

                <input value={this.state.selector} name="selector" onChange={this.handleChange} />
                <input value={this.state.property} name="property" onChange={this.handleChange} />
                <input value={this.state.value} name="value" onChange={this.handleChange} />
                <button onClick={this.add}>Add</button>
                {
                    css.map((item, key) =>
                        <div className={`heading ${item.selector.slice(1, item.selector.length)}`} key={key}>
                            {item.selector}
                        </div>
                    )
                }
            </div>
        );
    }
}
