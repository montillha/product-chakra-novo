
import React from 'react'
import InputForm from './InputForm';
import { Box, Button, Heading, Stack } from '@chakra-ui/react';


const handleSubmit = (e: React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault();
}


const FormProduct = () => {
  return (
    <Box
    maxW="400px"
    mx="auto"
    mt="10"
    p="6"
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    bg="white"

  >
    
    <form onSubmit={handleSubmit} >
    <Stack>
    <Heading textAlign='center' mb='5'>Product Management</Heading>
          <InputForm text="title"/>
          <InputForm text="price" type='number'/>
          <InputForm text="description"   />
          <InputForm text="category"   />
          <Button type="submit" colorScheme="blue">
          Register/Update
          </Button>
        </Stack>
      
    </form>
    </Box>
  )
}

export default FormProduct