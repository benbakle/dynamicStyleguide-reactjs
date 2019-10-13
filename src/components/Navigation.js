import React from 'react';
import NavLink from './NavLink';
import './../assets/css/components/navigation.scss';

export default class Navigation extends React.Component {
  render() {

    return (
        <div className="navigation">
          <ul>
            <NavLink to="/" text="Template" />
            <NavLink to="/type/typography" text="Typography" />
            <NavLink to="/type/heading" text="Headings" />
            <NavLink to="/type/button" text="Buttons" />
            <NavLink to="/type/form-control" text="Form Controls" />
          </ul>
        </div>
    );
  }
}
