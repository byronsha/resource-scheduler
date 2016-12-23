import React from 'react';
import { connect } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/actions/todos';
import TodoList from '../components/TodoList/Todolist';

const mapStateToProps = (state) => {
	console.log('-- TEST FROM TODO LIST CONTAINER --')
	console.log(state);
	return {
		todos: state.todos,
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = ({
	updateTodo,
	deleteTodo
});

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoListContainer;
