import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../../actions/auth';

const LoginForm = ({login, isAuthenticated}) => {

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
		console.log(login(email, password));
		setFormData({email: '', password: ''});
	};

	if (isAuthenticated) {
		return <Redirect to="/applications"/>;
	}

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
					Don't have an account? <Link to="/register">Register</Link>
				</div>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {login})(LoginForm);