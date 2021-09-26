import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Applications = ({application, confirmDeleteHandler}) => {

	return (
		<Fragment>
			<tr>
				<td>{application.company}</td>
				<td>{application.position}</td>
				<td>{application.location}</td>
				<td><a href={application.link} target="_blank" rel="noreferrer">Link</a></td>
				<td>{application.date.substring(0, 10)}</td>
				<td>
					<Link to={`/update/${application._id}`}><i className="fas fa-pen-square fa-lg"/> </Link>
					| <a type="button" onClick={confirmDeleteHandler}>
					<i className="fas fa-trash-alt fa-lg" style={{color: 'red'}}/>
				</a>
				</td>
			</tr>
		</Fragment>
	);
};

export default Applications;