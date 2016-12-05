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
import Logout from './components/Logout';
import AppHome from './components/AppHome';
import Dashboard from './components/Dashboard';

import reducers from './redux/reducers';

const logger = createLogger({collapsed: true});
const createStoreWithMiddleware = applyMiddleware(promise, logger)(createStore);

const store = createStoreWithMiddleware(reducers);
const history = syncHistoryWithStore(browserHistory, store);

const auth = new AuthService('NjWTftEdyJcYGDoMujyLZeeDwfcMvJPH', 'byronsha.auth0.com');
const requireAuth = (nextState, replace) => {
	if (!auth.loggedIn()) {
		replace({ pathname: '/login' })
	}
};

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Route path='/' component={AppHome} auth={auth}>
				<IndexRedirect to="/dashboard" />
				<Route path="/dashboard" component={Dashboard} onEnter={requireAuth} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));
