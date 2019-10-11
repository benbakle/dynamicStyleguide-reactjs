import React from 'react';
import headings from '../services/headings';
import Style from './Style';
import buttons from '../services/buttons';

export default class StyleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headingsCSS: [],
            buttonsCSS: [],
        }
    }

    componentDidMount() {
        headings.subscribe(this.setHeadings);
        buttons.subscribe(this.setButtons);
        this.setHeadings();
        this.setButtons();
    }


    setHeadings = () => {
            this.setState({ headingsCSS: headings.css });
    }

    setButtons = () => {
            this.setState({ buttonsCSS: buttons.css }, () => { console.log(buttons.css) });
    }

    render() {
        const { headingsCSS, buttonsCSS } = this.state;

        return (
            <>
                {
                    headingsCSS && headingsCSS.length > 0 &&
                    <>
                        <Style css={headingsCSS} />
                        <Style css={buttonsCSS} />
                    </>
                }
            </>
        );
    }
}
