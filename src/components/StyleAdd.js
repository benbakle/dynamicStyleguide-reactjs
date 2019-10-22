import React from 'react';
import style from '../services/style';
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

    componentDidMount() {
        style.subscribe(this.setSelector);
        this.setSelector();
    }


    setSelector = () => {
        style.getSelector().then(this.loadSelector);
    }

    loadSelector = res => {
        this.setState({ selector: res });
    }

    setType = () => {
        style.getType().then(this.loadType);
    }

    loadType = res => {
        this.setState({ type: res });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        style.add({
            selector: this.state.selector,
            properties: { [this.state.property]: this.state.value },
            type: this.state.type
        })
    }
    render() {
        return (
            <>
                <div className="control-group">
                    <div style={$css.label}>selector : </div>
                    <input className="dsg-input dsg-small" type="text" value={this.state.selector} name="selector" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <div style={$css.label}>property : </div>
                    <input className="dsg-input dsg-small" type="text" value={this.state.property} name="property" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <div style={$css.label}>value : </div>
                    <input className="dsg-input dsg-small" type="text" value={this.state.value} name="value" onChange={this.handleChange} />
                </div>
                <div className="control-group">
                    <button className="dsg-button dsg-small" onClick={this.add}>Add</button>
                </div>
            </>
        );
    }
}
