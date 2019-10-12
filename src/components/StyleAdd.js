import React from 'react';
import styles from '../services/styles';

export default class StyleAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            selector: "",
            property: "",
            value: "",
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        styles.add({
            selector: this.state.selector,
            properties: { [this.state.property]: this.state.value },
            type: this.props.type
        })
    }
    render() {
        return (
            <div className="style-add">
                <div className="control-group">
                    <label>selector : </label>
                    <input value={this.state.selector} name="selector" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <label>property : </label>
                    <input value={this.state.property} name="property" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <label>value : </label>
                    <input value={this.state.value} name="value" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <button className="button small dark" onClick={this.add}>Add</button>
                </div>
            </div>
        );
    }
}
