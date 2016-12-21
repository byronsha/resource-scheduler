import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
	fetchItems,
	updateItem,
	deleteItem,
	addItem
} from '../redux/actions/todos';
import TodoItem from '../components/todo_item'
import NewTodo from '../components/new_todo';

export class TodoList extends Component {
	componentWillMount() {
		this.props.fetchItems();
	}

	renderItems() {
		if (this.props.todos.length === 0) {
			return(
			<li className='list-group-item todo-item empty-todo'>
				Add a todo item to get started...
			</li>
			)
		}
		return this.props.todos.map((todo) => {
			return (
				<TodoItem
					key={todo.id}
					todo={todo}
					deleteTodo={this.deleteTodo.bind(this)}
					updateTodo={this.updateTodo.bind(this)}
				/>
			)
		})
	}

	render() {
		return (
			<Card color='teal' fluid>
				<Card.Content>
					<Card.Header>
						My todos
					</Card.Header>
				</Card.Content>
				{this.renderItems()}
				<NewTodo
					addTodo={this.addTodo.bind(this)}
				/>
			</Card>
		);
	}

	updateTodo(todo, type) {
		if (type === 'checkbox') {
			const completeChange = todo.complete ? false : true;
			const updatedItem = {
				id: todo.id,
				text: todo.text,
				complete: completeChange
			};
			this.props.updateItem(updatedItem);
		} else if (type === 'text') {
			this.props.updateItem(todo);
		}
	}

	deleteTodo(todoId) {
		this.props.deleteItem(todoId);
	}

	addTodo() {
		const todo = {
			text: '',
			complete: false
		};

		this.props.addItem(todo);
	}
}

const mapStateToProps = (state) => ({
	todos: state.todos,
	currentUser: state.currentUser
});

const mapDispatchToProps = ({
	fetchItems,
	updateItem,
	deleteItem,
	addItem
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
