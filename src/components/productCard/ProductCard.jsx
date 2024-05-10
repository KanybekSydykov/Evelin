'use client'

import React, { useState,useEffect } from "react";
import {
  AspectRatio,
  Flex,
  Link as ChakraLink,
  Text,
  Grid,
  GridItem,
  Skeleton,
  Box
} from "@chakra-ui/react";
import Link from "next/link";
import CardSlider from "./CardSlider";
import Prices from "../productPage/prices/Prices";

const ProductCard = ({ priceDir = 'column', productDetails }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [product, setProduct] = useState(productDetails);
  
  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);


  return (
    <Skeleton isLoaded={product} startColor='rgba(199,131,124,1)' endColor='rgba(236,169,162,1)'>
      <Link
      href={`/dress?id=${product && product.id}`}
      style={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
      >
     
      <Flex
        aspectRatio={171 / 283}
        width={"100%"}
        h={"auto"}
        maxH={"100%"}
        pos={"relative"}
      >
        <CardSlider activeSlideIndex={activeSlide} product={product} />
        <Grid
          position={"absolute"}
          top={0}
          left={0}
          w={"100%"}
          h={"100%"}
          opacity={0}
          zIndex={100}

          gridTemplateColumns={`repeat(${product && product.media ? product.media.length : 0}, minmax(0,1fr))`}
        >
          {product && product.media && product.media.map((item, index) => (
            <GridItem key={index} onMouseEnter={() => setActiveSlide(index)} w={"100%"} h={"100%"} />
          ))}
        </Grid>
        <Box pos={'absolute'}
                 left={'4px'}
                 top={'4px'}
                 width={'max-content'}
                 padding={'.5px 8px'}
                 fontFamily={'mulish'}
                 fontWeight={700}
                 fontSize={'14px'}
                 lineHeight={'21px'}
                 bg={'rgba(25, 143, 65, 0.7)'}
                 color={'#fff'}
                 display={'flex'}
                 flexDir={'column-reverse'}
                 gap={'10px'}

            >
              {
                product && product.tags.map((tag, index) => (
                  <Text key={index} >{tag.tag}</Text>
                ))
              }
            </Box>
      </Flex>
      <Text
        color={"rgba(117, 73, 68, 1)"}
        fontSize={"18px"}
        fontWeight={"700"}
        lineHeight={"27px"}
        mt={"30px"}
        ps={'2px'}
        height={'52px'}
        noOfLines={2}
        textOverflow={"ellipsis"}
      >
        {product ? product.name : ""}
      </Text>
      <Flex flexDir={"column"} gap={"16px"} px={'2px'} mt={"10px"} maxW={'190px'}>
        {/* Render price components here */}
        <Prices dir={'row'} prices={product}/>
      </Flex>

      <Box
        href={"/productDetails/?id=" + `${product ? product.id : ''}`}
        w={"100%"}
        h={"50px"}
        bg={"gradientBg"}
        color={"#fff"}
        fontFamily={"mulish"}
        fontWeight={"600"}
        fontSize={"18px"}
        lineHeight={"27px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"26px"}
        _hover={{
          textDecoration: "underline",
        }}
      >
        Подробнее
      </Box>
      </Link>
    </Skeleton>
  );
};


export default ProductCard;
