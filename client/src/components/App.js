import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import NewApplication from './NewApplication';
import ListApplications from './ListApplications';
import UpdateApplication from './UpdateApplication';
import Landing from './Landing';


const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Navbar/>
				<Route exact path="/" component={Landing}/>
				<div className="ui container">
					<br/>
					<Switch>
						<Route exact path="/all" component={ListApplications}/>
						<Route path="/app/update/:id" component={UpdateApplication}/>
						<Route path="/app/new" component={NewApplication}/>
					</Switch>
				</div>
			</Router>
		</React.Fragment>
	);
};

export default App;