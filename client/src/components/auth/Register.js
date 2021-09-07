import './auth.css';
import React from 'react';

import RegisterForm from './RegisterForm';

const Register = () => {

	return (
		<div className="test">
			<div className="my-login-page">
				<section className="h-100">
					<div className="container h-100">
						<div className="row justify-content-md-center h-100">
							<div className="card-wrapper">
								<div className="card fat ">
									<RegisterForm/>
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