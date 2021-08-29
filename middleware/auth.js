import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

function auth(req, res, next) {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({msg: 'No token provided'});
	}
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded.user;
		next();

	} catch (err) {
		console.error(err.message);
		res.status(401).json({msg: 'Invalid token'});
	}
}2

export default auth;

