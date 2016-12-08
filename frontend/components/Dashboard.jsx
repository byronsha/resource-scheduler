import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import TodoList from '../containers/todo_list';
import MainNav from './MainNav';

export default class Main extends Component {
	render() {
		const auth = this.props.routes[0].auth;
		return (
			<div>
				<MainNav auth={auth} />
				<Container>
					<h1>To do list app</h1>
					<TodoList />
				</Container>
			</div>
		);
	}
}
