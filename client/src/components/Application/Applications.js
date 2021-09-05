import React from 'react';
import {Link} from 'react-router-dom';

const Applications = ({application, deleteApp}) => (
	<tr>
		<td>{application.company}</td>
		<td>{application.position}</td>
		<td>{application.location}</td>
		<td><a href={application.link} target="_blank" rel="noreferrer">Link</a></td>
		<td>{application.date.substring(0, 10)}</td>
		<td>
			<Link to={`/app/update/${application._id}`}><i className="fas fa-pen-square fa-lg"/></Link> | <a href="#" onClick={() => {
			deleteApp(application._id);
		}}><i className="fas fa-trash-alt fa-lg" style={{color: 'red'}}/></a>
		</td>
	</tr>
);

export default Applications;