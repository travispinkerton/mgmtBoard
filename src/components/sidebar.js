import React, { useState, useEffect, useRef } from 'react';
import ImageUploader from 'react-images-upload';
import swal from 'sweetalert';
import { callApi } from '../api';
import './sidebar.css';
import {
    useDisclosure,
    Button,
    Drawer,
    Badge,
    ModalContent,
	  Tabs,
	  Tab,
	  TabList,
	  TabPanels,
	  TabPanel,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    ModalCloseButton,
    Modal,
    ModalOverlay,
    DrawerContent,
    Input,
    useToast,
    FormLabel

} from '@chakra-ui/react';

import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';
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

function DrawerExample({filterValue, user, setUser, setFilterValue, token, setToken, currentUser, setCurrentUser}) {
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
        <div className="log-in" >
        
        { token && currentUser ? <div className="log-out">&nbsp;&nbsp;&nbsp;You are now logged in!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button className="log-out-button" colorScheme="red" onClick={(event) => {
            event.preventDefault();
            localStorage.clear();
            setToken('');
            setUser({});
            setCurrentUser({});
            swal("Are you sure you want to do this?", {
              buttons: ["No, don't log me out", "Yes, I am sure"],
            });
    
        }}>
            LOG-OUT</Button></div> : <div style={{paddingTop : '62px'}}><span><b><i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter your username and email to login!</i></b></span></div>}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
      <form id="log-in-form" >
      &nbsp;&nbsp;&nbsp;username&nbsp;&nbsp;&nbsp;<Input border="4px groove darkmagenta" maxWidth="250px" className="username" type="text" value ={username} placeholder="username" onChange={(event )=> {
            event.preventDefault();
            let username = event.target.value;
            
            return setUsername(username);
            
        }}></Input>
        <span id="break"><br></br></span>
        &nbsp;&nbsp;&nbsp;password&nbsp;&nbsp;&nbsp;
        
        <Input className="password"
          type="text"
          border="4px groove darkmagenta"
          maxWidth="250px"
          value={password}
          onChange={(event) => {
            event.preventDefault();
            let password = event.target.value;
            
            return setPassword(password);
          }}
          placeholder="password"
        ></Input>
        </form>
        { currentUser && token ? <div style={{fontSize : '40px', fontFamily : 'IBM Plex Mono, monospace', fontVariant : 'all-small-caps', fontWeight : 'bolder', letterSpacing : '3px', display : 'flex', flexDirection : 'row', justifyContent : 'center'}} ><b><p>{`Welcome Back ${currentUser.username}!`}</p></b></div> : ''}
      
        
        <br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        id="submit-info"
        colorScheme="green"
        value={username, password}
        onClick={handleSubmitLogin}
            
        
      >
        LOGIN
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {!user && !token ? <div>Login to continue</div> : <><span className="question" style={{fontSize : "23px", fontStyle : 'oblique'}}><b>What <span style={{opacity : '.5'}}><i><s>should</s></i></span> will we do <span style={{opacity : '.5'}}><s><i>today</i></s></span> right now?</b></span></>}
    </div>
    
    <br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Sign-Up
        </Button>
        
        
        {/* {token && currentUser ? (
				<Router>
           <Link to='/'>
					<Button variant='outline' onClick={handleUserLogout}>
						Logout
					</Button>
          </Link>
          </Router>
				
			) : (
				<Button variant='outline' onClick={onOpen}>
					Login
				</Button>
			)} */}
      
        {/* <Button variant='outline' onClick={onOpen}>
					Login
				</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<Tabs>
						<TabList>
            <Tab>Login</Tab>
            </TabList>
            <TabPanels>
            <TabPanel>
								<form onSubmit={handleSubmitLogin}>
									<FormLabel>Username</FormLabel>
									<Input
										type='text'
										placeholder='enter username'
										value={username}
										onChange={e => {
											setUsername(e.target.value);
										}}
									/>
									<FormLabel>Password</FormLabel>
									<Input
										type='password'
										placeholder='enter password'
										value={password}
										onChange={e => {
											setPassword(e.target.value);
										}}
									/>
									<Button type='submit' onClick={onClose}>
										Submit
									</Button>
								</form>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<ModalCloseButton />
				</ModalContent>
			</Modal>               */}
        
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
                  console.log("username:",loggedUser);
                  
              }} />
              <FormLabel>Password</FormLabel>
              <Input value={password} style={{marginTop : '10px'}} placeholder="Password" onChange={ e => {
                  let loggedPass = setPassword(e.target.value);
                  console.log("password",loggedPass);
                
              }} />
              <FormLabel>First Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter First Name'
										value={firstname}
										onChange={e => {
											setFirstName(e.target.value);
                      console.log("firstName", e.target.value);
										}}
									/>
									<FormLabel>Last Name</FormLabel>
									<Input
										type='text'
										placeholder='Enter Last Name'
										value={lastname}
										onChange={e => {
											setLastName(e.target.value);
                      console.log("lastName:", e.target.value);
										}}
									/>
									<FormLabel>Email</FormLabel>
                  
									<Input
										type='text'
										placeholder='Enter Email'
										value={email}
										onChange={e => {
											setEmail(e.target.value);
                      console.log("email", e.target.value);
										}}
									/>
                  
                  <FormLabel>Home Address</FormLabel>
									<Input
                
										type='text'
										placeholder='Enter Address'
										value={address}
										onChange={e => {
											setAddress(e.target.value);
                      console.log("address:" , e.target.value);
                    }}
                    
									/>
                    <FormLabel>Profile Picture</FormLabel>
                    <Login value={imageURL} onChange={()=> {
                      localStorage.setItem(imageURL);
                    }}/>
                    {console.log(imageURL)}
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleRegisterSubmit}>Sign-Up</Button> 
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default DrawerExample;