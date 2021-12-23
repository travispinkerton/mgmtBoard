import React, { useState, useEffect, useRef } from 'react';

import { callApi } from '../api';

import {
	Grid,
	Image,
	Text
} from '@chakra-ui/react';

const DbTrailTest = () => {

  const [trail, setTrail] = useState({});

  const fetchTrail = async () => {
    try {
      const [trailData] = await callApi({
        method: 'GET',
        path: `/trails`
      });
      console.log(trailData);
      setTrail(trailData);
    } catch (error) {}
  };

  useEffect(() => {
		fetchTrail();
	}, []);
  
  return <><div>add SVG YETI login animation!</div>
          <div>upgrade HBO MAX//make a note board on this site?!?!?! like on fitness trac.kr basically</div>
          <div>chop mix in LOGIC X and post</div>
          <div>create an API call to bring trail info here</div>
          <div>fix portfolio photos</div>
          <div>then a UI form to submit new spots!!!</div>
          <div>add Paradise beach to db and render</div>

{<Grid maxW='50%' className='products' borderRadius={'20px'} border='15px double white'>
<Text fontFamily='courier' letterSpacing='1px' fontSize='xl'>Name: <b>{trail.name}</b></Text>
<Text fontSize='l'>Description: {trail.description}</Text>
<Image borderRadius='20px' src={trail.imageurl}></Image>
<Text fontSize='l'>Location: {trail.location}</Text>
<Text fontSize='l'>Difficulty: {trail.difficulty}</Text>
<Text fontSize='l'>Length: {trail.length}</Text>
<Text fontSize='l'>Rating: {trail.rating}</Text>
<Text fontSize='l'>Author: {trail.creator_id}</Text></Grid>}


</>
}

export default DbTrailTest;