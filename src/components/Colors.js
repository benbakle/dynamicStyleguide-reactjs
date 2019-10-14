import React from 'react';
import '../assets/css/components/colors.scss';
import styles from '../services/style';
import { thisExpression } from '@babel/types';

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
                <div className="add-color">
                    <div className="control-group">
                        <label>name : </label>
                        <input value={name} name="name" onChange={handleChange} />
                    </div>
                    <div className="control-group">
                        <label>value : </label>
                        <input value={value} name="value" onChange={handleChange} type="color" />
                    </div>
                    <br />
                    <div className="control-group">
                        <div className="button-wrapper">
                            <button className="button small" onClick={add}>Add</button>
                        </div>
                    </div>
                </div>
                {
                    colors && colors.map((item, key) =>
                        <div className="color-palette" key={key}>
                            <div className="label"> {item.name} : {item.value}</div>
                            <div className="color-box" onClick={() => { setColor(item) }}
                                style={{
                                    backgroundColor: item.value,
                                }} ></div>
                        </div>
                    )
                }
            </div>
        );
    }
}
