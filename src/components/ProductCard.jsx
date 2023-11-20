import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const ProductCard = ({ id, image, sku, description }) => {
  return (
    <Link to={`/details/${id}`}>
      <Card borderRadius={10} overflow='hidden'>
        <Image src={image} />
        <CardBody>
          <Heading fontSize='1xl'>{'SKU: '+ sku}</Heading>
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
