import React from 'react';
import style from '../services/style';
import color from '../services/color';
import $css from '../assets/style-guide-css';

export default class Colors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [],
            name: "",
            value: "",
        };
    }

    componentDidMount() {
        color.subscribe(this.getColors);
        this.getColors();
    }

    getColors = () => {
        color.getColors().then(this.loadColors);
    }

    loadColors = colors => {
        this.setState({ colors: colors });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        color.addColor({ name: this.state.name.trim(), value: this.state.value })
    }

    setColor = (color) => {
        this.setState({ name: color.name, value: color.value });
    }

    render() {
        const { colors, name, value } = this.state;
        const { handleChange, add, setColor } = this;

        return (
            <div className="colors-display">

                <ul className="dsg-navigation-list">
                    {
                        colors && colors.map((item, key) =>
                            <li className={$css.link} key={key}>
                                <div className="dsg-table">
                                    <div className="dsg-table-row" onClick={() => { setColor(item) }}>
                                        <div className="dsg-table-cell">
                                            {item.name}
                                        </div>
                                        <div className="dsg-table-cell">
                                            {item.value}
                                        </div>
                                        <div className="dsg-table-cell">
                                            <input type="color" className="dsg-input" value={item.value} readOnly />
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    }
                </ul>

                <div className="add-color">
                    <div className="control-group">
                        <label>name : </label>
                        <input type="text" className="dsg-input dsg-small" value={name} name="name" onChange={handleChange} />
                    </div>
                    <div className="control-group">
                        <label>value : </label>
                        <input type="color" className="dsg-input dsg-small" value={value} name="value" onChange={handleChange} />
                    </div>
                    <br />
                    <div className="control-group">
                        <div className="button-wrapper">
                            <button className="dsg-button small" onClick={add}>add</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
