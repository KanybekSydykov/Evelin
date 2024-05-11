"use client";

import { Box, Flex, Text, AspectRatio, Container ,useMediaQuery} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IconAnimation = {
  initial: {
    rotate: "13deg",
    type: "spring",
    transition: { duration: 0.8 },
  },
  animate: {
    rotate: "250deg",
    type: "spring",
    transition: { duration: 0.8 },
  },
};

const About = ({ data }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "unset", lg: "center" }}
        gap={{ base: "32px", lg: "0" }}
        justifyContent={{
          base: "unset",
          lg: "space-evenly",
          xl: "space-between",
        }}
        pb={'75px'}

      >
        <Flex flexDir={"column"} gap={"30px"} maxW={"700px"}>
          <Text
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={{ base: "20px", lg: "30px" }}
            lineHeight={{ base: "28px", lg: "37px" }}
            color={"rgba(129,78,73,1)"}
          >
            {data.title}
          </Text>

          <Text
            fontFamily={"mulish"}
            fontWeight={"400"}
            fontSize={{ base: "16px", lg: "22px" }}
            lineHeight={{ base: "24px", lg: "33px" }}
            color={"rgba(117,73,66,1)"}
          >
            {data.description.split(/\r?\n/).map((paragraph, index, array) => (
              <React.Fragment key={index}>
                {paragraph}
                {array.length -1 === index ? null : <><br /> <br/></>}
              </React.Fragment>
            ))}
          </Text>
        </Flex>

        <Flex
          justifyContent={"end"}
          alignItems={"center"}
          pos={"relative"}
          pe={{ base: "24px", lg: "0" }}
        >
          <AspectRatio
            as={motion.div}
            variants={IconAnimation}
            initial="initial"
            animate="initial"
            whileHover={"animate"}
            whileInView={isMobile ? "animate" : "initial"}
            zIndex={10}
            pos={"absolute"}
            top={{ base: "-11px", lg: "-15px" }}
            right={{ base: "12px", lg: "40px" }}
            width={{ base: "30px", lg: "60px" }}
            height={{ base: "30px", lg: "60px" }}
          >
            <Image
              src={"anim-icon.svg"}
              width={60}
              height={60}
              alt={"anim-icon"}
              style={{
                width: "100%",
                height: "100%",
                transform: "rotate(315deg)",
              }}
            />
          </AspectRatio>

          <AspectRatio
            ratio={1}
            w={{ base: "150px", lg: "384px" }}
            h={{ base: "150px", lg: "384px" }}
            borderRadius={"50%"}
            overflow={"hidden"}
            position={"relative"}
          >
            <Image
              src={data.image}
              alt={"about"}
              width={1920}
              height={1080}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "100%",
                objectFit: "cover",
                margin: "2px",
              }}
            />
          </AspectRatio>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
