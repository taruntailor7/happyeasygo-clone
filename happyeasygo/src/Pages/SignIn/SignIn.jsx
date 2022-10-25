import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'

const initState = {
    username:"",
    password:"",
}

export const SignIn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userData, setUserData] = useState(initState)

    const handleChange = (e)=>{
        let {name, value} = e.target;
        setUserData({...userData, [name]:value})
    }
    console.log(userData);

    const handleSubmit = async (e)=>{
        console.log("handleSubmit called");
        e.preventDefault()
        let loginRes = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: 'POST',
            body: JSON.stringify(userData),
            headers : {
                'content-type': 'application/json'
            }
        });
        let res2 = await loginRes.json();
        if(res2.error){
            alert(res2.message);
        }
        else{
            alert("Logged In Succesfully!");
        }
        console.log(res2,"res from login");
    }


    return (
        <>
            <Button onClick={onOpen} bg="white" color="#108163" border="1px solid #108163" px={6} py={4} borderRadius="5px" size='xs' _hover={{bg:"#108163", color:"white"}}>Sign In</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent maxW="495px" borderRadius="10px">
                <ModalHeader p={0}>
                    <Box w="100%" color="white" pt={8} px={6} pb={3} borderRadius="10px 10px 0 0 " bg="#306844">
                        Sign in to HAPPYEASYGO
                    </Box>
                </ModalHeader>
                {/* <ModalCloseButton /> */}
                <ModalBody bg="#f7f8fc" borderRadius="10px" px={7} py={5}>
                    <Text>Sign in with</Text>
                    <Box mt={3} w="100%" bg="white" p={2}>Google</Box>
                    <Box mt={3} w="100%" bg="white" p={2}>Google</Box>
                    <Box mt={3} w="100%" bg="white" p={2}>Google</Box>
                    <Box mt={3} w="100%" bg="white" p={2}>Google</Box>
                    <Text mt={3}>Sign in with mobile or email</Text>
                    <form onSubmit={handleSubmit} >
                        <Input type="text" name="username" value={userData.username} onChange={handleChange} bg="white" placeholder='Enter Email' size='lg' mt={5} borderRadius="5px" required/>
                        <Input type="password"  name="password" value={userData.password} onChange={handleChange} bg="white" placeholder='Enter Password' size='lg' mt={5} borderRadius="5px" required/>
                        <Box display="flex" justifyContent="flex-end" >
                            <Text mt={2} color="#306844" fontWeight="500">Forgot Password</Text>
                        </Box>
                        <Button type="submit" w="100%" mt={4} bg="#e3a428" colorScheme="#e3a428" size="lg" borderRadius="5px">Sign In</Button>
                    </form>
                    {/* <Box display="flex" w="53%" margin="auto"  mt={3} justifyContent="space-between" alignItems="center">
                        <Text mt={0}>Don’t have an account?</Text>
                        <Text color="#306844"><Signup /></Text>
                    </Box>     */}
                </ModalBody>
                {/* <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                </ModalFooter> */}
            </ModalContent>
            </Modal>
        </>
    )
}
