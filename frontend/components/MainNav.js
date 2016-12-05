import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

export default class MainNav extends Component {
  render() {
    const style = {
      borderRadius: '0px'
    };

    return (
      <Menu stackable style={style}>
        <Menu.Item header>Just tinkering about!</Menu.Item>
        <Menu.Item name='one' as='a'>One</Menu.Item>
        <Menu.Item name='two' as='a'>Two</Menu.Item>
        <Menu.Item name='three' as='a'>Three</Menu.Item>
        <Menu.Item name='logout' position='right'><Link to='/logout'>Logout</Link></Menu.Item>
      </Menu>
    );
  }
}
