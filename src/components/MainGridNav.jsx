
import { useState } from 'react';
import { HStack, SimpleGrid, Image, InputGroup, InputLeftElement, Input} from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import insurgentes from '../assets/images-calafias/insurgentes.jpg';
import { BsSearch } from "react-icons/bs";
import ProductCard from './ProductCard';



const MainGridNav = () => {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      image: insurgentes,
      sku: 'CALAFIA #1',
      description: 'Insurgentes - Florido - Mariano'
    },
    {
      id: 2,
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lff-st01.jpg',
      sku: 'LFF-3333',
      description: 'Contorsionista stress relierver'
    },
    {
      id: 3,
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lsz-sp20.jpg',
      sku: 'SPY-4444',
      description: 'Spy stress relierver'
    },
    {
      id: 4,
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lff-sh06.jpg',
      sku: 'HER-5555',
      description: 'Hero stress relierver'
    }
  ]);
  
  const [search, setSearch] = useState('');


  

  console.log(products);

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

      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding='10px' spacing={5}>
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
