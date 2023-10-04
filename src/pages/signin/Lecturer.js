import { Box, Button, Container, Flex, FormControl, FormErrorMessage, HStack, Heading, Icon, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import image from '../../images/25.png'
import {FaUser} from 'react-icons/fa'
import {EmailIcon, ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
import arrow from '../../images/arrow6.svg'
import punct from '../../images/punct.svg'

import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useContext, useEffect, useState } from "react";
import { Form, NavLink, Outlet, redirect } from "react-router-dom";
import { color } from "framer-motion";
export default function Lecturer() {
    useEffect(() =>{
        document.body.classList.add('bg-color')
    }, [])

    const [show, setShow] =useState(false)
    

    const handleShow = () => setShow(!show)
  
    const buttonReturn={
        bgColor: '#213655',
        color: 'white',
        ':hover':{
            color: 'black',
            bgColor:'blue.100'
        }
    }
  return (
    <div>
    

    <GoogleOAuthProvider clientId="950695587102-tshfvmoi0kj2fasfmiiem3ed022eaf19.apps.googleusercontent.com">
            <Flex flexDir={'column'}mt={{base:'60px',md:'150px',lg:'100px',xl:'100px'}} bgColor={'white'} py={'20px'} w={{base:'90%',xl:'50%'}} mr={'auto'} ml={'auto'}>
            <Flex flexDirection={'row'} justify={'center'} align={'center'} mb={'20px'}>
                <Box w={'30px'} mt={'20px'} mr={'10px'}>
                    <img src={punct} style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}}  />
                </Box>
               
                <Heading fontFamily={'mono'} mt={'30px'} color={'#213655'}>Sign Up as a Lecturer</Heading>
            </Flex>
            
            <Container mt={'40px'} mr={'auto'} ml={'auto'} >
                    <Form method="post" action="/signin/lecturer">
                        <FormControl mb={'30px'} >
                            <InputGroup alignItems={'center'}>
                                <InputLeftElement pointerEvents={'none'}>
                                    <Icon as={FaUser} color='gray'/>
                                </InputLeftElement>
                                <Input type="text" name="name" placeholder="Full Name" w={'100%'} border={'1px solid gray'} />
                    
                            </InputGroup>
                        </FormControl>

                        
                            <FormControl mb={'30px'}>
                                <InputGroup>
                                    <InputLeftElement pointerEvents={'none'}>
                                        <EmailIcon color='gray'/>
                                    </InputLeftElement>
                                    <Input type="email" name="email"  placeholder="Email" w={'100%'} border={'1px solid gray'} outline={'none'}/>        
                                </InputGroup>
                            </FormControl>
                                        


                        <FormControl mb={'30px'}>
                            <InputGroup>
                                <InputLeftElement>
                                    <Box onClick={handleShow} variant={'ghost'}>
                                    {show ? <ViewIcon color={'gray'}/> :<ViewOffIcon color={'gray'}/>}
                                    </Box>
                                </InputLeftElement>
                                <Input type={show ? 'text' : 'password'} name="password"  placeholder="Password" w={'100%'} border={'1px solid gray'} />

                            </InputGroup>
                        </FormControl>
                        <Flex justify={'center'} mb={'30px'}>
                            <Button type="submit" colorScheme="red" w={'30%'}>
                                Get Started
                            </Button>
                        </Flex>

                        <Text textAlign={'center'} mb={'20px'} color={'gray'} fontSize={'20px'}>or</Text>
                        

                        
                    </Form>
                    <Flex justify={'center'} mb={'30px'}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        
                        />
                    </Flex>
                    <Box pos={'absolute'} w={{base:'100px',md:'130px',lg:'150px', xl:'150px'}} bottom={'25%'}>
                        <img src={arrow} style={{filter:'invert(34%) sepia(71%) saturate(3040%) hue-rotate(328deg) brightness(101%) contrast(89%)'}} />
                    </Box>
                                
            </Container>
        </Flex>
        </GoogleOAuthProvider>

        <Outlet/>
        
        
    </div>
  )

}

export const lecturerRegister = async ({request}) => {
    console.log(request)
    const data = await request.formData()

    const submission = {
        lecturerName: data.get('name'),
        lecturerEmail: data.get('email'),
        lecturerPassword: data.get('password')
    }

    localStorage.setItem('Lecturer', JSON.stringify(submission))
    
    console.log(submission)
    return redirect('/login')
}