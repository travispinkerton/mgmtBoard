const usersRouter = require('express').Router();
const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const {
	createUser,
    getUserByUsername,
	getUser
} = require('../db/users');

const { requireUser, requireAdmin } = require('./utils');

usersRouter.post('/login', async (req, res, next) => {
	const { username, password } = req.body;

	try {
		if (!username || !password) {
			return res.send({
				success: false,
				message: 'Missing username or password!'
			});
		}

		const user = await getUser(req.body);

		if (user) {
			const token = sign(
				{ id: user.id, username: user.username },
				JWT_SECRET
			);

			res.send({
				success: true,
				message: 'You are logged in!',
				user,
				token
			});
		}
	} catch ({ name, message }) {
		res.send({ name, message });
	}
});

usersRouter.post('/register', async (req, res, next) => {
	const userFields = [
		'firstname',
        'lastname',
        'email',
        'address',
        'imageURL',
		'username',
		'password'
	];

	if (req.body.password.length < 8) {
		return res.send({ success: false, message: 'Password is too short!' });
	}

	try {
		userFields.map(key => {
			if (!Object.keys(req.body).includes(key)) {
				throw Error('Missing fields');
			}
		});

		const checkUsername = await getUserByUsername(req.body.username);

		if (checkUsername === req.body.username) {
			return res.send({
				success: false,
				message: 'Username already exists!'
			});
		}

		const newUser = await createUser(req.body);

		const token = sign(
			{
				id: newUser.id,
				user: newUser.username
			},
			JWT_SECRET
		);

		res.send({ message: 'success', newUser, token });
	} catch ({ name, message }) {
		res.send({ name, message });
	}
});

module.exports = { usersRouter }