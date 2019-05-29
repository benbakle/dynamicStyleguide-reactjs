import React from 'react';
import Color from '../../../services/Color';
import { SketchPicker } from 'react-color';

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", color: "#fff", pickerIsVisible: false }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (this.pickerNode.contains(e.target))
      return;
    this.setState({ pickerIsVisible: false });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addColor = () => {
    if (this.state.name !== "")
      Color.add({ name: this.state.name, color: this.state.color });
  }

  handleChangeComplete = (color, event) => {
    this.setState({ color: color.hex });
  };

  showPicker = () => {
    this.setState({ pickerIsVisible: true });
  }

  hidePicker = () => {
    this.setState({ pickerIsVisible: false });
  }


  render() {
    const { name, color, pickerIsVisible } = this.state;

    return (
      <div className="color-create">
        <input type="text" name="name" value={name} onChange={this.handleChange} autoComplete="off" />
        <div
          className="color-display"
          style={{ backgroundColor: color, width: "25px", height: "25px", borderWidth: "1px", borderColor: "#333", borderStyle: "solid" }}
          onClick={this.showPicker}>
        </div>
        <div ref={node => this.pickerNode = node}>
          {
            pickerIsVisible &&
            <SketchPicker onChangeComplete={this.handleChangeComplete} color={color} />
          }
        </div>
        <button className="color-add" onClick={this.addColor}>Add Color</button>
      </div>
    );
  }
}
