import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import style from '../services/style';

export default class NavLink extends React.Component {
    setStyleType = ()=>{
        style.setType(this.props.text);
    }

    render() {
        const { to, text } = this.props;
        const { setStyleType } = this;
        return (
            <li>
                <ReactNavLink to={to} activeClassName="active" className="dsg-link" onClick={setStyleType}>
                    {text}
                </ReactNavLink>
            </li>
        );
    }
}
