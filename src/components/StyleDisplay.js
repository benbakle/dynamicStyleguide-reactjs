import React from 'react';
import styles from '../services/style';
import '../assets/css/components/style-display.scss';
import $css from '../assets/style-guide-css';
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
                    <div className={`${item.replace(/\./g, ' ')}`} key={key}>
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
                <div style={$css.page_heading}>{type}</div>

                <div className="update-panel">
                    <StyleAdd type={type} />

                    <div className="control-group">
                        <div style={$css.label}>sample text:</div>
                        <div className="input-wrapper">
                            <input style={$css.input} value={sampleText} onChange={handleChange} name="sampleText" />
                        </div>
                    </div>
                </div>
                <div className="display-wrapper">
                    {
                        css && css.map((item, key) =>
                            <div className="flex" key={key}>

                                <div style={$css.property_panel}>
                                    <div style={$css.selector}>{item.selector} {`{`}</div>
                                    <Properties style={item} type={type} />
                                    <div style={$css.selector}>{`}`}</div>
                                </div>

                                <div style={$css.display_panel}>
                                    {parseSelectorToHtml(item.selector)}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
