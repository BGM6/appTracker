import React, {useState} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const NewApplication = () => {
	const [company, setCompany] = useState('');
	const [position, setPosition] = useState('');
	const [location, setLocation] = useState('');
	const [link, setLink] = useState('');
	const [date, setDate] = useState(new Date());

	const onChangeDate = date => {
		setDate(date);
	};

	const onFormSubmit = e => {
		e.preventDefault();
		const app = {
			company,
			position,
			location,
			link,
			date
		};
		axios.post('/app/new', app)
			.then(res => console.log(res))
			.catch(err => console.error(err.message));

		window.location = '/applications';
	};
	return (
		<div>
			<h3>Add New Application</h3>
			<form onSubmit={onFormSubmit}>
				<div className="form-group">
				</div>
				<div className="form-group">
					<label>Company: </label>
					<input
						type="text"
						required
						className="form-control"
						value={company}
						onChange={e => setCompany(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Position: </label>
					<input
						type="text"
						required
						className="form-control"
						value={position}
						onChange={e => setPosition(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Location: </label>
					<input
						type="text"
						required
						className="form-control"
						value={location}
						onChange={e => setLocation(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Job Post URL: </label>
					<input
						type="text"
						required
						className="form-control"
						value={link}
						onChange={e => setLink(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Date: </label>
					<div>
						<DatePicker
							selected={date}
							onChange={onChangeDate}
						/>
					</div>
				</div>
				<br/>
				<div className="form-group">
					<input type="submit" value="Submit" className="btn btn-primary"/>
				</div>
			</form>
		</div>
	);
};

export default NewApplication;