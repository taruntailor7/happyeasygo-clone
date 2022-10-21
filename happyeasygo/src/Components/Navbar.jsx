import { Box, Image, Menu, MenuButton, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiBattery100 } from 'react-icons/gi';
import { BiRupee } from 'react-icons/bi';
import { CiWallet } from 'react-icons/ci';
import { RiCustomerService2Line } from 'react-icons/ri';
import { SignIn } from '../Pages/SignIn/SignIn';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const defaultStyle = {
    color:"black"
  }
  const activeStyle = {
    color:"#108163",
    borderBottom:"3px solid #108163"
  }

  return (
    <Box w="100%"  boxShadow='xs'>
      <Box w="80%" display="flex" m="auto" >
        <Box w="50%"  >
          <Box w="60%" display="flex" justifyContent="space-between" py={4} >
            <NavLink to="/"><Image src="https://hotelstatic.happyeasygo.com/ForFront/pc/logo.png" alt="logo"/></NavLink>
            <NavLink style={({isActive})=>(isActive ? activeStyle : defaultStyle)}  to="/" end><Text fontSize="17px" fontWeight="bold" _hover={{color:"#108163"}}>Hotels</Text></NavLink>
            <NavLink style={({isActive})=>(isActive ? activeStyle : defaultStyle)} to="/offers" end><Text fontSize="17px" fontWeight="bold" _hover={{color:"#108163"}}>Offers</Text></NavLink>
          </Box>
        </Box>
        <Box w="50%" display="flex" >
          <Box w="60%" display="flex" >
            <Box  w="50%" display="flex" alignItems="center" py={4} >
              <GiBattery100 color="#108163" fontSize="20px"/>
              <Text color="#108163" >Register Your Property</Text>
            </Box>
            <Box  w="50%" display="flex" justifyContent="space-around" alignItems="center" py={4} >
              <Text border="1px solid black" borderRadius="50%"><BiRupee fontSize="22px" color="#343434" /></Text>
              <CiWallet fontSize="25px"/>
              <RiCustomerService2Line fontSize="25px"/>
            </Box>
          </Box>
          <Box w="40%" display="flex" justifyContent="space-around" alignItems='center' >
                <Menu isOpen={isOpen} >
                    <MenuButton
                        fontSize="17px" 
                        variant="ghost"
                        px={4}
                        borderRadius={5}
                        // aria-label="Courses"
                        fontWeight="500"
                        onMouseEnter={onOpen}
                        onMouseLeave={onClose}
                        color="black"
                        // marginRight="-20px"
                        className='hover-underline-animation'
                    >
                      Manage Trip
                    </MenuButton>
                  <MenuList mt={4} onMouseEnter={onOpen} onMouseLeave={onClose}>
                    hello
                  </MenuList>
                </Menu>
              {/* <Button bg="white" color="#108163" border="1px solid #108163" px={6} py={4} borderRadius="5px" size='xs' _hover={{bg:"#108163", color:"white"}}>
                Sign In
              </Button> */}
              <SignIn />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
