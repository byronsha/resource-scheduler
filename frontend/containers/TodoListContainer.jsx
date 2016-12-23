import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
	fetchTodos,
	updateTodo,
	deleteTodo
} from '../redux/actions/todos';
import TodoList from '../components/TodoList/Todolist';
// import TodoItem from '../components/todo_item'
// import NewTodo from '../components/new_todo';

export class TodoListContainer extends Component {
	componentWillMount() {
		this.props.fetchTodos();
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = ({
	fetchTodos,
	updateTodo,
	deleteTodo
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);
