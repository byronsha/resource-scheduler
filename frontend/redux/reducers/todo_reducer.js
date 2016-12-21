import {
	FETCH_ITEMS,
	UPDATE_ITEM,
	DELETE_ITEM,
	ADD_ITEM
} from '../actions/todos';

export default function(state = [], action) {
	switch(action.type) {
	case FETCH_ITEMS:
		return action.payload.data;
	case UPDATE_ITEM:
		return action.payload.data;
	case DELETE_ITEM:
		return action.payload.data;
	case ADD_ITEM:
		return action.payload.data;
	default:
		return state;
	}
}
