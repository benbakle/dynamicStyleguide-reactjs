import React from 'react';
import styles from '../services/style';
import '../assets/css/components/style-display.scss';
import Properties from './Properties';
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
        this.load(this.props.match.params.type);
    }

    componentWillReceiveProps(props) {
        this.load(props.match.params.type);
    }

    load = (type) => {
        window.scrollTo(0, 0)
        this.setState({ type: type }, () => {
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
        });
    }

    parseSelectorToHtml = (selector) => {
        let singleSelector = selector.split(",");
        let cascade = singleSelector[0].split(" ");

        return cascade.map((item, key) =>
            <div key={key}>
                {
                    item.includes(".") &&
                    <div className={`${item.replace(/\./g, ' ').split(":hover")[0]}`} key={key}>
                        {cascade.length === (key + 1) && this.state.sampleText}
                    </div>
                }
            </div>
        )
        // return (
        //     <div className={`${selector.replace(/\./g, ' ')}`}>
        //         {this.state.sampleText}
        //     </div>
        // )
    }

    render() {
        const { css, sampleText, type } = this.state;
        const { handleChange, parseSelectorToHtml } = this;

        return (
            <div className={`style-display ${type}-styles`}>
                <div className="heading heading1">{type}</div>

                <div className="update-panel">
                    <div className="heading heading3">Add Selector</div>
                    <StyleAdd type={type} />

                    <div className="control-group">
                        <label>sample text:</label>
                        <div className="input-wrapper">
                            <input value={sampleText} onChange={handleChange} name="sampleText" />
                        </div>
                    </div>
                </div>

                {
                    css && css.map((item, key) =>
                        <div className="display flex" key={key}>
                            <div className="left">
                                <div className="label">{item.selector} {`{`}</div>
                                <Properties style={item} type={type} />
                                <div className="label">{`}`}</div>
                            </div>

                            <div className="right">
                                <div className="wrapper" >
                                    {parseSelectorToHtml(item.selector)}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
