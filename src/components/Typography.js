import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class Typography extends React.Component {

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
        this.setState({ css: styles.css.filter(i => i.type === "typography") }, () => {
            console.log(this.state.css);
        });
    }

    render() {
        return (
            <div className="css">
                <div className="heading heading1">Typography</div>

                <StyleAdd type="typography" />

                <label>Body</label>
                <div className="">
                    body
                </div>

                <label>Paragraph</label>
                <p>p</p>

            </div>
        );
    }
}
