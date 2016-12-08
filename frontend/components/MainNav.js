import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import UserInfo from './UserInfo';

export default class MainNav extends Component {
  render() {
    const style = {
      borderRadius: '0px'
    };

    const { auth } = this.props;
    return (
      <Menu stackable style={style}>
        <Menu.Item header>Just tinkering about!</Menu.Item>
        <Menu.Item name='one' as='a'>One</Menu.Item>
        <Menu.Item name='two' as='a'>Two</Menu.Item>
        <Menu.Item name='three' as='a'>Three</Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='userInfo' fitted='vertically'>
            <UserInfo auth={auth} />
          </Menu.Item>
          <Menu.Item name='logout'>
            <Link to='/logout'>Logout</Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
