import Application from '../models/Application.js';
import catchAsync from '../utils/catchAsync.js';

const showALlApplication = catchAsync(async (req, res) => {
	try {
		const applications = await Application.find();
		res.json(applications);
	} catch (err) {
		console.error(err.message);
		res.status(400).json({msg: 'Unable to retrieve applications.'});
	}
});

export default showALlApplication;

