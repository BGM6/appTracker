import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const {email, password} = formData;

	const formDataHandler = event => {
		setFormData({...formData, [event.target.name]: event.target.value});
	};

	const formSubmitHandler = async event => {
		event.preventDefault();
		try {
			const user = {email, password};
			const config = {headers: {'Content-Type': 'application/json'}};
			const body = JSON.stringify(user);
			const response = await axios.post('/api/login', body, config);
			console.log(response.data);
		} catch (err) {
			console.error(err.message);
		}
		setFormData({email: '', password: ''});
	};

	return (
		<div className="card-body">
			<h4 className="card-title">Login</h4>
			<form
				className="my-login-validation"
				noValidate=""
				onSubmit={formSubmitHandler}
			>

				<div className="form-group">
					<label htmlFor="email">E-Mail Address</label>
					<input
						id="email"
						type="email"
						className="form-control"
						name="email"
						value={email}
						onChange={formDataHandler}
						required/>
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
						onChange={formDataHandler}
						required data-eye=""
					/>
					<div className="invalid-feedback">
						Password is required
					</div>
				</div>

				<div className="form-group m-0 register-btn-div">
					<button
						type="submit"
						className="btn btn-warning btn-block register-btn">
						Login
					</button>
				</div>
				<div className="mt-4 text-center">
					Don't have an account? <Link to="/auth/register">Register</Link>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;