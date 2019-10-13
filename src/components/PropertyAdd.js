import React from 'react';
import styles from '../services/styles';
import '../assets/css/layouts/table.scss';

export default class PropertyAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            property: "",
            value: "",
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        if (this.state.property)
            styles.add({
                selector: this.props.selector,
                properties: { [this.state.property]: this.state.value },
                type: this.props.type
            })
    }
    
    render() {
        return (
            <div className="table-row">
                <div className="table-cell">
                    <input value={this.state.property} name="property" onChange={this.handleChange} autocomplete="off" />
                </div>
                <div className="table-cell">
                    <input value={this.state.value} name="value" onChange={this.handleChange} />
                </div>
                <div className="table-cell">
                    <button className="button small" onClick={this.add}>add</button>
                </div>
            </div>
        );
    }
}
