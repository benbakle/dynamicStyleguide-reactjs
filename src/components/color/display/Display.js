import React from 'react';
import Palette from '../palette/Palette';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: this.colorOrDefault() }
  }

  componentDidMount() {
    this.setState({ color: this.colorOrDefault() })
  }

  copy = () => {
    this.colorNode.select();
    document.execCommand("copy");
  }

  colorOrDefault = () => {
    return {
      color: this.props.color.color,
      name: this.props.color.name || "no name"
    }
  }
  render() {
    const { color, name } = this.state.color;

    return (
      <div className="color-display">
        <label className="name">{name}</label>
        <div className="input-wrapper">
          <input type="text" defaultValue={color} ref={node => { this.colorNode = node; }} readOnly />
        </div>
       <Palette color={color} onClick={this.copy}/>
      </div>
    );
  }
}
