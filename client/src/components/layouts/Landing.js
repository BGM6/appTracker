import React, {useEffect, useState, Fragment} from 'react';
import {Link} from 'react-router-dom';

import Modal from '../UI/Modal';

import './landing.css';

const Landing = () => {
	const [showModal, setShowModal] = useState(null);

	useEffect(() => {
		setShowModal({
			title: 'For demo purposes',
			message: <div>Hello there! If you would like to demo the application without having to register please use the credentials below:
				<p/>
				<h5>Email: <span>demologin@demo.com</span></h5>
				<h5>Password: <span>demopassword9</span></h5>
			</div>
		});
	}, []);

	const confirmMessage = () => {
		setShowModal(null);
	};
	return (
		<Fragment>
			{showModal && <Modal onConfirm={confirmMessage} title={showModal.title} message={showModal.message}/>}
			<section className="landing">
				<div className="dark-overlay">
					<div className="landing-inner">
						<h1 className="header">Welcome to appTracker</h1>
						<p className="lead">A place where you can keep track of all your job applications</p>
						<div>
							<Link to="/register" className="btn btn-primary btn-register">Register</Link>
							<Link to="/login" className="btn btn-warning btn-login">Login</Link>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Landing;