
import { Flex, Heading,} from '@chakra-ui/react'
import FormProduct from '../FormProduct'

import { useEffect, useState } from 'react';
import axios  from 'axios';
import Product from '../Product';
import { ProductInterface } from '@/interface/interface';

const ProductsPage = () => {
  

    const[products,setProducts]= useState<ProductInterface[]>([]);

    
    const[newProduct,setNewProduct]=useState<ProductInterface| undefined>(undefined);


    const deleteProduct=(id:number)=>{
       axios.delete(`https://fakestoreapi.com/products/${id}`)
        .then(()=>{
            const newProducts=products.filter((product)=>product.id!=id);
            setProducts(newProducts);
          
        })
        .catch((err)=>{
            console.log(err)
          
        });

    }   
      const updateForm=(id:number)=>{
            axios.get(`https://fakestoreapi.com/products/${id}`)
             .then((response)=>{
                 const productToUpdate:ProductInterface=response.data;
        
                 setNewProduct(productToUpdate);
               
             })
             .catch((err)=>{
                 console.log(err)
               
             });
             window.scrollTo({ top: 0, behavior: 'smooth' }); 
    
      }

 
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(response=>setProducts(response.data))
        .catch(err=>console.log(err));
    },[]);

  return (
       <>
       <Heading as='h1'size="4xl" textAlign="center" mt="4" color="gray.800">Product Store</Heading>

       <FormProduct newProduct={newProduct} setNewProduct={setNewProduct} setProducts={setProducts}></FormProduct>

       <Flex wrap="wrap" gap="10" justify="center" p="6" m='4'>
        {
            products.map((product)=>(
                <Product key={product.id} product={product} deleteProduct={deleteProduct} updateForm={updateForm}/>

            ))
        }
       </Flex>
       </>
  )
}

export default ProductsPage