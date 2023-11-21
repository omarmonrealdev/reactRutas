import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import axios from "axios";


const ProductDetails = () => {

  const [ product, setProduct ] = useState({description: '', createdAt: '', updatedAt: ''});
  const [ error, setError ] = useState('');
  const [ comments, setComments ] = useState([]);

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

  console.log(comments);

  return (
    <>
      {error && <Text>{error}</Text>}
      <div>
        <h1>{product.description}</h1>
      </div>
      <div>
        <h2>{product.createdAt}</h2>
        <h2>{product.updatedAt}</h2>
      </div>
      {comments && comments.map(comment => <p key={comment.id}>{comment.content}</p>)}
      <Link to="/" style={{color: "dodgerblue"}}>Regresar a pagina principal</Link>
    </>
  )
}

export default ProductDetails
