import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute,  browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './store';
import Main from './containers/main';
import Summary from './containers/summary';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
    	<Router history = {history}>
	   	  <Route path = "/" component = {App}>
	   	   	<Route path = "/summary" component = {Summary} />
	   	   	<IndexRoute component = {Main} />
	   	  </Route>
	   	 </Router>
    </Provider>,
document.getElementById('root'));
registerServiceWorker();