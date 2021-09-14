import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

	const authLinks = (
		<div className="collapse navbar-collapse">
			<ul className="navbar-nav mr-auto">
				<li className="navbar-item">
					<Link to="/app/myapps" className="nav-link">Applications</Link>
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
						<Link to="#!" className="nav-link menu-item">Contact</Link>
					</li>
					<li className="navbar-item">
						<Link to="/" onClick={logout} className="nav-link menu-item">logout</Link>
					</li>
				</ul>
			</div>
		</div>
	);

	const guestLinks = (
		<div className="collapse navbar-collapse">
			<div className="collapse navbar-collapse flex-grow-1 text-right">
				<ul className="navbar-nav ms-auto flex-nowrap">
					<li className="navbar-item">
						<Link to="/auth/register" className="nav-link menu-item">Register</Link>
					</li>
					<li className="navbar-item">
						<Link to="/auth/login" className="nav-link menu-item">Login</Link>
					</li>
				</ul>
			</div>
		</div>
	);


	return (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{padding: '1rem', zIndex: '100'}}>
			<Link to="/" className="navbar-brand"><i className="fas fa-edit" style={{fontSize: '2rem'}}/></Link>
			{!loading && (<React.Fragment>{isAuthenticated ? authLinks : guestLinks}</React.Fragment>)}
		</nav>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(mapStateToProps, {logout})(Navbar);