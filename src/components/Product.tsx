import {  Button,Card, Image, Text } from "@chakra-ui/react"

import { PenIcon, Trash2Icon,} from "lucide-react"
import { useNavigate } from "react-router-dom";

import { ProductInterface } from "@/interface/interface";

interface ProductProps{
  product:ProductInterface;
  deleteProduct:(id:number)=>void;
  updateForm:(id:number)=>void;
}


const Product = ({product,deleteProduct,updateForm}:ProductProps) => {
  const navigate = useNavigate();


  return (

    <Card.Root maxW="sm" overflow="hidden" p='4'>
    <Image
      objectFit="cover"
      maxW="250px"
      borderRadius="md"
      src={product.image || "https://placehold.co/200x300?text=No+Image"}
      alt={product.title}
    />
    <Card.Body gap="2">
      <Card.Title>{product.title}</Card.Title>
      <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
        ${product.price}
      </Text>
    </Card.Body>
    <Card.Footer gap="2">
    
        <Button variant ='surface' colorPalette='gray' onClick={()=>navigate(`/product/${product.id}`)}>See details</Button>
        <Button variant='ghost' onClick={()=>updateForm(product.id)}><PenIcon/></Button>
        <Button variant='ghost' colorPalette='red' onClick={()=>deleteProduct(product.id)}>
          <Trash2Icon/>
        </Button>
    </Card.Footer>
  </Card.Root>
  
)

  
}

export default Product