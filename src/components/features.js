import React, { useState, useEffect, useRef } from 'react';
import { callApi } from '../api';
import { Card, Button } from 'react-bootstrap';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';

const Features = ()  => {
 
    return <Card style={{ width: '18rem',
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
      }}>
<Card.Img style={{borderRadius : '10%'}} variant="top" src="https://i.ibb.co/31WPQmS/IMG-0693.jpg"/>
<Card.Body>
<Card.Title><b>Reservior Canyon Loop Trail</b></Card.Title>
<Card.Text>


<u><i>San Luis Obispo, CA</i></u>
<br></br>
<br></br>
Distance: 5.35 miles (out and back)
<br></br>
<br></br>
Elevation change: 1350 feet
<br></br>
<br></br>
Hiking time: Approx. 3 hours

<br></br>
<br></br>
To get to the trailhead: From downtown San Luis Obispo, take Highway 101 north for approximately two miles to Reservoir Canyon Road (an easy-to-miss road connecting to the freeway). Turn right and drive half a mile to the trailhead parking area at road’s end.

After the hike, exercise caution when getting back on the highway. It may be safer to drive north and turn around at another exit rather than cutting across northbound traffic to reach the southbound lanes to San Luis Obispo.
<br></br>
<br></br>
<b>Trailhead address: Reservoir Canyon Road, San Luis Obispo, CA 93401</b>
<br></br>
<br></br>
<b>Trailhead coordinates: 35.29075, -120.62775 (35° 17′ 26.7″N 120° 37′ 39.9″W)</b>
</Card.Text>
<Button onClick={() => {
window.open('https://goo.gl/maps/ehMG273fdcpNaL4GA');
}} variant="primary">Go to Map</Button>
<div>&nbsp;</div>
<Button onClick={() => {
window.open('https://www.hikespeak.com/trails/reservoir-canyon-hike-san-luis-obispo/');
}} variant="primary">In-Depth Description</Button>
</Card.Body>
</Card>

}

export default Features;