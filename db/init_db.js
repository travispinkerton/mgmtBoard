// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

const { createUser } = require('./users');
const { createTrail } = require('./trails');

async function buildTables() {
  try {
    await client.connect();

    console.log('Dropping All Tables...');

    await client.query(`
	DROP TABLE IF EXISTS trails; 
    DROP TABLE IF EXISTS users;
	
            
    `);
    console.log('Finished dropping tables!');

		// build tables in correct order
		console.log('Starting to build tables...');

    await client.query(`

    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      firstname varchar(255) NOT NULL,
      lastname varchar(255) NOT NULL ,
      email VARCHAR(255) UNIQUE NOT NULL,
      address VARCHAR(255) UNIQUE NOT NULL,
      imageURL VARCHAR(255) NOT NULL,
      username VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) UNIQUE NOT NULL
      );
		
		
	  CREATE TABLE trails(
		  id SERIAL PRIMARY KEY,
		  name VARCHAR(255) NOT NULL,
		  description VARCHAR(255) NOT NULL,
		  imageURL VARCHAR(255) NOT NULL,
		  location VARCHAR(255) NOT NULL,
		  difficulty VARCHAR(255) NOT NULL,
		  length DECIMAL NOT NULL,
		  rating INTEGER NOT NULL,
		  creator_id INTEGER NOT NULL,
		  author VARCHAR(255) NOT NULL,
		  coordinates VARCHAR(255) NOT NULL
		); 


      `);

      console.log('Finished constructing tables!');
    // drop tables in correct order

    // build tables in correct order

  } catch (error) {
    throw error;
  }
}

async function createInitialUsers() {
	console.log('Starting to create users...');
	try {
		const joseph = await createUser({
			firstname: 'Joseph',
			lastname: 'Malotte',
      email: 'jmalotte510@gmail.com',
      address : '11020 Sycamore Drive, Palo Alto CA',
			imageURL: 'http://www.pennlalsa.org/uploads/1/3/4/8/13489220/current-anthony-headshot_orig.png',
			username: 'Joeyisafoodie',
			password : 'splenda1984'
			
		});
		const martin = await createUser({
			firstname: 'Martin',
			lastname: 'Phillips',
      email: 'phillipsconstruction@gmail.com',
      address: '223 Haight Street, San Francisco CA',
			imageURL: 'https://www.thomharrisdesign.com/wp-content/uploads/2011/06/Phillips-Construction-blog-500x384.jpg',
			username: 'Hammer-Time',
			password: 'nailedit'

		});
		const jessie = await createUser({
			firstname: 'Jessie',
			lastname: 'Nguyen',
      email: 'lockjessmonster@gmail.com',
      address: '3669 Perfumo Canyon Dr, San Luis Obispo CA',
			imageURL: 'https://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2014/10/27/11/lochnessmonster2710a.jpg',
			username: 'tinker-tailor',
			password: 'mossy+bossy'
		});
		console.log(joseph, martin, jessie)
		console.log('Users created:');
		console.log('Finished creating Users!');
	} catch (error) {
		console.error('Error creating Users!');
		throw error;
	}
}

async function createInitialOrders() {
	console.log('Starting to create orders...');
	try {
		const pending = await createOrder(
			'Pending',
			1
		);
		const delivered = await createOrder(
			'Delivered',
			3
		);
		const returnOrder = await createOrder(
			'return',
			2
		);
		console.log(pending, delivered, returnOrder )
		console.log('Orders created:');
		console.log('Finished creating Orders!');
	} catch (error) {
		console.error('Error creating Orders!');
		throw error;
	}
}

async function populateInitialData() {
  try {
	
	const trail1 = await createTrail({
		name: 'Bluff Train in Fiscalini Ranch Preserve',
		description: 'The Bluff Trail in Fiscalini Ranch Preserve is a lovely place to enjoy an easy coastal walk. The ocean views are superb, flowers are abundant in the spring, and there are even opportunities to observe wildlife.',
		imageURL: 'https://greengroundswell.com/wordpress/wp-content/uploads/2018/05/Fiscalini-Ranch-Preserve-Bluff-Trail-in-Cambria-CA-May-2018-1024x550.jpg',
		location: 'Cambria, CA',
		difficulty: 'Easy',
		length: '1.9',
		rating: '4',
		creator_id: '1',
		author: 'Joeyisafoodie',
		coordinates: 'https://goo.gl/maps/sngNJtCNjrTdjA7W8'
	});
	console.log('trail', trail1);

	const trail2 = await createTrail({
		name: 'Salmon Creek Falls Trail',
		description: 'The hike begins and ends at Salmon Creek, an inlet along the coast roughly 27 miles northwest of Cambria.',
		imageURL: 'https://www.hikespeak.com/img/Central-Coast/Monterey/Salmon/Salmon_Creek_Falls_IMG_0170.jpg',
		location: 'South Big Sur, CA',
		difficulty: 'Easy',
		length: '0.5',
		rating: '5',
		creator_id: '1',
		author: 'Joeyisafoodie',
		coordinates: 'https://goo.gl/maps/7JmRiLLLtwTffNyb7'
	});
	
	console.log('trail', trail2);
    // create useful starting data
	} catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
    .then(createInitialUsers)
  .catch(console.error)
  .finally(() => client.end());