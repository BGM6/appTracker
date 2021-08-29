import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateApplication = (props) => {
	const [company, setCompany] = useState('');
	const [position, setPosition] = useState('');
	const [location, setLocation] = useState('');
	const [link, setLink] = useState('');
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		const fillInputs = async () => {
			const response = await axios.get(`/app/${props.match.params.id}`);
			setCompany(response.data.company);
			setPosition(response.data.position);
			setLocation(response.data.location);
			setLink(response.data.link);
			setDate(new Date(response.data.date));
		};
		fillInputs();
	}, [props.match.params.id]);

	const updateApplication = async (id, app) => {
		try {
			await axios.put(`/app/update/${id}`, app);
		} catch (err) {
			console.error(err.message);
		}
	};

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
			date,
		};

		updateApplication(props.match.params.id, app);

		window.location = '/all';
	};

	return (
		<div>
			<h3>Edit Application</h3>
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

export default UpdateApplication;