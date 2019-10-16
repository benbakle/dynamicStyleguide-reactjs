import React from 'react';
import styles from '../services/style';
import '../assets/css/layouts/table.scss';
import $css from '../assets/style-guide-css';

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
            <div style={$css.table_row}>
                <div style={$css.property_input_cell}>
                    <input value={property} name="property" onChange={handleChange} style={$css.input} />
                </div>
                <div style={$css.property_input_cell}>
                    <input value={value} name="value" onChange={handleChange} style={$css.input} />
                </div>
                <div style={$css.property_button_cell}>
                    <button style={$css.button_small} onClick={add}>add</button>
                </div>
            </div>
        );
    }
}
