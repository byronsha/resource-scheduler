import React, { Component } from 'react';
import { connect } from 'react-redux';
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
			width: 'calc(100vw - 250px)',
			maxHeight: '100vh',
			overflowY: 'auto'
		}

		return (
			<div>
				<div style={menuWrapperStyle}>
					<MainMenu {...this.props} />
				</div>
				<div style={contentWrapperStyle}>
					<Container fluid id='content-container'>
						{this.props.children}
					</Container>
				</div>
			</div>
		);
	}
}
