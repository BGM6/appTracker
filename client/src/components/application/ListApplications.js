import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Applications from './Applications';
import setAuthToken from '../../utils/setAuthToken';
import store from '../../store';
import {loadUser} from '../../actions/auth';

const ListApplications = () => {
	const [applications, setApplications] = useState([]);

	useEffect(() => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		store.dispatch(loadUser());
	});

	useEffect(() => {
		const getApps = async () => {
			const response = await axios.get('/app/myapps');
			setApplications(response.data);
		};
		getApps();
	}, []);

	const deleteApplication = async (id) => {
		await axios.delete(`/app/delete/${id}`);
		const remainingApps = applications.filter(app => app._id !== id);
		setApplications(remainingApps);
	};

	const renderApplication = () => {
		return applications.map(app => {
			return <Applications application={app} deleteApp={deleteApplication} key={app._id}/>;
		});
	};

	return (
		<div>
			<h3>Applications</h3>
			<table className="table">
				<thead className="thead-light">
				<tr>
					<th>Company</th>
					<th>Position</th>
					<th>Location</th>
					<th>Job Post</th>
					<th>Date</th>
					<th><i className="fas fa-pen-square fa-lg"/> | <i className="fas fa-trash-alt fa-lg"/></th>
				</tr>
				</thead>
				<tbody>
				{renderApplication()}
				</tbody>
			</table>
		</div>
	);
};

export default ListApplications;