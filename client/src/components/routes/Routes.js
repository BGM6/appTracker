import React from 'react';
import {Route} from 'react-router-dom';

import Dashboard from '../dashboard/Dashboard';
import NewApplication from '../application/NewApplication';
import ListApplications from '../application/ListApplications';
import UpdateApplication from '../application/UpdateApplication';
import Login from '../auth/Login';
import Register from '../auth/Register';

const Routes = () => {
	return (
		<section>
				<div className="ui container mt-5">
					<Route path="/dashboard" component={Dashboard}/>
					<Route path="/app/myapps" component={ListApplications}/>
					<Route path="/auth/login" component={Login}/>
					<Route path="/auth/register" component={Register}/>
					<Route path="/app/update/:id" component={UpdateApplication}/>
					<Route path="/app/new" component={NewApplication}/>
				</div>
		</section>
	);
};

export default Routes;