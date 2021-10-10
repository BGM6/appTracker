import express from 'express';
import connectDB from './config/db.js';
import ExpressError from './utils/ExpressError.js';
import applicationRoute from './routes/applicationRoutes.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';

const PORT = process.env.PORT || 5000;
const app = express();

//MongoConnection
connectDB()
	.then(() => console.log('MongoDB connected...'));

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.use('/app', applicationRoute);
app.use('/api', authRoutes);

app.all('*', (req, res, next) => {
	next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
	const {statusCode = 500} = err;
	if (!err.message) err.message = 'Oh No, Something Went Wrong!';
	if (err) throw new Error(`${err.message}, status code: ${statusCode}`);
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});