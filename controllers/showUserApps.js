import Application from '../models/Application.js';
import catchAsync from '../utils/catchAsync.js';

const showUserApps = catchAsync(async (req, res) => {
	try {
		const applications = await Application.find({
			user: req.user.id,
		}).populate('user');
		res.json(applications);
	} catch (err) {
		res.status(500).json({msg: 'Server Error', error: err.message});
	}
});

export default showUserApps;