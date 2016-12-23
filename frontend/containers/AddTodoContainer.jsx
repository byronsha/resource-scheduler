import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todos';
import AddTodo from '../components/TodoList/AddTodo';

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
});

const mapDispatchToProps = ({
	addTodo
});

const AddTodoContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
