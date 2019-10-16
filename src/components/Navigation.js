import React from 'react';
import NavLink from './NavLink';
import $css from './../assets/style-guide-css';
import styles from '../services/style';
import history from '../services/history';
import Colors from './Colors';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { styleTypes: null, newStyle: "" };
  }

  componentDidMount() {
    styles.subscribe(this.set);
    this.set();
  }

  set = () => {
    this.setState({ styleTypes: styles.types() })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addNewStyle = () => {
    history.push(`/type/${this.state.newStyle}`)
  }

  render() {
    const { styleTypes, newStyle } = this.state;
    const { addNewStyle, handleChange } = this;

    return (
      <div name="navigation" style={$css.navigation}>
        <div name="navigation-panel" style={$css.navigation_panel}>

          <div name="navigation-heading" style={$css.navigation_heading}>Templates</div>

          <ul className="sub-nav">
            <NavLink to="/" text="vanilla" />
          </ul>

        </div>
        <div name="navigation-panel" style={$css.navigation_panel}>
          <div name="navigation-heading" style={$css.navigation_heading}>Styles</div>

          <ul className="sub-nav">
            {
              styleTypes && styleTypes.map((item, key) =>
                <NavLink to={`/type/${item}`} text={item} key={key} />
              )
            }
          </ul>

          <div className="flex">
            <input value={newStyle} onChange={handleChange} name="newStyle" />
            <button className="button small" onClick={addNewStyle}><i className="fas fa-plus"></i></button>
          </div>

        </div>
        <div name="navigation-panel" style={$css.navigation_panel}>
          <div name="navigation-heading" style={$css.navigation_heading}>Colors</div>
          <Colors />
        </div>
      </div>
    );
  }
}
