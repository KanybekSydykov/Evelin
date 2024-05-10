'use client'

import { Container, Flex, Text, AspectRatio,Skeleton } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import HeroSlide from "./HeroSlide";
import {motion } from "framer-motion"


const IconAnimation ={
  initial:{
      rotate:'13deg',
      type:'spring',
      transition:{duration:0.8}

  },
  animate:{
      rotate:'250deg',
      type:'spring',
      transition:{duration:0.8}
  }
}
const Hero = ({data}) => {
  return (
    <>

    <Container
    maxW={'container.xl'}
    minH={{base:'auto',lg:'100vh'}}
    pt={"140px"}
    pb={'93px'}

    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap={{ base: "50px", lg: "0" }}
        alignItems={{ base: "unset", lg: "center" }}
        justifyContent={{
          base: "unset",
          lg: "space-evenly",
          xl: "space-between",
        }}
      >
        <Flex
          fontFamily={"infant"}
          fontWeight={"700"}
          fontSize={{ base: "40px", lg: "70px", xl: "82px" }}
          color={"rgba(129,78,73,1)"}
          flexDir={"column"}
          gap={{ base: "30px", lg: "47px" }}
          lineHeight={"48px"}
          w={"auto"}
          maxW={{ base: "310px", lg: "635px" }}
          mx={{ base: "auto", lg: "0" }}
        >
          <Text textAlign={"start"}>{data.title[0]}</Text>
          <Text textAlign={"end"}>{data.title[1]}</Text>
          <Text textAlign={"center"}>{data.title[2]}</Text>
        </Flex>

        <Flex justifyContent={"center"} alignItems={"center"} pos={"relative"}>
          <AspectRatio as={motion.div}
            variants={IconAnimation}
            initial='initial'
            animate='initial'
            whileHover={"animate"}
            ratio={1}
            position={"absolute"}
            zIndex={10}
            top={{ base: "1.3px", lg: "11px" }}
            right={{ base: "30px", lg: "-1.5px" }}
            width={{ base: "30px", lg: "35px" }}
            height={{ base: "30px", lg: "35px" }}
          >
            <Image
              src={"anim-icon.svg"}
              width={40}
              height={40}
              alt={"anim-icon"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </AspectRatio>
          <AspectRatio
          as={motion.div}
          variants={IconAnimation}
          initial='initial'
          animate='initial'
          whileHover={"animate"}
          zIndex={10}
            ratio={1}
            position={"absolute"}
            bottom={{ base: "6%", lg: "-6.7px" }}
            left={{ base: "16%", lg: "-25px" }}
            width={{ base: "14px", lg: "60px" }}
            height={{ base: "14px", lg: "60px" }}
          >
            <Image
              src={"anim-icon.svg"}
              width={60}
              height={60}
              alt={"anim-icon"}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </AspectRatio>

          <AspectRatio
            ratio={16 / 9}
            w={{ base: "292px", lg: "375px", xl: "431px" }}
            h={{ base: "422px", lg: "500px", xl: "624px" }}
            borderRadius={"50rem"}
            border={"1px solid rgba(255,255,255, 1)"}
            boxShadow={"7px 7px 0 0 rgba(222,182,178,1)"}
            overflow={"hidden"}
            position={"relative"}
          >

            <HeroSlide data={data.images}/>

          </AspectRatio>
        </Flex>
      </Flex>
      </Container>
    </>
  );
};

export default Hero;
