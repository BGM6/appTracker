import Application from '../models/Application.js';
import catchAsync from '../utils/catchAsync.js';

const deleteApplication = catchAsync(async (req, res) => {
	try {
		const {id} = req.params;
		await Application.findByIdAndDelete(id);
		res.json({msg: 'application deleted successfully.'});
	} catch (err) {
		console.error(err.message);
		res.status(400).json({msg: 'Sorry something went wrong, unable to delete application.', error: err.message});
	}
});

export default deleteApplication;