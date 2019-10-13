import React from 'react';
import '../assets/css/components/colors.scss';
import styles from '../services/style';

export default class Colors extends React.Component {

    constructor(props) {
        super(props);
        this.state = { colors: [] };
    }

    componentDidMount() {
        styles.subscribe(this.mapColors);
        this.mapColors();
    }

    mapColors = () => {
        let colors = [];

        for (var color in styles.colors) {
            colors.push({ name: color, value: styles.colors[color] });
        }

        this.setState({ colors: colors });
    }

    render() {
        const { colors } = this.state;

        return (
            <div className="colors-display">
                {
                    colors && colors.map((item, key) =>
                        <div key={key}>
                            {item.name}
                            {item.value}
                            <div className="color-box"
                                style={{
                                    backgroundColor: item.value,
                                    borderColor:"rgba(0,0,0,.1)",
                                }} ></div>
                        </div>
                    )
                }
            </div>
        );
    }
}
