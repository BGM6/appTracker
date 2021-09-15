import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import NewApplication from '../application/NewApplication';
import ListApplications from '../application/ListApplications';
import UpdateApplication from '../application/UpdateApplication';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Routes = () => {
	return (
		<section className="ui container mt-5">
			<Switch>
				<Route path="/dashboard" component={Dashboard}/>
				<Route path="/applications" component={ListApplications}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/update/:id" component={UpdateApplication}/>
				<Route path="/new" component={NewApplication}/>
			</Switch>
		</section>
	);
};

export default Routes;