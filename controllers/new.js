import Application from '../models/Application.js';
import User from '../models/User.js';

const createNewApplication = async (req, res) => {
	try {

		await User.findById(req.user.id).select('-password');

		const {company, position, location, link} = req.body;
		const date = Date.parse(req.body.date);

		const newApplication = new Application({
			company,
			position,
			location,
			link,
			date,
			user: req.user.id
		});

		await newApplication.save();
		res.json(newApplication);

	} catch (err) {
		console.error(err.message);
		res.json({msg: 'Something went wrong, unable to create a new application.', error: err.message});
	}
};

export default createNewApplication;