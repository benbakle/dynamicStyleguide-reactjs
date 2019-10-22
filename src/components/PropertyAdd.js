import React from 'react';
import styles from '../services/style';
import '../assets/css/layouts/dsg-table.scss';

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
        const { handleChange, add } = this;

        return (
            <div className="dsg-table-row">
                <div className="dsg-table-cell property-input-cell">
                    <input name="property" value={property} onChange={handleChange} className="dsg-input" type="text" />
                </div>
                <div className="dsg-table-cell property-input-cell">
                    <input value={value} name="value" onChange={handleChange} className="dsg-input" type="text" />
                </div>
                <div className="dsg-table-cell property-button-cell" >
                    <button className="dsg-button dsg-small" onClick={add}>add</button>
                </div>
            </div>
        );
    }
}
