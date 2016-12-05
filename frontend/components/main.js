import React, { Component } from 'react';
import { Link } from 'react-router';
import TodoList from '../containers/todo_list'

export default class Main extends Component {
	render() {
		return (
			<div>
				<h1>To do list app</h1>
				<TodoList />
				<ul role="nav">
					<li><Link to="/foo">Foo</Link></li>
					<li><Link to="/bar">Bar</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}
