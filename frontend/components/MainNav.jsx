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
    const logoUrl = 'http://orig07.deviantart.net/7685/f/2013/248/6/5/tinker_icon_by_imkb-d6l50q2.png';
    return (
      <Menu stackable style={style}>
        <Menu.Item name='logo' fitted='vertically' header><img src={logoUrl}></img> Just tinkering about!</Menu.Item>
        <Menu.Item name='one' as='a'>One</Menu.Item>
        <Menu.Item name='two' as='a'>Twoaabc</Menu.Item>
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
