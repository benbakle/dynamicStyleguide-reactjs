import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class Typography extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            sampleText: "The quick brown fox jumped over the lazy dog.",
        }
    }

    componentDidMount() {
        styles.subscribe(this.setCSS)
        this.setCSS();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    setCSS = () => {
        this.setState({ css: styles.css.filter(i => i.type === "typography") }, () => {
            console.log(this.state.css);
        });
    }

    render() {
        const { sampleText } = this.state;
        const { handleChange } = this;

        return (
            <div className="css">
                <StyleAdd type="typography" />
                <div className="heading heading1">Typography</div>
                <hr />
                <p></p>
                <div className="control-group flex align-center">
                    <label>Sample Text: </label>
                    <div className="input-wrapper">
                        <input value={sampleText} onChange={handleChange} name="sampleText" />
                    </div>
                </div>
                <p></p>
                <hr />
                <p></p>

                <label>Body</label>
                <div className="body">
                    {sampleText}
                </div>

                <label>Paragraph</label>
                <p> {sampleText}</p>

            </div>
        );
    }
}
