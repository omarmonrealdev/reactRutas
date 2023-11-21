import { Button, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import PropTypes from 'prop-types';
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const ProductCard = ({ id, image, sku, description }) => {

  const [ comments, setComments ] = useState([]);
  const [ error, setError ] = useState('');
  const [ message, setMessage ] = useState('Comentar o ver comentarios');


  function getComments() {
    axios.get(`http://34.94.69.140:8080/products/${id}/reviews/`)
      .then(res => setComments(res.data))
      .catch(err => setError(err.message));
  };

  
  function toggle() {
    if (message === 'Comentar o ver comentarios'){
      setMessage('Ocultar Comentarios');
      getComments();
    }
    else {
      setMessage('Comentar o ver comentarios');
      setComments([]);
    }
  }

  const comentario = useRef(null);
  
  function onSubmit(e) {
    e.preventDefault();
    console.log(comentario.current.value);
    e.target.reset();
  }

  return (
    // <Link to={`/details/${id}`}>
      <Card borderRadius={10} overflow='hidden'>
        <Link to={`/details/${id}`}>
          <Image src={image} />
        </Link>
        <CardBody>
          <Heading fontSize='1xl'>{'SKU: '+ sku}</Heading>
          <Text fontSize='1xl' color='gray.400' marginY={'4px'}>{description}</Text>
        </CardBody>
        
        <Button onClick={toggle}>{message}</Button>
        {message === 'Ocultar Comentarios' ? 
            <form onSubmit={onSubmit}>
              <input ref={comentario} id="comentario" placeholder="Escribe tu comentario"></input> 
              <button type="submit">Submit</button>
            </form>
        : ''}
        {comments && comments.map(comment => <p key={comment.id}>{comment.content}</p>)}
      </Card>
    //</Link>
  )
}

ProductCard.proptypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductCard

/*
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}/>
          <Input onChange={searcher} borderRadius={20} placeholder='Buscar articulo...' variant='filled'/>
        </InputGroup>
        <ColorModeSwitch />
      </HStack>
*/