import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

	const authLinks = (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{padding: '1rem', zIndex: '100'}}>
			<Link to="/dashboard" className="navbar-brand"><i className="fas fa-edit" style={{fontSize: '2rem'}}/></Link>
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/applications" className="nav-link">Applications</Link>
					</li>
					<li className="navbar-item">
						<Link to="/new" className="nav-link">Add</Link>
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
							<Link to="/" onClick={logout} className="nav-link menu-item">Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);

	const guestLinks = (
		<nav className="navbar navbar-dark bg-primary navbar-expand-lg" style={{padding: '1rem', zIndex: '100'}}>
			<Link to="/" className="navbar-brand"><i className="fas fa-edit" style={{fontSize: '2rem'}}/></Link>
			<div className="collapse navbar-collapse">
				<div className="collapse navbar-collapse flex-grow-1 text-right">
					<ul className="navbar-nav ms-auto flex-nowrap">
						<li className="navbar-item">
							<Link to="#" className="nav-link menu-item">About</Link>
						</li>
						<li className="navbar-item">
							<Link to="#!" className="nav-link menu-item">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);


	return (
		<Fragment>
			{!loading && (<React.Fragment>{isAuthenticated ? authLinks : guestLinks}</React.Fragment>)}
		</Fragment>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});
export default connect(mapStateToProps, {logout})(Navbar);