import React, { Component } from 'react';

export default class AppHome extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}
