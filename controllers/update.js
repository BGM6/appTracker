import Application from '../models/Application.js';
import catchAsync from '../utils/catchAsync.js';

export const findApplication = catchAsync(async (req, res) => {
	try {
		const {id} = req.params;
		const foundApplication = await Application.findById(id);
		res.json(foundApplication);
	} catch (err) {
		console.error(err.message);
		res.status(400).json({msg: 'Sorry something went wrong, unable to retrieve application.', error: err.message});
	}
});

export const updateApplication = catchAsync(async (req, res) => {
	try {
		const {id} = req.params;
		const {company, position, location, link} = req.body;
		const date = Date.parse(req.body.date);
		const updateApplication = await Application.findByIdAndUpdate(id, {company, position, location, link, date}, {
			runValidators: true,
			new: true,
		});
		res.json(updateApplication);
	} catch (err) {
		console.error(err.message);
		res.status(400).json({msg: 'Sorry something went wrong, unable to update application.', error: err.message});
	}
});