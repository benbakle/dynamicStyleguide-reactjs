import React from 'react';
import styles from '../services/styles';
import StyleAdd from './StyleAdd';

export default class StyleDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            css: [],
            sampleText: "",
        }
    }

    componentDidMount() {
        this.setState({ type: this.props.type }, () => {
            styles.subscribe(this.setCSS)
            this.setCSS();
        })
    }

    // componentWillReceiveProps(props) {
    //     if (props)
    //         this.setState({ type: this.props.match.params.type }, () => {
    //             this.setCSS();
    //         })
    // }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    setCSS = () => {
        this.setState({
            css: styles.css.filter(i => i.type === this.state.type),
            sampleText: this.state.type
        }, () => {
            console.log(this.state.css);
        });
    }

    render() {
        const { css, sampleText, type } = this.state;
        const { handleChange } = this;


        return (
            <div className="headings">
                <StyleAdd type="heading" />
                <div className="heading heading1">{type}</div>
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
                {
                    css && css.map((item, key) =>
                        <div className="control-group" key={key}>
                            <label>{item.selector}</label>
                            <div className="wrapper" >
                                <div className={`${type} ${item.selector.replace(/\./g, ' ')}`}>
                                    {sampleText}
                                </div>
                            </div>
                            <br />
                        </div>
                    )
                }
            </div>
        );
    }
}
