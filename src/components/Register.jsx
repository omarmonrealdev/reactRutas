import { Box, Button, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    let userData;
    
    if (nameRef.current !== null && emailRef.current !== null && passwordRef.current !== null) {
      userData = {
        username: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }

      axios.post('http://34.94.69.140:8080/users', userData)
      .then(res => {
                    console.log(res.status,' ', res.data);
                    navigate('/');
                  })
      .catch(err => alert('Verifique que los datos ingresados sean correctos'));
      
    }
  }

  const gotoLogin = () => {
    navigate('/');
  }

  return (
    <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx='auto' border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
      <VStack spacing={4} align='flex-start' w='full'>
        
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading>Register</Heading>
          <Text>Enter user name, email and password</Text>
        </VStack>
        
        <form onSubmit={createUser} style={{width: '100%'}}> 
          
            <FormLabel htmlFor="username">{`User Name: (5 characters at least)`}</FormLabel>
            <Input ref={nameRef} id="username" rounded='none' variant='filled' w='full' mb={5}></Input>
            
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input ref={emailRef} id="email" rounded='none' variant='filled' w='full' mb={5}></Input>
                      
            <FormLabel htmlFor="password">{`Password: (6 characters at least)`}</FormLabel>
            <Input ref={passwordRef} id='password' rounded='none' variant='filled' type="password" w='full' mb={5}></Input>

            <Button type="submit" rounded='none' colorScheme="blue" w={['full', 'auto']} alignSelf='end' mb={5}>Register</Button>
            
            <Box>
              <Button onClick={gotoLogin} colorScheme="blue" rounded='none' w={['full', 'auto']} alignSelf='end'>If you have an account: Click Here</Button>
            </Box>
            
        </form>
            
            
            
 
      </VStack>
    </Box>
  )
}

export default Register
