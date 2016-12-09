import React, { Component } from 'react';
import TodoList from '../containers/todo_list';
import MainNav from './MainNav';

export default class Main extends Component {
	render() {
		const auth = this.props.routes[0].auth;
		return (
			<div>
				<MainNav auth={auth} />
				<h1>To do list app...</h1>
				<TodoList />
			</div>
		);
	}
}
