import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRegister } from '../../Redux/Signup/action'
const initState = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "" 
}

export const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const[userData, setUserData] = useState(initState);
    const dispatch = useDispatch()

    // const {res} = useSelector((state) => state)
    // console.log(res,"response from redux")

    const handleChange = ((e) => {
        let {name, value} =  e.target;
        setUserData({...userData, [name]:value});
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(getRegister(userData))
    }
    

    return (
        <>
            <Button onClick={onOpen} bg="white" color="#108163" border="1px solid #108163" px={6} py={4} borderRadius="5px" size='xs' _hover={{bg:"#108163", color:"white"}}>Sign Up</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent maxW="495px" borderRadius="10px">
                <ModalHeader p={0}>
                    <Box w="100%" color="white" pt={8} px={6} pb={3} borderRadius="10px 10px 0 0 " bg="#306844">
                        Join happyeasygo
                    </Box>
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody bg="#f7f8fc" borderRadius="10px" px={7} py={5}>
                    <Text>Sign in with</Text>
                    <Box mt={3} w="100%" bg="white" p={2}>Google</Box   >
                    <Text mt={3}>Sign in with mobile or email</Text>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" name="name" bg="white" placeholder='Enter Name' size='lg' mt={3} borderRadius="5px" value={userData.name} onChange={handleChange} required/>
                        <Input type="email" name="email" bg="white" placeholder='Enter Email' size='lg' mt={3} borderRadius="5px" value={userData.email} onChange={handleChange} required/>
                        <Input type="password"  name="password" bg="white" placeholder='Enter Password' size='lg' mt={3} borderRadius="5px" value={userData.password} onChange={handleChange} required/>
                        <Input type="text"  name="username" bg="white" placeholder='Enter Username' size='lg' mt={3} borderRadius="5px" value={userData.username} onChange={handleChange} required/>
                        <Input type="number" name="mobile" bg="white" placeholder='Enter Mobile Number' size='lg' mt={3} borderRadius="5px" value={userData.mobile} onChange={handleChange} required/>
                        <Input type="text"  name="description" bg="white" placeholder='Enter Description' size='lg' mt={3} borderRadius="5px" value={userData.description} onChange={handleChange} required/>
                        <Box display="flex" justifyContent="flex-end" >
                            <Text mt={2} color="#306844" fontWeight="500">Forgot Password</Text>
                        </Box>
                        <Button type="submit" w="100%" mt={4} bg="#e3a428" colorScheme="#e3a428" size="lg" borderRadius="5px">SignUp</Button>
                    </form>
                    {/* <Box display="flex" w="55%" margin="auto"  mt={3} justifyContent="space-between" alignItems="center">
                        <Text mt={0} >Already have an account? </Text>
                        <Text color="#306844"><SignIn /></Text>
                    </Box> */}
                </ModalBody>
                {/* <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                </ModalFooter> */}
            </ModalContent>
            </Modal>
        </>
    )
}
