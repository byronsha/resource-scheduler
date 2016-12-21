import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TodoList from '../containers/todo_list';

export default class Dashboard extends Component {
	render() {
		return (
			<Grid padded>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<TodoList />
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<TodoList />
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<TodoList />
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={4}>
					Hello world!
				</Grid.Column>
			</Grid>
		);
	}
}
