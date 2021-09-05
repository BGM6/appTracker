import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './layouts/Navbar';
import Dashboard from './Dashboard/Dashboard';
import NewApplication from './Application/NewApplication';
import ListApplications from './Application/ListApplications';
import UpdateApplication from './Application/UpdateApplication';
import Login from './Auth/Login';
import Register from './Auth/Register'
import Landing from './Landing/Landing';


const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Navbar/>
				<Route exact path="/" component={Landing}/>
				<div className="ui container mt-5">
					<Switch>
						<Route path="/dashboard" component={Dashboard}/>
						<Route path="/all" component={ListApplications}/>
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