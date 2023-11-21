
import { useState, useEffect } from 'react';
import axios from "axios";
import { HStack, SimpleGrid, Text, Image, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import { BsSearch } from "react-icons/bs";
import ProductCard from './ProductCard';







const MainGridNav = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

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

  return (
    <>
      <HStack padding='10px'>
        <Image src={logo} boxSize='60px'/>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}/>
          <Input onChange={searcher} borderRadius={20} placeholder='Buscar articulo...' variant='filled'/>
        </InputGroup>
        <ColorModeSwitch />
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
