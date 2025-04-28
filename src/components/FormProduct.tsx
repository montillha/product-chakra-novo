import React from "react";
import InputForm from "./InputForm";
import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import { ProductInterface } from "../interface/interface";

interface FormProductProps {
  newProduct: ProductInterface | undefined;
  setNewProduct: React.Dispatch<
    React.SetStateAction<ProductInterface | undefined>
  >;
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}

const FormProduct = ({
  newProduct,
  setNewProduct,
  setProducts,
}: FormProductProps) => {
  const postProduct = () => {
    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then((response) => {
        setProducts((prev) => [...prev, response.data]);
      })
      .catch((err) => console.log(err));
  };

  const updateProduct = (id: number) => {
    axios
      .put(`https://fakestoreapi.com/products/${id}`, newProduct)
      .then((response) => {
        const productToUpdate: ProductInterface = response.data;

        setProducts((prev) =>
          prev.map((product) => (product.id === id ? productToUpdate : product))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newProduct) return;

    if (newProduct.id) {
      updateProduct(newProduct.id);
    } else {
      postProduct();
    }
    setNewProduct(undefined);
  };

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
      <form onSubmit={handleSubmit}>
        <Stack>
          <Heading textAlign="center" mb="5">
            Product Management
          </Heading>
          <InputForm
            text="title"
            value={newProduct?.title || ""}
            onChange={(e) =>
              setNewProduct({
                ...(newProduct ?? ({} as ProductInterface)),
                title: e.target.value,
              })
            }
          />
          <InputForm
            text="price"
            type="number"
            value={newProduct?.price || ""}
            onChange={(e) =>
              setNewProduct({
                ...(newProduct ?? ({} as ProductInterface)),
                price: Number(e.target.value),
              })
            }
          />
          <InputForm
            text="description"
            value={newProduct?.description || ""}
            onChange={(e) =>
              setNewProduct({
                ...(newProduct ?? ({} as ProductInterface)),
                description: e.target.value,
              })
            }
          />
          <InputForm
            text="category"
            value={newProduct?.category || ""}
            onChange={(e) =>
              setNewProduct({
                ...(newProduct ?? ({} as ProductInterface)),
                category: e.target.value,
              })
            }
          />
          <Button type="submit" colorScheme="blue">
            Register/Update
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FormProduct;
