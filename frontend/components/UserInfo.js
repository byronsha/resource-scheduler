import React, { Component, PropTypes as T } from 'react';

export default class UserInfo extends Component {
	render() {
		const profile = this.props.auth.getProfile();
		return (
			<div id="user-info">
				<img src={profile.picture}></img>
				<span>{profile.name}</span>
			</div>
		);
	}
}
