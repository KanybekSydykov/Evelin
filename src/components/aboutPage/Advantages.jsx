import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const Advantages = ({title,advantages}) => {
  return (
    <Container px={0} position={"relative"} maxW={"unset"}>
      <Image src={'/top-rounded-bg.svg'} alt={'top rounded bg'} width={1000} height={25} style={{
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        width:'100%',
        height:'25px',
        objectFit: 'cover',
        rotate: '180deg'
      }} />
      <Image src={'/bottom-rounded-bg.svg'} alt={'top rounded bg'} width={1000} height={25} style={{
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        left: 0,
        width:'100%',
        height:'40px',
        objectFit: 'cover',
        rotate: '180deg'
      }} />
      <Image
        src={"/about-bg.png"}
        alt={"about page background image"}
        fill
        style={{ zIndex: 0, opacity: 0.3 }}
      />

      <Flex
        position={"relative"}
        zIndex={2}
        flexDir={{ base: "column" }}
        gap={"40px"}
        pt={"90px"}
        pb={"120px"}
        color={"rgba(101, 57, 52, 1)"}
        width={"100%"}
        maxW={{ base: "300px", lg: "1280px" }}
        mx={"auto"}
      >
        <Text
          fontFamily={"infant"}
          fontWeight={{ base: "600", lg: "700" }}
          fontSize={{ base: "20px", lg: "30px" }}
          lineHeight={{ base: "24px", lg: "36px" }}
          textAlign={"center"}
        >
          {title}
        </Text>

        <Flex
          flexDir={{ base: "column", lg: "row" }}
          flexWrap={{ base: "unset", lg: "wrap" }}
          justifyContent={{ base: "unset", lg: "center" }}
          gap={"30px"}
          mx={"auto"}
        >
          {advantages.map((advantage) => (
            
          <Flex
            key={advantage.id}
            flexDir={"column"}
            gap={"20px"}
            alignItems={"center"}
            justifyContent={"center"}
            fontFamily={"mulish"}
            textAlign={"center"}
            w={"277px"}
          >
            <Image
              src={"/star-about-icon.svg"}
              alt={"star icon"}
              width={30}
              height={30}
              style={{
                width: "30px",
                height: "30px",
              }}
            />

            <Text
              mt={"6px"}
              fontWeight={"700"}
              fontSize={{ base: "18px", lg: "20px" }}
              lineHeight={{ base: "22.5px", lg: "25px" }}
            >
             {advantage.title}
            </Text>
            <Text
              fontWeight={"400"}
              fontSize={{ base: "18px", lg: "20px" }}
              lineHeight={{ base: "22.5px", lg: "25px" }}
              color={"rgba(146, 113, 110, 1)"}
            >
              {advantage.content_text}
            </Text>
          </Flex>
          ))}
          
        </Flex>
      </Flex>
    </Container>
  );
};

export default Advantages;
