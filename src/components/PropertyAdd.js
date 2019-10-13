import React from 'react';
import styles from '../services/styles';
import '../assets/css/layouts/table.scss';

export default class PropertyAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
                type: this.props.type,
                properties: { [this.state.property]: this.state.value },
            })
    }

    render() {
        const { property, value } = this.state;
        const{ handleChange, add } = this;

        return (
            <div className="table-row">
                <div className="table-cell">
                    <input value={property} name="property" onChange={handleChange} autoComplete="off" />
                </div>
                <div className="table-cell">
                    <input value={value} name="value" onChange={handleChange} autoComplete="off" />
                </div>
                <div className="table-cell">
                    <button className="button small" onClick={add}>add</button>
                </div>
            </div>
        );
    }
}