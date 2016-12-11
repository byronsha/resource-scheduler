import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import MainMenu from './MainMenu';

export default class AppHome extends Component {
	render() {
		const menuWrapperStyle = {
			borderRadius: '0',
			minHeight: '100vh',
			width: '250px',
			position: 'absolute'
		}

		const contentWrapperStyle = {
			marginLeft: '250px',
			position: 'absolute'
		}

		return (
			<div>
				<div style={menuWrapperStyle}>
					<MainMenu {...this.props} />
				</div>
				<div style={contentWrapperStyle}>
					<Container fluid>
						{this.props.children}
					</Container>
				</div>
			</div>
		);
	}
}
