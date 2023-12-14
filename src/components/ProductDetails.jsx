import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import insurgentesmariano from '../assets/images-calafias/insurgentesmariano.png';


const ProductDetails = () => {

  const [products, setProducts] = useState([
    {
      id: '1',
      image: insurgentesmariano,
      description: 'RUTA: insurgentes - florido - mariano',
      lugares: ['Parque industrial Otay', 'Zona Industrial Murua', 'Parque Chilpancingo', 'Ley Murua', 'Central Camionera', '5 y 10'],
      video: 'https://www.youtube.com/embed/Ma1kJcA70yo?si=4OroZT99UvcsibRG',
    },
    {
      id: '2',
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lff-st01.jpg',
      sku: 'LFF-3333',
      description: 'Contorsionista stress relierver',
      lugares: ['Parque industrial Otay', 'Zona Industrial Murua', 'Parque Chilpancingo', 'Ley Murua', 'Central Camionera', '5 y 10'],
      video: 'https://www.youtube.com/embed/Ma1kJcA70yo?si=4OroZT99UvcsibRG',
    },
    {
      id: '3',
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lsz-sp20.jpg',
      sku: 'SPY-4444',
      description: 'Spy stress relierver',
      lugares: ['Parque industrial Otay', 'Zona Industrial Murua', 'Parque Chilpancingo', 'Ley Murua', 'Central Camionera', '5 y 10'],
      video: 'https://www.youtube.com/embed/Ma1kJcA70yo?si=4OroZT99UvcsibRG',
    },
    {
      id: '4',
      image: 'https://d2b9vjwb3yw5iu.cloudfront.net/files/Primary/large/lff-sh06.jpg',
      sku: 'HER-5555',
      description: 'Hero stress relierver',
      lugares: ['Parque industrial Otay', 'Zona Industrial Murua', 'Parque Chilpancingo', 'Ley Murua', 'Central Camionera', '5 y 10'],
      video: 'https://www.youtube.com/embed/Ma1kJcA70yo?si=4OroZT99UvcsibRG',
    }
  ]);
  

const { id } = useParams();  
const [ product, setProduct ] = useState(products.filter(item => item.id === id));
  

  

  return (
    <>
      <Flex justifyContent='center' alignItems='center'>
        
        <SimpleGrid columns={{sm: 1, md: 1, lg: 1, xl: 1}} padding='10px' pt='40px' border={['none', '1px']} borderColor={['', 'gray.300']} borderRadius={10}>
          
          <Link to="/" style={{color: "dodgerblue", textAlign: 'center', marginBottom: '10px'}}>Back to home page</Link>
          <div>

            <h1>{product[0].description}</h1>
            <Image borderRadius={10} maxW='md' src={product[0].image}/>
            
            <h2>Puntos importantes que recorre:</h2>
            <ol>
              {product[0].lugares.map(lugar => <li key={lugar} style={{marginLeft: '10px'}}>{lugar}</li>)}
            </ol>
            <iframe
              id="video"
              width="400"
              height="700"
              src={product[0].video}
              allowFullScreen
            ></iframe>       
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