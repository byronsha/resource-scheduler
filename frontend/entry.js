import React from 'react';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'

import AuthService from './utils/AuthService';
import Login from './components/Login';
import AppHome from './components/AppHome';
import Dashboard from './components/Dashboard';

import reducers from './redux/reducers';
import {
	fetchTodos
} from './redux/actions/todos';

const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const auth = new AuthService(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN);
const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		replace({ pathname: '/login' })
	}
};

const Root = () => (
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={AppHome} auth={auth}>
				<IndexRedirect to="/dashboard" />
				<Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
			</Route>
			<Route path="/login" component={Login} auth={auth} />
		</Router>
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
	store.dispatch(fetchTodos());
});
