import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import MainMenu from './MainMenu';

export default class AppHome extends Component {
	render() {
		const menuWrapperStyle = {
			position: 'absolute',
			width: '250px',
			minHeight: '100vh',
			borderRadius: '0px'
		}

		const contentWrapperStyle = {
			position: 'absolute',
			marginLeft: '250px',
			padding: '10px'
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
