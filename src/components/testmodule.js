import React, { useState, useEffect } from 'react';
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
    Box,
    MenuOptionGroup,
    MenuIcon,
    Input,
    MenuCommand,
    MenuDivider,
    useDisclosure } from '@chakra-ui/react';

    import { PhoneIcon, AddIcon, WarningIcon, ChevronDownIcon } from '@chakra-ui/icons'
// The default icon size is 1em (16px)



const testmodule = () => {

 

    return (
        <>
        <Button onClick={()=> {
            console.log('clicked');
            window.open('https://weather.com/weather/today/l/2d835009fde58bc93cbe0b083fad70830e328c61df0302082351b37e8ddba04a');
        }} className="blocks"
            style={{border : '10px black groove',
            backgroundColor : 'goldenrod',
            height : '45px',
                    margin : '4px'}}>
          <h1>Local Weather &nbsp;</h1><Badge colorScheme="purple">New</Badge>
         
        </Button>
        <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">
            Weather Demo
          </p>
          <p class="subtitle">
            Primary subtitle
          </p>
        </div>
      </section>
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
<Box w={"fit-content"}>
<PhoneIcon />
// Use the `boxSize` prop to change the icon size
<AddIcon w={6} h={6} />
// Use the `color` prop to change the icon color
<WarningIcon w={8} h={8} color="red.500" />
</Box>


      </>
      );
}

export default testmodule;