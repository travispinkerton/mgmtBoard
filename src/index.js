import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";

import {
  
  DrawerExample,
  Testmodule
} from './components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getCurrentUser, getCurrentUserToken, getCart } from './auth';


const App = () => {

  const [message, setMessage] = useState('');
  const [token, setToken] = useState(getCurrentUserToken(), []);
  console.log('token:', token);
	const [currentUser, setCurrentUser] = useState(getCurrentUser());
	const [orders, setOrders] = useState([{}]);
	const [cart, setCart] = useState(getCart());
	const [filterValue, setFilterValue] = useState('');

  return (<div Classname='App'>
    <Testmodule/>
    <DrawerExample
    currentUser={currentUser}
    setCurrentUser={setCurrentUser}
    token={token}
    setToken={setToken}
    setFilterValue={setFilterValue}
    filterValue={filterValue}/>
  </div>)
}
ReactDOM.render(
  <ChakraProvider>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);