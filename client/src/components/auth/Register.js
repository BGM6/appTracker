import './auth.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [matchPassword, setMatchPassword] = useState('');

	const onFormSubmit = async (e) => {
		e.preventDefault();
		if (password !== matchPassword) {
			alert('Password do not match');
		} else {
			const newUser = ({
				name,
				email,
				password
			});
			try {
				const config = {
					headers: {
						'Content-Type': 'application/json'
					}
				};
				const body = JSON.stringify(newUser);
				const response = await axios.post('/api/register', body, config);
				console.log(response);
			} catch (err) {
				console.log(err);
			}
		}
		setName('');
		setEmail('');
		setPassword('');
		setMatchPassword('');
	};

	return (
		<div className="test">
			<div className="my-login-page">
				<section className="h-100">
					<div className="container h-100">
						<div className="row justify-content-md-center h-100">
							<div className="card-wrapper">
								<div className="card fat ">
									<div className="card-body">
										<h4 className="card-title">Register</h4>

										<form method="POST" className="my-login-validation" noValidate="" onSubmit={onFormSubmit}>
											<div className="form-group">
												<label htmlFor="name">Name</label>
												<input
													id="username"
													type="text"
													className="form-control"
													name="username"
													value={name}
													onChange={e => setName(e.target.value)}
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
													onChange={e => setEmail(e.target.value)}
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
													onChange={e => setPassword(e.target.value)}
													required data-eye
												/>
												<div className="invalid-feedback">
													Password is required
												</div>
											</div>

											<div className="form-group">
												<label htmlFor="password">Re-Enter Password</label>
												<input
													id="password"
													type="password"
													className="form-control"
													name="password"
													value={matchPassword}
													onChange={e => setMatchPassword(e.target.value)}
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
								</div>
								<div className="footer">
									Copyright &copy; 2021 &mdash; Bryan Guilas
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Register;