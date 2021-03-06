import {
	FETCH_TODOS,
	UPDATE_TODO,
	DELETE_TODO,
	ADD_TODO
} from '../actions/todos';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_TODOS:
		return action.payload.data;
	case UPDATE_TODO:
		return action.payload.data;
	case DELETE_TODO:
		return action.payload.data;
	case ADD_TODO:
		return action.payload.data;
	default:
		return state;
	}
}
