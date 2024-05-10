import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ColorsSlider from "./ColorsSlider";

const Colors = ({colors,getSelectedColor}) => {
  return (
    <Flex 
    flexDir={"column"} 
    gap={"20px"} 
    mt={{base:"60px",lg:'50px'}} 
    ps={{base:'16px',md:'0'}}
    alignItems={{base:'flex-start',md:'center',lg:'flex-start'}}
    >
      <Text
        fontFamily={"mulish"}
        fontWeight={"700"}
        fontSize={"18px"}
        lineHeight={"27px"}
        color={"rgba(104, 50, 44, 1)"}
      >
        Цветa
      </Text>
      <ColorsSlider  getSelectedColor={getSelectedColor} colors={colors}/>
    </Flex>
  );
};

export default Colors;
