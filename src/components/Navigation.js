import React from 'react';
import NavLink from './NavLink';
import './../assets/css/components/navigation.scss';

export default class Navigation extends React.Component {
  render() {

    return (
      <div className="navigation-trigger">
        <div className="navigation">
          <ul>
            <NavLink to="/typography" text="Typography" />
            <NavLink to="/headings" text="Headings" />
            <NavLink to="/buttons" text="Buttons" />
            <NavLink to="/template" text="Template" />
          </ul>
        </div>
      </div>
    );
  }
}
