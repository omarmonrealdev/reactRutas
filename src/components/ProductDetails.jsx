import { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Flex, Image, Input, SimpleGrid, Text } from '@chakra-ui/react';
import axios from "axios";


const ProductDetails = () => {

  const [ product, setProduct ] = useState({description: '', createdAt: '', updatedAt: '', image: ''});
  const [ error, setError ] = useState('');
  const [ comments, setComments ] = useState([]);
  const contentRef = useRef(null);

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://34.94.69.140:8080/products/${id}/`)
      .then(res => setProduct(res.data))
      .catch(err => setError(err.message))
  }, [id]);


  useEffect(() => {
    axios.get(`http://34.94.69.140:8080/products/${id}/reviews/`)
      .then(res => setComments(res.data))
      .catch(err => setError(err.message))
  }, [id]);

  
  const onSubmit = (e) => {
    e.preventDefault();
    let data;

    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      };

    if (contentRef.current !== null) {
      data = {
        content: contentRef.current.value
      }
    }
    axios.post(`http://34.94.69.140:8080/products/${id}/reviews/`, data, config)
      .then(res => console.log(res.data))
      .catch(err => setError(err.message));
    
    e.target.reset();  
  }



  function getNewComments() {
    axios.get(`http://34.94.69.140:8080/products/${id}/reviews/`)
      .then(res => setComments(res.data))
      .catch(err => setError(err.message))
  }

  return (
    <>
      <Flex justifyContent='center' alignItems='center'>
        
        <SimpleGrid columns={{sm: 1, md: 1, lg: 1, xl: 1}} padding='10px' pt='40px' border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
          {error && <Text>{error}</Text>}
          <Link to="/main" style={{color: "dodgerblue", textAlign: 'center', marginBottom: '10px'}}>Back to home page</Link>
          <div>
            <Image borderRadius={10} maxW='md' src={product.image}/>
            <h1>{product.description}</h1>
          </div>
          <div>
            <Text mt={5} fontWeight='700'>Reviews</Text>
            <form onSubmit={onSubmit}>
              <Input ref={contentRef} id="comentario" placeholder="Write a review"  maxW='md'></Input> 
              <Button type="submit">Submit</Button>
              <Button onClick={getNewComments} ml={3}>Get new reviews</Button>
            </form>
            {comments && comments.map(comment =>
                                 <Box key={comment.id} mt={15}> 
                                   <span>{`UserId: ${comment.userId} - Created: ${comment.createdAt.substring(0, 10)}`}</span>
                                   <p>{comment.content}</p>
                                 </Box>)
            }
          </div>
        </SimpleGrid>
      </Flex>
      
    </>
  )
}

export default ProductDetails

/*
    <Card borderRadius={10} overflow='hidden'>
        <Link to={`/details/${id}`}>
          <Image src={image} />
        </Link>
        <CardBody>
          <Heading fontSize='1xl'>{'SKU: '+ sku}</Heading>
          <Text fontSize='1xl' color='gray.400' marginY={'4px'}>{description}</Text>
        </CardBody>
        {comments && comments.map(comment => <p key={comment.id}>{comment.content}</p>)}
      </Card>
*/