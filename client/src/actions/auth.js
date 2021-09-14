import axios from 'axios';
import {setAlert} from './alert';
import setAuthToken from '../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT
} from './types';


//Load User
//We need to check if theres a token in localstorage
//We do this by setting a global header by creating
// setAuthToken.js and set x-auth-token
export const loadUser = () => async dispatch => {
	//check if there is a token in localstorage
	//This sets the header with the token
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const response = await axios.get('/api/getuser');

		dispatch({
			type: USER_LOADED,
			payload: response.data
		});

		dispatch(loadUser);
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

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

		//This will loadUser right after submitting registration
		dispatch(loadUser());

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

//Login User
export const login = (email, password) => async dispatch => {
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	};

	const body = JSON.stringify({email, password});

	try {
		const response = await axios.post('/api/login', body, config);

		dispatch({
			type: LOGIN_SUCCESS,
			//Returns the token
			payload: response.data
		});

		//This will loadUser right after submitting
		dispatch(loadUser());

	} catch (err) {
		//err response is from the backend with express-validator
		const errors = err.response.data.errors;
		if (errors) {
			errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
		}
		dispatch({
			type: LOGIN_FAIL
		});
	}
};

//Logout
export const logout = () => dispatch => {
	dispatch({
		type: LOGOUT
	})
};