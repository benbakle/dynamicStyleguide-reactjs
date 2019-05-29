import React from 'react';
import './palette.scss';

export default class Display extends React.Component {
  render() {
    const { color } = this.props;

    return (
      <div
        onClick={this.props.onClick}
        className={`color-palette ${!color ? "no-color" : ""}`}
        style={{ backgroundColor: color || "#efefef" }}>
      </div>
    );
  }
}
