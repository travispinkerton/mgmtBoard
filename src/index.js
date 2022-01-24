import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import {
  
  DrawerExample,
  Testmodule,
  Features,
  Weather,
  DbTrailTest
} from './components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCurrentUser, getCurrentUserToken, getCart } from './auth';




const App = () => {

  const [message, setMessage] = useState('');
  const [token, setToken] = useState(getCurrentUserToken(), []);
  console.log('token:', token);
  const [ user , setUser ] = useState({});
	const [currentUser, setCurrentUser] = useState(getCurrentUser());
	const [orders, setOrders] = useState([{}]);
	const [cart, setCart] = useState(getCart());
	const [filterValue, setFilterValue] = useState('');
  const [created, setCreated] = useState(false);

  

  return (<div Classname='App'>
    
    <DrawerExample
    currentUser={currentUser}
    setCurrentUser={setCurrentUser}
    token={token}
    setUser={setUser}
    user={user}
    setToken={setToken}
    setFilterValue={setFilterValue}
    filterValue={filterValue}/>
    <Testmodule/>
    {/* <Weather/> */}
    <DbTrailTest token={token} user={user} setUser={setUser} setCreated={setCreated} created={created}/>
    <Features 
    currentUser={currentUser}
    token={token}
    setCreated={setCreated}
    created={created}
    />
  
  </div>)
}
ReactDOM.render(
  <ChakraProvider>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);