import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodoContainer from '../containers/AddTodoContainer';

export default class Dashboard extends Component {
	render() {
		return (
			<Grid padded>
				<Grid.Column mobile={16} tablet={16} computer={8}>
					<div className="ui fluid card">
						<div className="content">
							<div className="header">My Todo List</div>
							<div className="description">
								<TodoListContainer />
								<AddTodoContainer />
							</div>
						</div>
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={4}>
					Something
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={4}>
					Something
				</Grid.Column>
			</Grid>
		);
	}
}
