import React from 'react';
import NavLink from './NavLink';
import './../assets/css/components/navigation.scss';
import styles from '../services/style';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { styleTypes: null };
  }

  componentDidMount() {
    styles.subscribe(this.set);
    this.set();
  }

  set = () => {
    this.setState({ styleTypes: styles.types() })
  }

  render() {
    const { styleTypes } = this.state;

    return (
      <div className="navigation">
        <ul>
          <NavLink to="/" text="Template" />
          {
            styleTypes && styleTypes.map((item, key) =>
              <NavLink to={`/type/${item}`} text={item} key={key} />
            )
          }
        </ul>
      </div>
    );
  }
}
