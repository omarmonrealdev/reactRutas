
import { useState, useEffect } from 'react';
import axios from "axios";
import { HStack, SimpleGrid, Text, Image, InputGroup, InputLeftElement, Input, Button } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import { BsSearch } from "react-icons/bs";
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';


const MainGridNav = () => {
  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://34.94.69.140:8080/products/')   
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message))
  }, []);

//filtrado
let results = [];

if (!search) {
  results = products;
}
else{
  results = products.filter((product) => product.description.toLowerCase().includes(search.toLowerCase()))
}

const searcher = (e) => {
  setSearch(e.target.value);
  console.log(search)
}

//logout
const logout = () => {
  localStorage.removeItem('token');
  navigate('/');
}

  return (
    <>
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}/>
          <Input onChange={searcher} borderRadius={20} placeholder='Buscar articulo...' variant='filled'/>
        </InputGroup>
        <ColorModeSwitch />
        <Button onClick={logout}>Logout</ Button>
      </HStack>

      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={10}>
        {results.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id}
            image={product.image}
            sku={product.sku}
            description={product.description}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default MainGridNav
