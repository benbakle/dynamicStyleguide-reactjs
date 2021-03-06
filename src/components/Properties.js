import React from 'react';
import '../assets/css/layouts/dsg-table.scss';
import PropertyRow from './PropertyRow';
import PropertyAdd from './PropertyAdd';

export default class Properties extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(props) {
        this.load(props);
    }

    load = (props) => {
        this.setState({
            type: props.type,
            properties: props.style.properties,
            selector: props.style.selector,
        })
    }

    render() {
        const { properties, selector, type } = this.state;

        let display = [];

        for (var p in properties) {
            display.push({ name: p, value: properties[p] })
        }

        return (
            <div className="dsg-properties-display">
                <div className="dsg-table">
                    <PropertyAdd selector={selector} type={type} />
                    {display.map((item, key) =>
                        <PropertyRow property={item} selector={selector} type={type} key={key} />
                    )}
                </div>
            </div>
        );
    }
}
