import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const ADD_TODO = 'ADD_TODO'

export function fetchTodos() {
	const request = axios.get(`/todos/api/v1/todos`);

	return {
		type: FETCH_TODOS,
		payload: request
	};
}

export function updateTodo(e, todo) {
	todo.text = e.target.value;
	
	const request = axios.put(`/todos/api/v1/todos/${todo.id}`, todo);

	return {
		type: UPDATE_TODO,
		payload: request
	};
}

export function deleteTodo(todoId) {
	const request = axios.delete(`/todos/api/v1/todos/${todoId}`);

	return {
		type: DELETE_TODO,
		payload: request
	};
}

export function addTodo() {
	const todo = {
		text: '',
		complete: false
	};

	const request = axios.post(`/todos/api/v1/todos`, todo);

	return {
		type: ADD_TODO,
		payload: request
	};
}
