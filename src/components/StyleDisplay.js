import React from 'react';
import styles from '../services/style';
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

    mapSelectorsToHtml = (selectors) => {
        let selectorsArray = selectors.split(",");
        let result

        result = this.selectorsToHtml(selectorsArray[0].split(" ").filter(s => s !== ""));

        // for (let i = 0; i < selectorsArray.length; i++) {
        //     result = this.selectorsToHtml(selectorsArray[i]);
        // }

        return (result);

    }

    selectorsToHtml = (selectorArray) => {
        console.log(typeof selectorArray, selectorArray[0]);
        return (
            <>
                {
                    typeof selectorArray === "object" &&
                    <div className={selectorArray[0].replace(/\./g, ' ')}>{this.selectorsToHtml(selectorArray.pop())}</div>
                }
                {
                    typeof selectorArray === "string" &&
                    <div className={selectorArray.replace(/\./g, ' ')}>{this.state.sampleText}</div>
                }

            </>
            // selectorArray.map((item, key) =>
            //     this.selectorToHtml(item, key)
            // )
        )
    }

    selectorToHtml = (selector) => {
        // console.log(selector);
        // return (
        //     <div className={`${selector.replace(/\./g, ' ')}`}>
        //         {this.selectorToHtml(selectorArray, index + 1)}
        //     </div>
        // )
    }

    render() {
        const { css, sampleText, type } = this.state;
        const { handleChange, mapSelectorsToHtml } = this;

        return (
            <div className={`style-display ${type}-styles`}>
                <div className="dsg-panel dsg-heading-panel heading heading1">
                    {type}
                </div>

                <div className="dsg-panel dsg-update-panel" >
                    <StyleAdd type={type} />

                    {/* <div className="control-group">
                        <div style={$css.label}>sample text:</div>
                        <div className="input-wrapper">
                            <input style={$css.input} value={sampleText} onChange={handleChange} name="sampleText" />
                        </div>
                    </div> */}
                </div>
                <div className="display-wrapper">
                    {
                        css && css.map((item, key) =>
                            <div className="flex" key={key}>
                                <div className="dsg-panel dsg-properties-panel">
                                    <div className="dsg-selector">{item.selector} {`{`}</div>
                                    <Properties style={item} type={type} />
                                    <div className="dsg-selector">{`}`}</div>
                                </div>

                                <div className="dsg-panel dsg-display-panel">
                                    <div className="body">

                                        {mapSelectorsToHtml(item.selector)}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
