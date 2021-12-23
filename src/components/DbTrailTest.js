import React, { useState, useEffect, useRef } from 'react';

import { callApi } from '../api';

import {
	Grid,
	Image,
	Text
} from '@chakra-ui/react';

const DbTrailTest = () => {

  const [trail, setTrail] = useState([{}]);

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
	}, []);
  
  return (

trail.map(({id, name, description, imageurl, location, difficulty, length, rating, creator_id}) => 
  <Grid key={id} maxW='50%' className='products' borderRadius={'20px'} border='15px double white'>
<Text fontFamily='courier' letterSpacing='1px' fontSize='xl'>Name: <b>{name}</b></Text>
<Text fontSize='l'>Description: {description}</Text>
<Image borderRadius='20px' src={imageurl}></Image>
<Text fontSize='l'>Location: {location}</Text>
<Text fontSize='l'>Difficulty: {difficulty}</Text>
<Text fontSize='l'>Length: {length}</Text>
<Text fontSize='l'>Rating: {rating}</Text>
<Text fontSize='l'>Author: {creator_id}</Text></Grid>)



  );
  }
export default DbTrailTest;