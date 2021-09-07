import './landing.css';
import React from 'react';
import {Link, Route} from 'react-router-dom';

const Landing = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="header">Welcome to appTracker</h1>
					<p className="lead">A place where you can keep track of all your job applications</p>
					<div>
						<Link to="/auth/register" className="btn btn-primary btn-register">Register</Link>
						<Link to="/auth/login" className="btn btn-warning btn-login">Login</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Landing;