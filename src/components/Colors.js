import React from 'react';
import styles from '../services/style';
import $css from '../assets/style-guide-css';

export default class Colors extends React.Component {

    constructor(props) {
        super(props);
        this.state = { colors: [] };
    }

    componentDidMount() {
        styles.subscribe(this.mapColors);
        this.mapColors();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add = () => {
        styles.addColor({ name: this.state.name.trim(), value: this.state.value })
    }

    setColor = (color) => {
        this.setState({ name: color.name, value: color.value });
    }

    mapColors = () => {
        let colors = [];

        for (var color in styles.colors) {
            colors.push({ name: color, value: styles.colors[color] });
        }

        this.setState({ colors: colors });
    }

    render() {
        const { colors, name, value } = this.state;
        const { handleChange, add, setColor } = this;

        return (
            <div className="colors-display">

                <ul name="navigation-list" style={$css.navigation_list}>
                    {
                        colors && colors.map((item, key) =>
                            <li style={$css.link} key={key}>
                                <div style={$css.table}>
                                    <div style={$css.table_row} onClick={() => { setColor(item) }}>
                                        <div style={$css.table_cell}>
                                            {item.name}
                                        </div>
                                        <div style={$css.table_cell}>
                                            {item.value}
                                        </div>
                                        <div style={$css.table_cell}>
                                            <input name="input-color" type="color" style={$css.input_color} value={item.value} />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="color-box" onClick={() => { setColor(item) }}
                                    style={{
                                        backgroundColor: item.value,
                                    }} ></div> */}
                            </li>
                        )
                    }
                </ul>

                <div className="add-color">
                    <div className="control-group">
                        <label>name : </label>
                        <input value={name} name="name" onChange={handleChange} />
                    </div>
                    <div className="control-group">
                        <label>value : </label>
                        <input type="color" style={$css.input_color} value={value} name="value" onChange={handleChange} />
                    </div>
                    <br />
                    <div className="control-group">
                        <div className="button-wrapper">
                            <button className="button small" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
