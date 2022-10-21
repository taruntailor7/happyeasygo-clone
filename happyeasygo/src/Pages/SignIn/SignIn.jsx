import { Box, Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export const SignIn = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <ModalBody bg="#f7f8fc" borderRadius="10px">
                    <Text>Sign in with</Text>
                    <Box w="100%" bg="white" p={2}>Google</Box>
                    <Text>Sign in with mobile or email</Text>
                    <Input placeholder='large size' size='lg' />
                    <Input placeholder='large size' size='lg' />
                </ModalBody>
                {/* <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                </ModalFooter> */}
            </ModalContent>
            </Modal>
        </>
    )
}
