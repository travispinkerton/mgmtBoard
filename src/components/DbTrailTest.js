import React, { useState, useEffect, useRef } from 'react';

import { callApi } from '../api';

import {
	Grid,
	Image,
	Text,
  Button
} from '@chakra-ui/react';

const DbTrailTest = ({setUser}) => {

  const [trail, setTrail] = useState([{}]);
  const [creator_id, setCreator_id] = useState('');

  const fetchUser = async () => {
		const userData = await callApi({ path: `/users/${creator_id}`});
		setUser(userData);
  };
  const fetchTrail = async () => {
    try {
      const trailData = await callApi({
        method: 'GET',
        path: `/trails`
      });
      console.log('trailSpread', trailData);
      setTrail(trailData);
    } catch (error) {}
  };

  useEffect(() => {
		fetchTrail();
    fetchUser();
	}, []);
  
  return (

trail.map(({id, name, description, imageurl, location, difficulty, length, rating, creator_id, author, coordinates}) => 
  <Grid key={id} style={{ width: '18rem',
  fontFamily : 'IBM Plex Mono, monospace',
  boxShadow : '10px 12px #aaaaaa',
  height: '700px',
  padding: '16px',
width: '19rem',
fontWeight : 'bold',
margin: '1em auto',
overflowY: 'scroll',
backgroundColor: 'navajowhite',
borderRadius: '10%',
border: '2px groove black',
  border : '5px groove white',
   margin : '15px'
    }}maxW='50%' className='products' borderRadius={'20px'} border='15px double white'>
<Text fontFamily='courier' letterSpacing='1px' fontSize='xl'>Name: <b>{name}</b></Text>
<Text fontSize='l'>Description: {description}</Text>
<Image borderRadius='20px' src={imageurl}></Image>
<Text fontSize='l'>Location: {location}</Text>
<Text fontSize='l'>Difficulty: {difficulty}</Text>
<Text fontSize='l'>Length: {length}</Text>
<Text fontSize='l'>Rating: {rating}</Text>
<Text fontSize='l'>Author: {author}</Text>
<Button onClick={() => {
window.open(coordinates.toString());
}} variant="primary">Go to Map</Button></Grid>));
}
export default DbTrailTest;