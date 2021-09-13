import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';


const RegisterForm = ({setAlert}) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [matchPassword, setMatchPassword] = useState('');

	const onFormSubmit = async (event) => {
		event.preventDefault();
		if (password !== matchPassword) {
			return setAlert('Password do not match', 'danger');
		}
		const newUser = ({name, email, password});
		const config = {headers: {'Content-Type': 'application/json'}};
		const body = JSON.stringify(newUser);
		try {
			const response = await axios.post('/api/register', body, config);
			console.log(response.data);
		} catch (err) {
			console.log(err);
		}
		setName('');
		setEmail('');
		setPassword('');
		setMatchPassword('');
	};

	return (
		<div className="card-body">
			<h4 className="card-title">Register</h4>
			<form className="my-login-validation" noValidate="" onSubmit={onFormSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						id="username"
						type="text"
						className="form-control"
						name="username"
						value={name}
						onChange={event => setName(event.target.value)}
						required autoFocus
					/>
					<div className="invalid-feedback">
						What's your name?
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="email">E-Mail Address</label>
					<input
						id="email"
						type="email"
						className="form-control"
						name="email"
						value={email}
						onChange={event => setEmail(event.target.value)}
						required
					/>
					<div className="invalid-feedback">
						Your email is invalid
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						className="form-control"
						name="password"
						value={password}
						onChange={event => setPassword(event.target.value)}
						required data-eye
					/>
					<div className="invalid-feedback">
						Password is required
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password2">Re-Enter Password</label>
					<input
						id="password2"
						type="password"
						className="form-control"
						name="password"
						value={matchPassword}
						onChange={event => setMatchPassword(event.target.value)}
						required data-eye
					/>
					<div className="invalid-feedback">
						Password is required
					</div>
				</div>

				<div className="form-group m-0 register-btn-div">
					<button
						type="submit"
						className="btn btn-primary btn-block register-btn">
						Register
					</button>
				</div>
				<div className="mt-4 text-center">
					Already have an account? <Link to="/auth/login">Login</Link>
				</div>
			</form>

		</div>
	);
};

export default connect(null, {setAlert})(RegisterForm);