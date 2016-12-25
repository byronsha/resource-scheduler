import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodoContainer from '../containers/AddTodoContainer';

class Dashboard extends Component {
	render() {
		return (
			<Grid padded>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					<table className="ui table">
				    <thead>
				      <tr>
								<th colSpan="3">
									<h3><i className="tasks icon"></i> Task List</h3>
								</th>
				      </tr>
				      <tr>
								<th>Description</th>
								<th>{'Done?'}</th>
								<th></th>
				      </tr>
				    </thead>
						<TodoListContainer />
						<AddTodoContainer />
					</table>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={4}>
					<table className="ui table">
						<thead>
							<tr>
								<th>
									<h3><i className="sticky note outline icon"></i> Notes</h3>
								</th>
							</tr>
						</thead>
				    <tbody>
							<tr>
								<td>
									<div className="ui form">
										<div className="field">
											<textarea placeholder="Enter some notes..."></textarea>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					Something
				</Grid.Column>
			</Grid>
		);
	}
}

export default Dashboard;
