import React from 'react';
import buttons from '../services/buttons';

export default class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.state = { css: [] }
    }

    componentDidMount() {
        buttons.subscribe(this.setCSS)
        this.setCSS();
    }

    setCSS = () => {
        this.setState({ css: buttons.css });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    add=()=>{
        buttons.add({selector:this.state.selector,properties:{fontSize:"10rem"}})
    }

    render() {
        const { css } = this.state;

        return (
            <div className="buttons">
                <div className="heading heading1">Buttons</div>

                <input value={this.state.selector} name="selector" onChange={this.handleChange} />
                <button onClick={this.add}>Click</button>
                {
                    css.map((item, key) =>
                        <div className={`heading ${item.selector.slice(1, item.selector.length)}`} key={key}>
                            {item.selector}
                        </div>
                    )
                }
            </div>
        );
    }
}
