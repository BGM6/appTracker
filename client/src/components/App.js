import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

//Redux
import {Provider} from 'react-redux';
import store from '../store';
import {loadUser} from '../actions/auth';

import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Routes from './routes/Routes';
import Alert from './layouts/Alert';
import setAuthToken from '../utils/setAuthToken';

//checks User is auth every render
if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {

	useEffect(() => {
		//Since this is App.js
		// We have direct access to the store here
		//so we don't need to use connect
		store.dispatch(loadUser())
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar/>
					<Route exact path="/" component={Landing}/>
					<section className="ui container mt-5">
						<Alert/>
						<Switch>
							<Route component={Routes}/>
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;