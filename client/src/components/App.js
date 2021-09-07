import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './layouts/Navbar';
import Dashboard from './dashboard/Dashboard';
import NewApplication from './application/NewApplication';
import ListApplications from './application/ListApplications';
import UpdateApplication from './application/UpdateApplication';
import Login from './auth/Login';
import Register from './auth/Register'
import Landing from './layouts/Landing';


const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Navbar/>
				<Route exact path="/" component={Landing}/>
				<div className="ui container mt-5">
					<Switch>
						<Route path="/dashboard" component={Dashboard}/>
						<Route path="/app/myapps" component={ListApplications}/>
						<Route path="/auth/login" component={Login}/>
						<Route path="/auth/register" component={Register}/>
						<Route path="/app/update/:id" component={UpdateApplication}/>
						<Route path="/app/new" component={NewApplication}/>
					</Switch>
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;