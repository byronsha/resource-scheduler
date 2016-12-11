import React, { Component } from 'react';
import { Menu, Image, Input, Icon, Dropdown } from 'semantic-ui-react';
import UserInfo from './UserInfo';

export default class MainNav extends Component {
  constructor(props) {
		super(props);

		this.state = {
      activeItem: ''
    };

		this.handleItemClick = (e, { name }) => this.setState({ activeItem: name })
	}

  render() {
    const style = {
      borderRadius: '0px',
      minHeight: '100vh',
      width: '250px'
    }

    const { auth } = this.props.routes[0];
    const { activeItem } = this.state;
    const logoUrl = 'http://orig07.deviantart.net/7685/f/2013/248/6/5/tinker_icon_by_imkb-d6l50q2.png';

    return (
      <Menu vertical style={style}>
        <Menu.Item name='logo' header>
          <Image src={logoUrl} avatar />
          <span>I'm just tinkering about!</span>
        </Menu.Item>

        <Menu.Item>
          <Input placeholder='Ask Tinker something...' />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
              Search
            </Menu.Item>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={this.handleItemClick}>
              Add
            </Menu.Item>
            <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
          <Icon name='grid layout' />
          Browse
        </Menu.Item>

        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick}>
          Messages
        </Menu.Item>

        <Menu.Item as={Dropdown} text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Menu.Item>

        <UserInfo auth={auth} />
      </Menu>
    );
  }
}
