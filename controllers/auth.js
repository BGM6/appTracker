import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';

export const registerUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}
	try {
		const {name, email, password} = req.body;
		let user = await User.findOne({email});
		if (user) {
			res.status(400).json({errors: [{msg: 'User already exists'}]});
			return;
		}

		//create user, hash password, salt password, sign jwt token, return token
		user = new User({name, email, password});
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);

		const payload = {
			user: {
				id: user._id
			}
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{expiresIn: '48h'},
			(err, token) => {
				if (err) throw new Error('Failed to register');
				res.send({token});
			}
		);

		await user.save();

	} catch (err) {
		res.status(500).json({msg: 'Server Error occurred when trying to login'});
	}
};

export const getUserAndCheckCredential = async (req, res) => {
	try {
		//This route is use to load the user in the front-end
		//by comparing the user token to the token saved in localstorage
		const {id} = req.user;
		const user = await User.findById(id).select('-password');
		res.json(user);
	} catch (err) {
		res.status(500).send('Server Error');
	}
};

export const loginUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}

	try {
		const {email, password} = req.body;
		let user = await User.findOne({email});
		if (!user) {
			return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
		}

		const passwordIsMatch = await bcrypt.compare(password, user.password);

		if (!passwordIsMatch) {
			return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
		}

		const payload = {user: {id: user._id}};

		jwt.sign(
			payload,
			process.env.JWT_SECRET,
			{expiresIn: '5 days'},
			(err, token) => {
				if (err) throw err;
				res.json({token});
			}
		);
	} catch (err) {
		res.status(500).send('Server Error');
	}
};