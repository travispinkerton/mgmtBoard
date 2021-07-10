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
  const [ user , setUser ] = useState({});
	const [currentUser, setCurrentUser] = useState(getCurrentUser());
	const [orders, setOrders] = useState([{}]);
	const [cart, setCart] = useState(getCart());
	const [filterValue, setFilterValue] = useState('');

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
  </div>)
}
ReactDOM.render(
  <ChakraProvider>
  <App />
  </ChakraProvider>,
  document.getElementById('root')
);