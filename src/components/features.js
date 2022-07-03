import React, { useState, useEffect, useRef } from 'react';
import { callApi } from '../api';
import {Input, Box, useDisclosure} from '@chakra-ui/react';
import { Card, Button, Form  } from 'react-bootstrap';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';

const Features = ({currentUser, token, created, setCreated})  => {

  const [trailName, setTrailName] = useState('');
  const [trailDescription, setTrailDescription] = useState('');
  const [trailLength, setTrailLength] = useState('');
  const [trailDifficulty, setTrailDifficulty] = useState('');
  const [trailCoordinates, setTrailCoordinates] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [trailRating , setTrailRating] = useState('');
  const [author, setAuthor] = useState('');
  const [trailLocation, setTrailLocation] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  const handleAddProductSubmit = async event => {
    event.preventDefault();
    try {
        const createTrail = await callApi(
            { method: 'post', path: '/trails', token: token },
            {
                name: trailName,
                description: trailDescription,
                imageURL: imageUrl,
                location: trailLocation,
                difficulty: trailDifficulty,
                length: trailLength,
                rating: trailRating,
                creator_id: currentUser.id,
                author: currentUser.username,
                coordinates: trailCoordinates
                
            }
        );
        
        console.log(createTrail);
    } catch (error) {
        console.log(error);
    }
};

 
    return <Box fontFamily='IBM Plex Mono, monospace' display='flex' flexDirection='row' justifyContent='space-evenly'><form  style={{display : 'flex', flexDirection : 'row', justifyContent : 'space-evenly', border : '5px groove black'}} onSubmit={handleAddProductSubmit}><Form>Trail Name<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="trail name" onChange={(event )=> {
      event.preventDefault();
      let trailName = event.target.value;
      console.log(trailName);
      return setTrailName(trailName);
      
  }}></Input></Form>
  <Form>Description<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="description" onChange={(event )=> {
      event.preventDefault();
      let trailDescription = event.target.value;
      console.log(trailDescription);
      return setTrailDescription(trailDescription);
      
  }}></Input></Form>
  <Form>Image Link<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="image url" onChange={(event )=> {
      event.preventDefault();
      let imageUrl = event.target.value;
      console.log(imageUrl);
      return setImageUrl(imageUrl);
      
  }}></Input></Form>
  <Form>Location<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="location" onChange={(event )=> {
      event.preventDefault();
      let trailLocation = event.target.value;
      console.log(trailLocation);
      return setTrailLocation(trailLocation);
      
  }}></Input></Form>
  <Form>Difficulty<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="easy/hard" onChange={(event )=> {
      event.preventDefault();
      let trailDifficulty = event.target.value;
      console.log(trailDifficulty);
      return setTrailDifficulty(trailDifficulty);
      
  }}></Input></Form>
  <Form>Length(mi)<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="length" onChange={(event )=> {
      event.preventDefault();
      let trailLength = event.target.value;
      console.log(trailLength);
      return setTrailLength(trailLength);
      
  }}></Input></Form>
  <Form>Rating(/5)<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="rating" onChange={(event )=> {
      event.preventDefault();
      let trailRating = event.target.value;
      console.log(trailRating);
      return setTrailRating(trailRating);
      
  }}></Input></Form>
  <Form>G-Maps Link<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" placeholder="coordinates" onChange={(event )=> {
      event.preventDefault();
      let trailCoordinates = event.target.value;
      console.log(trailCoordinates);
      return setTrailCoordinates(trailCoordinates);
      
  }}></Input></Form>
  <Button type='submit' style={{border:'2px solid black', backgroundColor: 'cornflowerblue', fontWeight: 'bolder', color:'white'}} value={setCreated}  onSubmit={onClose} onClick={()=>{
    setCreated(true);
    
    
    console.log(created);
  }}>
					Submit
          
	</Button></form>
  </Box>

}

export default Features;