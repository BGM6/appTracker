import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {validationResult} from 'express-validator';
import catchAsync from '../utils/catchAsync.js';

export const registerUser = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}
	try {
		const {name, email, password} = req.body;
		let user = await User.findOne({email});
		if (user) res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});

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
		console.error(err.message);
		res.status(500).json({msg: 'Server Error occurred when trying to login'});
	}
};

export const getUserAndCheckCredential = catchAsync(async (req, res) => {
	const {id} = req.user;
	const user = await User.findById(id).select('-password');
	if (!user) {
		return res.status(400).json({msg: 'Invalid Credentials'});
	}
	res.send(user);
});

export const loginUser = catchAsync(async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({errors: errors.array()});
	}

	const {email, password} = req.body;
	const user = await User.findOne({email});
	if (!user) {
		return res.status(400).json({msg: [{msg: 'Invalid credentials'}]});
	}

	const passwordIsMatch = await bcrypt.compare(password, user.password);
	if (!passwordIsMatch) {
		return res.status(400).json({msg: [{msg: 'Invalid credentials'}]});
	}

	const payload = {user: {id: user._id}};

	jwt.sign(
		payload,
		process.env.JWT_SECRET,
		{expiresIn: '48h'},
		(err, token) => {
			if (err) {
				console.error(err.message);
			} else {
				res.send({token});
			}
		}
	);
});