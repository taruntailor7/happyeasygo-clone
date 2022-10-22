import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { SignIn } from '../SignIn/SignIn'

export const Signup = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
                <Text onClick={onOpen} fontSize="14px" fontWeight="500">Sign Up</Text>

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
                        <Box mt={3} w="100%" bg="white" p={2}>Google</Box>
                        <Text mt={3}>Sign in with mobile or email</Text>
                        <Input bg="white" placeholder='large size' size='lg' mt={5} borderRadius="5px"/>
                        <Input bg="white" placeholder='large size' size='lg' mt={5} borderRadius="5px"/>
                        <Box display="flex" justifyContent="flex-end" >
                            <Text mt={2} color="#306844" fontWeight="500">Forgot Password</Text>
                        </Box>
                        <Button w="100%" mt={4} bg="#e3a428" colorScheme="#e3a428" size="lg" borderRadius="5px">Sign In</Button>
                        <Box display="flex" w="55%" margin="auto"  mt={3} justifyContent="space-between" alignItems="center">
                            <Text mt={0} >Already have an account? </Text>
                            {/* <NavLink><Text mt={2} color="#306844" fontWeight="bold">Sign In</Text></NavLink> */}
                            <Text color="#306844"><SignIn /></Text>
                        </Box>
                    </ModalBody>
                    {/* <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    </ModalFooter> */}
                </ModalContent>
                </Modal>
            </>
    )
}
