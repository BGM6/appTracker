import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

function isLoggedIn(req, res, next) {
	const token = req.header('x-auth-token');

	if (!token) {
		return res.status(401).json({msg: 'No token provided'});
	}
	try {
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				return res.status(401).json({msg: 'Token is not valid'});
			} else {
				req.user = decoded.user;
				next();
			}
		});

	} catch (err) {
		console.error(err.message);
		res.status(500).json({msg: 'Server Error'});
	}
}

export default isLoggedIn;

