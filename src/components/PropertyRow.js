import React from 'react';
import styles from '../services/style';
import $css from '../assets/style-guide-css';

export default class PropertyRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            value: "",
        }
    }

    componentDidMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(props) {
        this.load(props)
    }

    load = (props) => {
        this.setState({
            name: props.property.name,
            value: props.property.value,
            selector: props.selector,
            type: props.type,
        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    save = () => {
        styles.add({
            selector: this.state.selector,
            type: this.state.type,
            properties: { [this.state.name]: this.state.value },
        })
    }

    formatProperty = (property) => {
        return property.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }

    render() {
        const { handleChange, formatProperty, save } = this;
        const { name, value } = this.state;

        if (!name)
            return null;

        return (
            <div className="dsg-table-row">
                <div className="dsg-table-cell property-label-cell">{formatProperty(name)}</div>
                <div className="dsg-table-cell property-input-cell">
                    <input name="value" value={value} onChange={handleChange} className="dsg-input" type="text" />
                </div>
                <div className="dsg-table-cell property-button-cell">
                    <button className="dsg-button dsg-small" onClick={save}>update</button>
                </div>
            </div>
        );
    }
}
