import React from 'react';
import styles from '../services/style';
import '../assets/css/components/style-add.scss';
import $css from '../assets/style-guide-css';

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

    componentWillReceiveProps(props) {
        this.setState({ selector: props.selector })
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
            <div className="style-add flex space-between align-center">
                <div className="control-group">
                    <div style={$css.label}>selector : </div>
                    <input style={$css.input} value={this.state.selector} name="selector" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <div style={$css.label}>property : </div>
                    <input style={$css.input} value={this.state.property} name="property" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <div style={$css.label}>value : </div>
                    <input style={$css.input} value={this.state.value} name="value" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <button style={$css.button_small} onClick={this.add}>Add</button>
                </div>
            </div>
        );
    }
}
