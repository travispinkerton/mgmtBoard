const trailsRouter = require('express').Router();

const {
	createTrail,
    getTrail
	
} = require('../db/trails');

trailsRouter.get('/', async (req, res, next) => {
	try {
		const trails = await getTrail();
		console.log('trails:', trails);
		res.send(trails);
	} catch ({ name, message }) {
		next({ name, message });
	}
});

module.exports = { trailsRouter }