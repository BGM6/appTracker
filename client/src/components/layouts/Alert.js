import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import './alert.css';

const Alert = ({alerts}) => {

	const renderAlerts = (
		alerts !== null && alerts.length > 0 && alerts.map(alert => {
			return (
				<div
					key={alert.id}
					className={`alert alert-${alert.alertType}`}
				>
					{alert.msg}
				</div>
			);
		})
	);

	return (
		<Fragment>
			{renderAlerts}
		</Fragment>
	);
};

const mapStateToProps = state => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);