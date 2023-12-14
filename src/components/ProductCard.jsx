import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ProductCard = ({ id, image, sku, description }) => {

  return (
    <Link to={`/details/${id}`}>
      <Card borderRadius={10} overflow='hidden'>
        <Image src={image} />
        <CardBody>
          <Heading fontSize='1xl'>{sku}</Heading>
          <Text fontSize='1xl' color='gray.400' marginY={'4px'}>{description}</Text>
        </CardBody>
      </Card>
    </Link>
  )
}

ProductCard.proptypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ProductCard














// function getComments() {
  //   axios.get(`http://34.94.69.140:8080/products/${id}/reviews/`)
  //     .then(res => setComments(res.data))
  //     .catch(err => setError(err.message));
  // };

  
  // function toggle() {
  //   if (message === 'Comentar o ver comentarios'){
  //     setMessage('Ocultar Comentarios');
  //     getComments();
  //   }
  //   else {
  //     setMessage('Comentar o ver comentarios');
  //     setComments([]);
  //   }
  // }

  // const comentario = useRef(null);
  
  // function onSubmit(e) {
  //   e.preventDefault();
  //   console.log(comentario.current.value);
  //   e.target.reset();
  // }


  /* 
  dentro del return
  <Button onClick={toggle}>{message}</Button>
        {message === 'Ocultar Comentarios' ? 
            <form onSubmit={onSubmit}>
              <input ref={comentario} id="comentario" placeholder="Escribe tu comentario"></input> 
              <button type="submit">Submit</button>
            </form>
        : ''}
        {comments && comments.map(comment => <p key={comment.id}>{comment.content}</p>)} */