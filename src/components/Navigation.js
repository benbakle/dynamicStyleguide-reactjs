import React from 'react';
import NavLink from './NavLink';
import StyleAdd from './StyleAdd';
import styles from '../services/style';
import history from '../services/history';
import Colors from './Colors';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { styleTypes: null, newStyle: ""};
  }

  componentDidMount() {
    styles.subscribe(this.set);
    this.set();
  }

  set = () => {
    styles.getTypes().then(this.loadTypes);
  }
  
  loadTypes = res =>{
    this.setState({ styleTypes: res });
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
      <>
        <div className="dsg-panel dsg-navigation-panel dsg-style-add-panel">
          <div className="dsg-navigation-heading .heading">New Style</div>
          <StyleAdd />
        </div>
        <div className="dsg-panel dsg-navigation-panel">
          <div className="dsg-navigation-heading .heading">Templates</div>

          <ul className="dsg-navigation-list">
            <NavLink to="/" text="vanilla" />
          </ul>
        </div>
        <div className="dsg-panel dsg-navigation-panel">
          <div className="dsg-navigation-heading .heading" >Styles</div>
          <ul className="dsg-navigation-list">
            {
              styleTypes && styleTypes.map((item, key) =>
                <NavLink to={`/type/${item}`} text={item} key={key} />
              )
            }
          </ul>

          <div className="flex">
            <input className="dsg-input dsg-small" type="text" value={newStyle} onChange={handleChange} name="newStyle" />
            <button className="dsg-button dsg-small" onClick={addNewStyle}><i className="fas fa-plus"></i></button>
          </div>

        </div>
        <div className="dsg-panel dsg-navigation-panel">
          <div className="dsg-navigation-heading .heading">Colors</div>
          <Colors />
        </div>
      </>
    );
  }
}
