import React from "react";
import {
  Grid,
  Box,
  Text,
  Flex,
  Button,
  GridItem,
  AspectRatio,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../productCard/ProductCard";
import ProdListIcon from "./ProdListIcon";

const ProductList = async({ start,title, pagination = false ,is_new=false,img}) => {
  'use server'
  const res = await fetch(`https://eveline.tatadev.pro/catalog/api/products/${is_new ? '?is_new=true' : ''}`)
  const products = await res.json()

  console.log(products);
  return (
    <Box pos={"relative"}
    >
      <ProdListIcon start={start} />
      <Flex
        flexDir={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"6px"}
      >
        <Text
          fontFamily={"infant"}
          fontWeight={"700"}
          fontSize={{base:"26px",lg:'40px'}}
          lineHeight={{base:"31px",lg:'48px'}}
          color={"rgba(129,78,73,1)"}
        >
         {title}
        </Text>
        <Image
          src={img}
          alt={"smilegif"}
          width={25}
          height={25}
          style={{ width: "25px", height: "25px" }}
        />
      </Flex>
      <Grid
        gridTemplateColumns={{base:"repeat(2, minmax(171px,191px))",lg:"repeat(3, 277px)",xl:"repeat(4, 277px)"}}
        gap={{base:"16px",lg:'80px',xl:'15px'}}
        mt={"35px"}
      >
        {products.results.map((item) => (
          <GridItem fontFamily={"mulish"} transition={"all 0.3s ease"} p={'.2px'} key={item.id} _hover={{boxShadow:"0px 0px 4px rgba(222, 182, 178, 1)"}}>
            <ProductCard productDetails={item} />
          </GridItem>
        ))}
      </Grid>

      {pagination && products.count > 8 &&(
        <Text
          fontFamily={"mulish"}
          fontWeight={600}
          fontSize={"14px"}
          lineHeight={"21px"}
          color={"rgba(157,157,157,1)"}
          textAlign={"center"}
          mt={{base:"30px",lg:'50px'}}
          _hover={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Загрузить ещё
        </Text>
      )}
    </Box>
  );
};

export default ProductList;
