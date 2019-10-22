import React from 'react';
import styles from '../services/style';
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
        return (this.selectorsToHtml(selectorsArray[0].split(" ").filter(s => s !== "")));
    }

    selectorsToHtml = (selectorArray) => {
        return (
            <>
                {
                    typeof selectorArray === "object" && selectorArray.length === 1 &&
                    <div className={selectorArray[0].replace(/\./g, ' ').replace(":hover", "")}>{this.state.sampleText}</div>
                }
                {
                    typeof selectorArray === "object" && selectorArray.length !== 1 &&
                    <div className={selectorArray[0].replace(/\./g, ' ').replace(":hover", "")}>{this.selectorsToHtml(selectorArray.slice(1))}</div>
                }
                {
                    typeof selectorArray === "string" &&
                    <div className={selectorArray.replace(/\./g, ' ').replace(":hover", "")}>{this.state.sampleText}</div>
                }
            </>
        )
    }

    render() {
        // , sampleText
        const { css, type } = this.state;
        const { mapSelectorsToHtml } = this;

        return (
            <div className={`style-display ${type}-styles`}>
                <div className="dsg-panel dsg-heading-panel heading heading1">
                    {type}
                </div>


                {/* <div className="control-group">
                        <div style={$css.label}>sample text:</div>
                        <div className="input-wrapper">
                            <input style={$css.input} value={sampleText} onChange={handleChange} name="sampleText" />
                        </div>
                    </div> */}
                <div className="display-wrapper">
                    {
                        css && css.map((item, key) =>
                            <div className="flex" key={key}>
                                <div className="dsg-panel dsg-properties-panel">
                                    <div className="dsg-selector">
                                        {item.selector.split(", ").map((item, key) =>
                                            <span key={key}>{`${item},`}
                                                <br />
                                            </span>
                                        )}
                                        {`{`}
                                    </div>
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
