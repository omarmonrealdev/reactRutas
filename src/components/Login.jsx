import { Box, Button, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    let userData;
    
    if (nameRef.current !== null && passwordRef.current !== null){
      userData = {
        username: nameRef.current.value,
        password: passwordRef.current.value
      }

      axios.post('http://34.94.69.140:8080/login', userData)
      .then(res => {
                    localStorage.setItem('token', res.data.jwt);
                    navigate('main');
                  })
      .catch(err => alert('Usuario o contraseña invalidos'));
    }
      
  }

  return (
    <Box w={['full', 'md']} p={[8, 10]} mt={[20, '10vh']} mx='auto' border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
      <VStack spacing={4} align='flex-start' w='full'>
        
        <VStack spacing={1} align={['flex-start', 'center']} w='full'>
          <Heading>Login</Heading>
          <Text>Enter user name and password</Text>
        </VStack>
        
        <form onSubmit={loginUser} style={{width: '100%'}}> 
          
            <FormLabel htmlFor="username">User Name</FormLabel>
            <Input ref={nameRef} id="username" rounded='none' variant='filled' w='full' mb={5}></Input>
          
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input ref={passwordRef} id='password' rounded='none' variant='filled' type="password" w='full' mb={5}></Input>

            <Button type="submit" rounded='none' colorScheme="blue" w={['full', 'auto']} alignSelf='end'>Login</Button>
            <Box mt={5}>
              <Link to='register'><Button colorScheme="blue" rounded='none' w={['full', 'auto']} alignSelf='end'>Register a New User</Button></Link>  
            </Box>
        </form>
 
      </VStack>
    </Box>
  )
}

export default Login

/*
const loginUser = (e: FormEvent) => {
    e.preventDefault();
    let userData;

    if (nameRef.current !== null && passwordRef.current !== null) {
      userData = {
        username: nameRef.current.value,
        password: passwordRef.current.value
      }
    }
    axios.post('http://34.94.69.140:8080/login', userData)
      .then(res => {
                    localStorage.setItem('token', res.data.jwt);
                    navigate('/');
                  })
      .catch(err => alert('service error'));
  }
*/