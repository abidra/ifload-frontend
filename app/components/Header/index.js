import React from 'react';
import { Layout, Menu, Icon } from 'antd';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ background: '#fff', padding: 0 }}>
        <Icon
          className="trigger"
        />
      </div>
    );
  }
}

export default Header;
