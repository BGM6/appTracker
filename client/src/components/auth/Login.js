import './auth.css';
import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
	return (
		<div className="my-login-page">
			<section className="h-100 ">
				<div className="container h-100 ">
					<div className="row justify-content-md-center h-100">
						<div className="card-wrapper">

							<div className="card fat">
								<div className="card-body">
									<h4 className="card-title">Login</h4>
									<form method="POST" className="my-login-validation" noValidate="">

										<div className="form-group">
											<label htmlFor="email">E-Mail Address</label>
											<input id="email" type="email" className="form-control" name="email" required/>
											<div className="invalid-feedback">
												Your email is invalid
											</div>
										</div>

										<div className="form-group">
											<label htmlFor="password">Password</label>
											<input id="password" type="password" className="form-control" name="password" required data-eye/>
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
							</div>
							<div className="footer">
								Copyright &copy; 2021 &mdash; Bryan Guilas
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;