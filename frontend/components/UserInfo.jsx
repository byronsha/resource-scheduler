import React, { Component, PropTypes as T } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router';

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
			emailAndLogout: {
				fontSize: '12px',
				paddingTop: '10px'
			},
			logout: {
				float: 'right',
			}
		}

		const profile = this.props.auth.getProfile();

		return (
			<Menu.Item style={styles.menuItem}>
				<div>
					<Image src={profile.picture} avatar />
					<span style={styles.name}>{profile.name}</span>
				</div>
				<div style={styles.emailAndLogout}>
					<span>{profile.email}</span>
					<span style={styles.logout}><Link to='/logout'>Logout</Link></span>
				</div>
			</Menu.Item>
		);
	}
}
