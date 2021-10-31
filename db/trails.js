const { client } = require('./index');

const createTrail = async ({
    name,
    description,
    location,
    length,
    difficulty,
    rating,
    imageURL,
    creator_id,

}) => {
	try {
		

		const {
			rows: [trail],
		} = await client.query(
			`insert into trails(name, description, imageURL, location, difficulty, length, rating, creator_id) values($1, $2, $3, $4, $5, $6, $7, $8) returning *`,
			[
				name,
                description,
                imageURL,
                location,
                difficulty,
                length,
                rating,
                creator_id,
				
			]
		);

		return trail;

	
	} catch (error) {
		console.log(error);
		throw error;
	}
};

const getTrail = async ({ name,
    description,
    imageURL,
    location,
    difficulty,
    length,
    rating,
    creator_id, }) => {
	try {
		const {
            rows: [trail],
        } = await client.query(
            `select * from trails where name = $1 and description = $2 and imageURL = $3 and location = $4 and difficulty = $5 and length = $6 and rating = $7 and creator_id = $8`,
            [
                name,
                description,
                imageURL,
                location,
                difficulty,
                length,
                rating,
                creator_id,
            ]
        );

        return trail;
	} catch (error) {
		throw error;
	}
};

module.exports = {createTrail, getTrail};