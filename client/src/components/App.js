import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

//Redux
import {Provider} from 'react-redux';
import store from '../store';

import Navbar from './layouts/Navbar';
import Landing from './layouts/Landing';
import Routes from './routes/Routes';
import Alert from './layouts/Alert';

const App = () => {
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