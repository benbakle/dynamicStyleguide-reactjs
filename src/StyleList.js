import React from 'react';
import ColorCreate from './components/color/create/Create';
import ColorDisplay from './components/color/display/Display';
import Color from './services/Color';

export default class StyleList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { colors: [] };
  }

  componentDidMount() {
    Color.subscribe(this.setColors);
    this.setColors();
  }

  setColors = () => {
    this.setState({ colors: Color.colors })
  }

  render() {
    const { colors } = this.state;

    return (
      <div className="style-list">
        <h1>Style List</h1>
        <ColorCreate />
        <div className="color-list" style={{ display: "flex" }}>
          {
            colors.map((item, key) =>
              <ColorDisplay color={item} key={key} />
            )
          }
        </div>
      </div>
    );
  }
}
