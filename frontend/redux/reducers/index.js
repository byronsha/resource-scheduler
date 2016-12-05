import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import TodoReducer from './todo_reducer'

const rootReducer = combineReducers({
	todos: TodoReducer,
	routing: routerReducer
});

export default rootReducer;
