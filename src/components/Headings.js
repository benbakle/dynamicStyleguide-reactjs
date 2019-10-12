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
        this.setState({ css: styles.css.filter(i => i.type === "heading") });
    }

    render() {
        const { css } = this.state;

        return (
            <div className="headings">
                <div className="heading heading1">Headings</div>

                <StyleAdd type="heading" />

                {
                    css && css.map((item, key) =>
                        <div className={`heading ${item.selector.slice(1, item.selector.length)}`} key={key}>
                            {item.selector}
                        </div>
                    )
                }
            </div>
        );
    }
}
