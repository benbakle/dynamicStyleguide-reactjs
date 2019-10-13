import React from 'react';
import styles from '../services/styles';
import '../assets/css/layouts/table.scss';

export default class PropertyRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inEditMode: true,
            name: "",
            value: "",
        }
    }

    componentDidMount() {
        this.setState({ ...this.props.property })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    save = () => {
        styles.add({
            selector: this.props.selector,
            properties: { [this.state.name]: this.state.value },
            type: this.props.type
        }, this.setState({ inEditMode: true }))
    }

    toggleEditMode = () => {
        this.setState({ inEditMode: !this.state.inEditMode })
    }

    formatProperty = (property) => {
        return property.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    }

    render() {
        const { handleChange, toggleEditMode, formatProperty, save } = this;
        const { inEditMode, name, value } = this.state;

        if (!name)
            return null;

        return (
            <>
                <div className="table-cell">{formatProperty(name)}</div>
                {!inEditMode && <div className="table-cell">{value}</div>
                }
                {
                    inEditMode && <div className="table-cell">
                        <input name="value" value={value} onChange={handleChange} />
                    </div>
                }
                <div className="table-cell">
                    {
                    //     !inEditMode &&
                    //     <button className="button small" onClick={toggleEditMode}>edit</button>
                    }
                    {
                        inEditMode &&
                        <>
                            <button className="button small" onClick={save}>update</button>
                            {/* <button className="button small" onClick={toggleEditMode}>cancel</button> */}
                        </>
                    }
                </div>
            </>
        );
    }
}
