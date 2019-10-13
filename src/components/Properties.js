import React from 'react';
import '../assets/css/layouts/table.scss';
import PropertyRow from './PropertyRow';
import PropertyAdd from './PropertyAdd';

export default class Properties extends React.Component {

    render() {
        const { properties, selector } = this.props.style;

        let display = [];

        for (var p in properties) {
            display.push({ name: p, value: properties[p] })
        }

        return (
            <div className="properties-display">
                <div className="table">
                    <PropertyAdd selector={selector} />
                    {display.map((item, key) =>
                        <div className="table-row" key={key}>
                            <PropertyRow property={item} selector={selector} type={this.props.type} />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
