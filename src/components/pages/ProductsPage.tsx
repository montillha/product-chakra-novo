
import { Flex, Heading,} from '@chakra-ui/react'
import FormProduct from '../FormProduct'

import { useEffect, useState } from 'react';
import axios  from 'axios';
import Product from '../Product';
import { toaster } from '../ui/toaster';

const ProductsPage = () => {
    interface ProductInterface{
        id:number;
        title:string;
        price:number;
        decription:string;
        category:string;
        image:string;
    }

    const[products,setProducts]= useState<ProductInterface[]>([]);


    function deleteProduct(id:number){
       axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(()=>{
            const newProducts=products.filter((product)=>product.id!=id);
            setProducts(newProducts);
            toaster.create({
                title: "Product deleted ",
                type: 'success'
              })
        })
        .catch((err)=>{
            console.log(err)
            toaster.create({
                title: "Error deleting the product!",
                type: 'error'
              })
        });

    }   
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>setProducts(response.data))
        .catch(err=>console.log(err));
    },[]);

  return (
       <>
       <Heading as='h1'size="4xl" textAlign="center" mt="4" color="gray.800">Product Store</Heading>
       <FormProduct></FormProduct>
       <Flex wrap="wrap" gap="10" justify="center" p="6" m='4'>
        {
            products.map((product)=>(
                <Product key={product.id} product={product} deleteProduct={deleteProduct}/>

            ))
        }
       </Flex>
       </>
  )
}

export default ProductsPage