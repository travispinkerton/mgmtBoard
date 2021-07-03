import React, { useState, useEffect, useRef } from 'react';
import ImageUploader from 'react-images-upload';
import { callApi } from '../api';

import {
    useDisclosure,
    Button,
    Drawer,
    Badge,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    DrawerContent,
    Input,
    useToast,
    FormLabel

} from '@chakra-ui/react';

import {
	storeCurrentUser,
	storeCurrentUserToken,
	clearCurrentUser,
  clearCurrentUserToken,
  storeCurrentUserAddress
} from '../auth';

class Login extends React.Component {
 
  constructor(props) {
      super(props);
       this.state = { pictures: [] };
       this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
      this.setState({
          pictures: this.state.pictures.concat(picture),
      });
      
  }

  render() {
      return (
          <ImageUploader
              withIcon={true}
              buttonText='Choose images'
              onChange={this.onDrop}
              
              
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
          />
      );
  }
}

function DrawerExample({filterValue, setFilterValue, token, setToken, currentUser, setCurrentUser}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [searchQuery, setSearchQuery] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [imageURL, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();
  
    console.log('username:', username);
    console.log('password:', password);
  
    const handleSubmit = async event => {
      event.preventDefault();
    };
    
    const handleRegisterSubmit = async event => {
      event.preventDefault();
      try {
        const registration = await callApi(
          { method: 'post', path: '/users/register' },
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            address: address,
            imageURL : imageURL,
            username: username,
            password: password
          }
        );
    
        if (!registration.success) {
          toast({
            title: registration.message,
            status: 'success',
            duration: '5000',
            isClosable: 'true',
            position: 'top'
          });
        }
        console.log(registration);
        if (registration.newUser && registration.token) {
          storeCurrentUser(registration.newUser);
          setCurrentUser(registration.newUser);
          storeCurrentUserAddress(registration.address);
          storeCurrentUserToken(registration.token);
          setToken(registration.token);
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    const handleSubmitLogin = async event => {
      event.preventDefault();
      console.log(username);
      console.log(password);
      try {
        const login = await callApi(
          { method: 'post', path: '/users/login' },
          { username: username, password: password }
        );
    
        if (!login.success) {
          toast({
            title: login.message,
            status: 'error',
            duration: '5000',
            isClosable: 'true',
            position: 'top'
          });
        }
        if (login.token && login.user) {
          setCurrentUser(login.user);
          storeCurrentUser(login.user);
          setToken(login.token);
          storeCurrentUserToken(login.token);
    
          toast({
            title: login.message,
            status: 'success',
            duration: '5000',
            isClosable: 'true',
            position: 'top'
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    const handleUserLogout = () => {
      clearCurrentUser();
      clearCurrentUserToken();
      setCurrentUser(null);
      setToken(null);
    };

    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
            <form onSubmit={handleRegisterSubmit}></form>
            <FormLabel>Username</FormLabel>
              <Input value={username} placeholder="Username" onChange={ e => {
                  let loggedUser = setUsername(e.target.value);
                  console.log(loggedUser);
                  
              }} />
              <FormLabel>Password</FormLabel>
              <Input value={password} style={{marginTop : '10px'}} placeholder="Password" onChange={ e => {
                  let loggedPass = setPassword(e.target.value);
                  console.log(loggedPass);
                
              }} />
              <FormLabel>First Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter First Name'
										value={firstname}
										onChange={e => {
											setFirstName(e.target.value);
										}}
									/>
									<FormLabel>Last Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter Last Name'
										value={lastname}
										onChange={e => {
											setLastName(e.target.value);
										}}
									/>
									<FormLabel>Email</FormLabel>
                  
									<Input
										type='text'
										placeholder='Enter Email'
										value={email}
										onChange={e => {
											setEmail(e.target.value);
										}}
									/>
                  
                  <FormLabel>Home Address</FormLabel>
									<Input
                
										type='text'
										placeholder='Enter Address'
										value={address}
										onChange={e => {
											setAddress(e.target.value);
                    }}
                    
									/>
                    <FormLabel>Profile Picture</FormLabel>
                    <Login/>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={(event) => {
                  let search = event.target.value;
                  console.log('searched', search);

              } }>Sign-Up</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default DrawerExample;