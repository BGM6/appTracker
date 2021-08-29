import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
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
			</div>
		</nav>
	);
};

export default Navbar;