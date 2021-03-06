import React, { useState, useEffect } from 'react';
import {Link, Linkto, BrowserRouter as Router} from 'react-router-dom';
import './sidebar.css';
import { Helmet } from "react-helmet";
import { Button,  
    Avatar, AvatarBadge, AvatarGroup, 
    Wrap,
    WrapItem,
    Menu,
    Badge,
    MenuButton,
    MenuList,
    MenuItem,
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
    MenuItemOption,
    MenuGroup,
    Center,
    Box,
    MenuOptionGroup,
    MenuIcon,
    Input,
    MenuCommand,
    MenuDivider,
    useDisclosure } from '@chakra-ui/react';

    import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon } from '@chakra-ui/icons'
// The default icon size is 1em (16px)

function calculateDaysBetweenDates(begin, end) {
    const beginDate = new Date(begin);      
    const endDate = new Date(end);
    const days = [];
    let currentDate = new Date(beginDate);
    while (currentDate <= endDate) {
        days.push(currentDate);
        currentDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
    }
    return days;
}



const testmodule = () => {

 

    return (
        <>
        <div  style={{display : 'flex'}} class='doge-weather'>
        <div style={{display : 'flex', margin : "0 auto"}}className="shiba"><img src="https://i.ibb.co/wSzJ3SN/shiba-inu-svg-13.png" alt="shiba-inu-svg-13" border="0"></img></div>
          </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Button className="blocks" onClick={()=> {
          console.log(calculateDaysBetweenDates(new Date(2018,0,1), new Date(2018,0,31)));
          console.log(calculateDaysBetweenDates(new Date(2021,0,1), new Date(2021,0,31)));
            console.log('clicked');
            window.open('https://weather.com/weather/today/l/2d835009fde58bc93cbe0b083fad70830e328c61df0302082351b37e8ddba04a');
        }} 
            style={{border : '10px black groove',
            boxShadow : '10px 6px #aaaaaa;',
            backgroundColor : 'goldenrod',
            height : '45px',
                    margin : '4px'}}>
          <h1>Local Weather &nbsp;</h1><Badge colorScheme="purple">New</Badge>
         
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className="blocks" onClick={()=> {
            console.log('clicked');
            window.open('https://www.dogedisco.com/');
        }} 
            style={{border : '10px black groove',
            boxShadow : '10px 6px #aaaaaa;',
            backgroundColor : 'goldenrod',
            height : '45px',
                    margin : '4px'}}>
          <h1>MILLION DOGE DISCO&nbsp;</h1><Badge colorScheme="purple">New</Badge></Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className="blocks" onClick={()=> {
            console.log('clicked');
            window.open('https://go.dogedisco.com');
        }} 
            style={{border : '10px black groove',
            boxShadow : '10px 6px #aaaaaa;',
            color : "white",
            backgroundColor : 'darkmagenta',
            height : '45px',
                    margin : '4px'}}>
          <h1>DOGEDISCO APP&nbsp;</h1><Badge colorScheme="yellow">Coming SOON!</Badge></Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className="blocks" onClick={()=> {
            console.log('clicked');
            window.open('https://go.dogedisco.com/#/map');
        }} 
            style={{border : '10px black groove',
            boxShadow : '10px 6px #aaaaaa;',
            color : "white",
            backgroundColor : 'darkmagenta',
            height : '45px',
                    margin : '4px'}}>
          <h1>DOGEDISCO MAP&nbsp;</h1><Badge colorScheme="yellow">BETA OPEN!</Badge></Button>
          <br></br>&nbsp;
        <section class="hero is-primary">
        <div style={{ paddingTop : "50px"}} class="hero-body">
          <Center>
            <p class="title">
            Trails & Secret Spots of SLO County, CA
            </p>
          </Center>
          <p class="subtitle">
          <Center id='banner' h="100px" color="white" onClick={(event) => {
            event.preventDefault(); 
            console.log('clicked');
        }}>
          <Router>
          
  <div id='welcome' ><p style={{fontSize : '24px',
            fontFamily: 'Bodoni Moda',
            fontVariant : 'small-caps'}}>Welcome to my page! &nbsp;&nbsp;</p></div>
  <Link onClick={() => {
    window.open('https://github.com/travispinkerton')
  }}><a><img class="FB" src="https://i.postimg.cc/Bv0f206n/githublogo.png"></img></a></Link>
  <Link onClick={() => {
    window.open('https://www.linkedin.com/in/traviswremington/')
  }}><a><img class="linkedin" src="https://i.postimg.cc/nr9CCDTW/linkedinlogo.png"></img></a></Link>
  


  <Link onClick={() => {
    window.open('mailto:traviswremington@gmail.com');
  }}>
  <p style={{fontSize : '25px'
            }}>&nbsp;<i class="fas fa-envelope-square fa-2x"></i>&nbsp;&nbsp;</p>
  </Link>
          </Router>
          </Center>
          </p>
        </div>
      </section>
      <a class="weatherwidget-io" href="https://forecast7.com/en/35d28n120d66/san-luis-obispo/?unit=us" data-label_1="SAN LUIS OBISPO" data-label_2="WEATHER" data-theme="original" >SAN LUIS OBISPO WEATHER</a>
<script>
{!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js')};

</script>
<div class="nomics-ticker-widget" data-name="Dogecoin" data-base="DOGE" data-quote="USD">
<Helmet>
<script src="https://widget.nomics.com/embed.js"></script>
</Helmet>



</div>


      <Button>OPEN NAV</Button>
      <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />} >
        {isOpen ? "Close" : "Open"}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem onClick={() => alert("Kagebunshin")}>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
<Wrap>
  <WrapItem>
    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
  </WrapItem>
  <WrapItem>
    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
  </WrapItem>
</Wrap>

<Box padding="30px" w={"fit-content"}>
<PhoneIcon />
&nbsp;&nbsp;&nbsp;
<AddIcon w={6} h={6} />
&nbsp;&nbsp;&nbsp;
<WarningIcon w={8} h={8} color="red.500" />
&nbsp;&nbsp;&nbsp;
</Box>


      </>
      );
}

export default testmodule;