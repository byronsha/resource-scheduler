import React, { Component, PropTypes as T } from 'react';
import { Menu, Image, Icon } from 'semantic-ui-react';
import LogoutButton from './LogoutButton';

export default class UserInfo extends Component {
	render() {
		const styles = {
			menuItem: {
				position: 'absolute',
				bottom: '0px',
				width: '100%'
			},
			name: {
				marginLeft: '5px',
				fontWeight: 'bold'
			},
			email: {
				fontSize: '12px',
				paddingTop: '10px'
			}
		}

		const { auth } = this.props;
		const profile = auth.getPgProfile();

		return (
			<Menu.Item style={styles.menuItem}>
				<div>
					<Image src={profile.picture} avatar />
					<span style={styles.name}>{profile.name}</span>
				</div>
				<div style={styles.email}>
					<span>{profile.email}</span>
					<LogoutButton auth={auth} />
				</div>
			</Menu.Item>
		);
	}
}
