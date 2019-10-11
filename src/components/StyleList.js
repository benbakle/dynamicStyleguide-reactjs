import React from 'react';
import headings from '../services/headings';
import Style from './Style';

export default class StyleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headingsCSS: []
        }
    }

    componentDidMount() {
        headings.subscribe(this.setHeadings);
        this.setHeadings();
    }

    setHeadings = () => {
        this.setState({ headingsCSS: headings.css });
    }

    render() {
        const { headingsCSS } = this.state;

        return (
            <>
                {
                    headingsCSS && headingsCSS.length > 0 &&
                    <Style css={headings.css} />
                }
            </>
        );
    }
}
