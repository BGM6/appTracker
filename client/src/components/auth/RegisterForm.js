import React, {useState, Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';

import Modal from '../UI/Modal';

const RegisterForm = ({setAlert, register, isAuthenticated}) => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [matchPassword, setMatchPassword] = useState('');
	const [modalError, setModalError] = useState(null);

	const onFormSubmit = async (event) => {
		event.preventDefault();
		if (password !== matchPassword) {
			setModalError({
				title: 'Registration failed',
				message: 'Passwords do not match. Please try again.'
			});
		} else {
			register({name, email, password});
			setName('');
			setEmail('');
			setPassword('');
			setMatchPassword('');
		}
	};

	const errorHandler = () => {
		setModalError(null);
		setPassword('');
		setMatchPassword('');
	};

	if (isAuthenticated) {
		return <Redirect to="/applications"/>;
	}

	return (
		<Fragment>
			{modalError && <Modal title={modalError.title} message={modalError.message} onConfirm={errorHandler}/>}
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
						Already have an account? <Link to="/login">Login</Link>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {setAlert, register})(RegisterForm);