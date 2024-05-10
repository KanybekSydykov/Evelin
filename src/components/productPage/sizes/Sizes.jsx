"use client";

import React, { useState } from "react";
import { Flex, Text, Box, Skeleton } from "@chakra-ui/react";

const Sizes = ({ sizes, getSelectedSize }) => {
  const [selectedSize, setSelectedSize] = useState(0);

  function setSize(size, id) {
    getSelectedSize(size);
    setSelectedSize(id);
  }

  console.log(sizes);
  return (
    <Flex flexDir={"column"} gap={"20px"} mt={"40px"}>
      <Text
        fontFamily={"mulish"}
        fontWeight={"700"}
        fontSize={"18px"}
        lineHeight={"27px"}
        color={"rgba(104, 50, 44, 1)"}
      >
        Размеры
      </Text>

      {sizes ? (
        <Flex flexDir={"row"} gap={"10px"}>
          {sizes.map((item, id) => (
            <Box
              key={id}
              w={"80px"}
              h={"51px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              border={"1px solid rgba(236, 169, 162, 1)"}
              fontFamily={"mulish"}
              fontWeight={"700"}
              fontSize={"16px"}
              lineHeight={"20px"}
              color={selectedSize === id ? "#fff" : "rgb(69,29,25)"}
              bg={
                selectedSize === id ? "rgba(236, 169, 162, .8)" : "transparent"
              }
              transition={"all .3s ease-in"}
              onClick={() => setSize(item, id)}
              _hover={{
                bg: "rgba(236, 169, 162, .8)",
                color: "#fff",
                cursor: "pointer",
                transition: "all .3s ease-in",
              }}
            >
              {item.size}
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex flexDir={"row"} gap={"10px"}>
          <Skeleton
            w={"80px"}
            h={"51px"}
            startColor="rgba(199,131,124,1)"
            endColor="rgba(236,169,162,1)"
          ></Skeleton>
          <Skeleton
            w={"80px"}
            h={"51px"}
            startColor="rgba(199,131,124,1)"
            endColor="rgba(236,169,162,1)"
          ></Skeleton>
          <Skeleton
            w={"80px"}
            h={"51px"}
            startColor="rgba(199,131,124,1)"
            endColor="rgba(236,169,162,1)"
          ></Skeleton>
        </Flex>
      )}
    </Flex>
  );
};

export default Sizes;
