const { client } = require('./index');
const { hash, compare } = require('bcrypt');

const createUser = async ({
	firstname,
	lastname,
    email,
    address,
	imageURL,
	username,
	password
}) => {
	try {
		const hashedPass = await hash(password, 10);

		const {
			rows: [newUser]
		} = await client.query(
			`insert into users(firstname, lastname, email, address, imageURL, username, password ) values($1, $2, $3, $4, $5, $6, $7) returning *`,
			[
				firstname,
				lastname,
                email,
                address,
				imageURL,
				username,
				hashedPass,
				
			]
		);

		delete newUser.password;

		return newUser;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getUserByUsername = async username => {
	try {
		const {
			rows: [user]
		} = await client.query(
			'select username, password, id from users where username = $1',
			[username]
		);

		return user;
	} catch (error) {
		throw error;
	}
};

const getUser = async ({ username, password }) => {
	try {
		const user = await getUserByUsername(username);

		if (!user) {
			throw Error('Wrong credentials');
		}

		const hashedPass = user.password;
		const match = await compare(password, hashedPass);

		if (match) {
			delete user.password;
			return user;
		} else {
			throw Error('Wrong credentials');
		}
	} catch (error) {
		throw error;
	}
};

module.exports = { createUser, 
    getUserByUsername,
getUser }
    
    // getUser,
	// getUserById,
	// getUserByUsername,
	// updateUser,
	// getAllUsers ;