import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import $css from '../assets/style-guide-css';

export default class NavLink extends React.Component {
    render() {
        const{to, text} = this.props;
        return (
            <li>
                <ReactNavLink to={to} activeClassName="active" style={$css.link}>
                    {text}
                </ReactNavLink>
            </li>
        );
    }
}
