import { Badge, Box, Button, Card, Flex, Image, Text } from '@chakra-ui/react'
import  { useEffect, useState } from 'react'
import { ProductInterface } from "@/interface/interface";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeft } from 'lucide-react';

const SingleProductPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const productId = id ? Number(id) : null; 
  const [detailedProduct, setdetailedProduct] = useState<ProductInterface | undefined>(undefined);

  useEffect(() => {
    if (id) {
      axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response => {
          setdetailedProduct(response.data);
          console.log(detailedProduct)
        })
        .catch(err => console.error("Erro ao buscar produto:", err));
    }
  }, [id]);

  
  if(!detailedProduct) 
    return <Text>Product not Found</Text>

  return (
    
    <Flex
    direction="column"
    align="center"
    justify="center"
    p="4"
    >
    <Button
        onClick={() => navigate('/')}
        colorScheme="blue"
        mb="4"
        alignSelf="flex-start"
      >
        <ChevronLeft/>
    </Button>
    <Box 
        maxW="lg"
        p="4" 
        borderRadius="md" 
        boxShadow="lg" 
        bg="white"
    >
     
      <Card.Root maxW="sm" overflow="hidden" p='4'>
          <Image
            objectFit="cover"
            maxW="250px"
            borderRadius="md"
            src={detailedProduct.image || "https://placehold.co/200x300?text=No+Image"}
            alt={detailedProduct.title}
          />
          <Card.Body gap="2">
          <Badge>{detailedProduct.category}</Badge>
            <Card.Title>{detailedProduct.title}</Card.Title>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              ${detailedProduct.price}
            </Text>
            <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
              {detailedProduct.description}
            </Text>
          
          </Card.Body>
        </Card.Root>
      </Box>
    </Flex>
    
  )
}

export default SingleProductPage