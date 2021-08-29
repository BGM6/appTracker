import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar';
import NewApplication from './NewApplication';
import ListApplications from './ListApplications';
import UpdateApplication from './UpdateApplication';


const App = () => {
	return (
		<Router>
			<Navbar/>
			<div className="ui container">
				<br/>
				<Route exact path="/all" component={ListApplications}/>
				<Route path="/app/update/:id" component={UpdateApplication}/>
				<Route path="/app/new" component={NewApplication}/>
			</div>
		</Router>
	);
};

export default App;