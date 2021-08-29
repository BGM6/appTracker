import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
		},
		company: {
			type: String,
			required: true,
		},

		position: {
			type: String,
			required: true,
		},

		location: {
			type: String,
			required: true,
		},
		link: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			required: true,
		}
	},
	{
		timestamps: true,
	});

const Application = mongoose.model('Application', ApplicationSchema);

export default Application;