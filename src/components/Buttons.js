import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class Headings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
        }
    }

    componentDidMount() {
        styles.subscribe(this.setCSS)
        this.setCSS();
    }

    setCSS = () => {
        this.setState({ css: styles.css.filter(i => i.type === "button") });
    }

    render() {
        const { css } = this.state;

        return (
            <div className="css">
                <div className="heading heading1">Buttons</div>

                <StyleAdd type="button" />
                
                {
                    css.map((item, key) =>
                        <div className="button-wrapper" key={key}>
                            <button className={`button ${item.selector.slice(1, item.selector.length)}`}>
                                {item.selector}
                            </button>
                        </div>
                    )
                }
            </div>
        );
    }
}
