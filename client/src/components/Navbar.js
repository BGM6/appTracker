import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

	// const authLinks = (
	//
	// )
	return (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{padding: '1rem'}}>
			<Link to="/all" className="navbar-brand"><i className="fas fa-edit" style={{fontSize: '2rem'}}/></Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/all" className="nav-link">Applications</Link>
					</li>
					<li className="navbar-item">
						<Link to="/app/new" className="nav-link">Add</Link>
					</li>
				</ul>
				<div className="collapse navbar-collapse flex-grow-1 text-right">
					<ul className="navbar-nav ms-auto flex-nowrap">
						<li className="navbar-item">
							<Link to="#" className="nav-link menu-item">About</Link>
						</li>
						<li className="navbar-item">
							<Link to="#" className="nav-link menu-item">Contact</Link>
						</li>
						<li className="navbar-item">
							<Link to="#" className="nav-link menu-item">Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;