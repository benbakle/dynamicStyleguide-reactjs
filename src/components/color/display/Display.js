import React from 'react';
import Palette from '../palette/Palette';
import Notifications from '../../../services/Notifications';

export default class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = { color: this.colorOrDefault(), inputHidden: true }
  }

  componentDidMount() {
    this.setState({ color: this.colorOrDefault() })
  }

  handlePaletteClick = e => {
    if (this.state.color.color)
      return this.copy();
    alert("display update color");
  }

  copy = () => {
    this.setState({ inputHidden: false }, () => {
      this.colorNode.select();
      document.execCommand("copy");
      this.setState({inputHidden:true});
      Notifications.message(`Copied '${this.state.color.color}'`)
    });
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
          <input type="text" defaultValue={color} ref={node => { this.colorNode = node; }} hidden={this.state.inputHidden} />
        </div>
        <Palette color={color} onClick={this.handlePaletteClick} />
      </div>
    );
  }
}
