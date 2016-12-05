import React, { Component } from 'react';
import { Link } from 'react-router';
import TodoList from '../containers/todo_list'

export default class Main extends Component {
	render() {
		return (
			<div>
				<Link to='/logout'>Logout</Link>
				<h1>To do list app</h1>
				<TodoList />
			</div>
		)
	}
}
