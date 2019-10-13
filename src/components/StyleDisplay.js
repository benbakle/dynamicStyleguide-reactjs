import React from 'react';
import styles from '../services/styles';
import '../assets/css/components/style-display.scss';
import Properties from './Properties';

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
            <div className="style-display">


                <div className="heading heading1">{type}</div>

                <div className="control-group flex align-center entry">
                    <label>Sample Text:</label>
                    <div className="input-wrapper">
                        <input value={sampleText} onChange={handleChange} name="sampleText" />
                    </div>
                </div>

                {
                    css && css.map((item, key) =>
                        <div className="display flex" key={key}>
                            <div className="left">
                                <label>{item.selector} {`{`}</label>
                                <Properties style={item} type={type} />
                                <label>{`}`}</label>
                            </div>

                            <div className="right">
                                {type === "button" &&
                                    <div className="button-wrapper" >
                                        <button className={`${item.selector.replace(/\./g, ' ')}`}>
                                            {sampleText}
                                        </button>
                                    </div>
                                }

                                {type !== "button" &&
                                    <div className="wrapper" >
                                        <div className={`${type} ${item.selector.replace(/\./g, ' ')}`}>
                                            {sampleText}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
