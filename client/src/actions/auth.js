import axios from 'axios';
import {setAlert} from './alert';
import {REGISTER_SUCCESS, REGISTER_FAIL} from './types';

//Register User
export const register = ({name, email, password}) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({name, email, password});

	try {
		const response = await axios.post('/api/register', body, config);

		dispatch({
			type: REGISTER_SUCCESS,
			//Returns the token
			payload: response.data
		});

	} catch (err) {
		//err response is from the backend with express-validator
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: REGISTER_FAIL
		});
	}
};