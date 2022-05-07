import React, { useState, useEffect, useRef } from 'react';

import { callApi } from '../api';

import {
	Grid,
	Image,
  Box,
	Text,
  Center,
  Button,
  useToast
} from '@chakra-ui/react';



const DbTrailTest = ({setUser, created, setCreated}) => {

  const [trail, setTrail] = useState([{}]);
  const [creator_id, setCreator_id] = useState('');
  const toast = useToast();

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
  useEffect(() => {
		fetchTrail().then(setCreated(false));
    
	}, [created === true]);

  if (created === true) {
    toast({
      title: 'Trail Added Successfully!',
      status: 'success',
      duration: '5000',
      isClosable: 'true',
      position: 'top'
    });
  }
  return (
    
<Box>
<Center><Text color='peru' fontSize='40px' fontWeight='bolder' fontFamily='IBM Plex Mono, monospace'>Trail Guide</Text></Center>
<Grid
				templateColumns='repeat(2, 1fr)'
				
				
				justifyItems='center'
				
				
			>
{trail.map(({id, name, description, imageurl, location, difficulty, length, rating, creator_id, author, coordinates}) => 
  <Grid key={id} style={{ width: '18rem',
  fontFamily : 'IBM Plex Mono, monospace',
  boxShadow : '10px 12px #aaaaaa',
  height: '700px',
  padding: '16px',
width: '35em',
fontWeight : 'bold',
margin: '1em auto',
backgroundColor: 'navajowhite',
borderRadius: '7%',
border: '2px groove black',
  border : '5px groove white',
   margin : '15px'
    }}maxW='50%' className='trails' borderRadius={'16px'} border='15px double white'>
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
}} variant="primary">Go to Map</Button></Grid>)}</Grid></Box>);

}
export default DbTrailTest;