import React from 'react';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux'

import AuthService from './utils/AuthService';
import Main from './components/main';
import Foo from './components/foo';
import Bar from './components/bar';
import Login from './components/Login';
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
			<Route path='/' component={Main} auth={auth}>
				<Route path="/foo" component={Foo} onEnter={requireAuth}/>
				<Route path="/bar" component={Bar}/>
				<Route path="/login" component={Login}/>
			</Route>
		</Router>
	</Provider>
), document.getElementById('app'));
