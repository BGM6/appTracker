import express from 'express';
import auth from '../middleware/auth.js';
import {check} from 'express-validator';
import dotenv from 'dotenv';
import {
	getUserAndCheckCredential,
	loginUser,
	registerUser
} from '../controllers/auth.js';

dotenv.config();
const router = express.Router();

//Register user Route
// localhost:5000/api/auth/register
router.route('/register')
	.post(
		check('name', 'Name is required')
			.not()
			.isEmpty()
			.trim()
			.escape(),
		check('email', 'Email is required')
			.isEmail()
			.normalizeEmail(),
		check('password', 'Password must be at least 6 characters long')
			.isLength({min: 6})
			.exists()
			.trim()
			.escape(),
		registerUser);

router.route('/getuser')
	//GET ROUTE
	.get(auth, getUserAndCheckCredential);

router.route('/login')
	//POST ROUTE
	.post(
		check('email', 'Please enter your email')
			.isEmail()
			.trim()
			.normalizeEmail()
			.escape(),
		check('password', 'Please enter your password')
			.exists()
			.trim()
			.escape(),
		loginUser
	);

export default router;