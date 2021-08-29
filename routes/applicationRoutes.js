import express from 'express';
import {findApplication, updateApplication} from '../controllers/update.js';
import showALlApplication from '../controllers/show.js';
import createNewApplication from '../controllers/new.js';
import deleteApplication from '../controllers/delete.js';
import showUserApps from '../controllers/showUserApps.js';
import auth from '../middleware/auth.js';

const router = express.Router();

//Populate and show apps that belong to the user only
//Show all app - localhost:5000/api/apps - GET request
router.route('/all')
	.get(showALlApplication);

router.route('/myapps')
	.get(showUserApps);

//Create a new app = localhost:5000/api/app/new - POST request
router.route('/new')
	.post(auth, createNewApplication);

//Get a specific application to update /api/app/:id - GET REQUEST
router.route('/:id')
	.get(findApplication);

//Update app =  localhost:5000/api/app/update/:id - PUT request
router.route('/update/:id')
	.put(updateApplication);

//Delete app =  localhost:5000/api/app/delete/:id - DELETE request
router.route('/delete/:id')
	.delete(deleteApplication);

export default router;