import {
  Grid,
  Box,
  Text,
  Flex,
  Container
} from "@chakra-ui/react";
import Image from "next/image";
import ProductCard from "../productCard/ProductCard";
import ProductListSlider from "./ProductListSlider";

const ProductListSlide = async({title,is_top,img = null}) => {
  'use server'
  const res = await fetch(`https://eveline.tatadev.pro/catalog/api/products/${is_top ? '?is_top=true' : ''}`)
  const products = await res.json()
  return (
    <Container
    maxW={'container.xl'}
    px={{base:'0',lg:'1rem'}}
    mt={'90px'}
    >
    <Box pos={"relative"} ps={{base:'16px',lg:'0'}}>
      <Flex
        flexDir={"row"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"6px"}
        mb={'30px'}
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
       {img && <Image
          src={img}
          alt={"smilegif"}
          width={25}
          height={25}
          style={{ width: "25px", height: "25px" }}
        />}
      </Flex>

      <ProductListSlider products={products.results}/>
     
    </Box>
    </Container>
  );
};

export default ProductListSlide;
