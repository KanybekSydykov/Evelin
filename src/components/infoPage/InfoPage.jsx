"use client";

import { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Text,
  Box,
  Container,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const InfoPage = ({ params, data }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    setTabIndex(params.tab ? parseInt(params.tab, 10) : 0);
  }, [params.tab]);


  function getOrderedList(text) {
    return text.split(/(?=\d+\.\s)/);
  }

  return (
    <Container maxW={"container.xl"} pt={"140px"}>
      <Flex
        w={"100%"}
        fontFamily={"mulish"}
        type="range"
        min="0"
        max="2"
        value={tabIndex}
        onChange={handleSliderChange}
        pb={"30px"}
      >
        <Tabs
          index={tabIndex}
          onChange={handleTabsChange}
          w={"100%"}
          display={"flex"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <TabList
            display={"flex"}
            flexDir={"column"}
            justifyContent={{ base: "center", lg: "flex-start" }}
            alignItems={"center"}
            gap={"40px"}
            pb={"60px"}
            mt={{ base: "0", lg: "0" }}
            pe={{ base: "0", lg: "50px" }}
            borderRight={{
              base: "none",
              lg: "1px solid rgba(200, 131, 124, 1)",
            }}
            borderBottom={{
              base: "1px solid rgba(200, 131, 124, 1)",
              lg: "none",
            }}
          >
            <Tab
              as={Link}
              href={"/info?tab=0"}
              _focus={{ boxShadow: "none" }}
              _selected={{
                color: "rgba(101, 57, 52, 1)",
                borderColor: "rgba(236, 169, 162, 1)",
              }}
              width={"max-content"}
              color={"rgba(101, 57, 52, 1)"}
              fontFamily={"mulish"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"22.5px"}
            >
              ОПТОВИКАМ
            </Tab>
            <Tab
              as={Link}
              href={"/info?tab=1"}
              _focus={{ boxShadow: "none" }}
              _selected={{
                color: "rgba(101, 57, 52, 1)",
                borderColor: "rgba(236, 169, 162, 1)",
              }}
              width={"max-content"}
              color={"rgba(101, 57, 52, 1)"}
              fontFamily={"mulish"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"22.5px"}
            >
              ОПЛАТА
            </Tab>
            <Tab
              as={Link}
              href={"/info?tab=2"}
              _focus={{ boxShadow: "none" }}
              _selected={{
                color: "rgba(101, 57, 52, 1)",
                borderColor: "rgba(236, 169, 162, 1)",
              }}
              width={"max-content"}
              color={"rgba(101, 57, 52, 1)"}
              fontFamily={"mulish"}
              fontWeight={"400"}
              fontSize={"18px"}
              lineHeight={"22.5px"}
            >
              ДОСТАВКА
            </Tab>
          </TabList>

          <TabPanels
            py={{ lg: "unset" }}
            mt={{ base: "50px", md: "unset" }}
            ps={{ lg: "50px" }}
            pe={{ lg: "0" }}
          >
            <TabPanel p={{ lg: "none" }}>
              <Flex
                flexDir={"column"}
                gap={"30px"}
                mb={{ base: "33px", lg: "0" }}
              >
                <Text
                  textAlign={{ base: "center", lg: "start" }}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  Чтобы заказать оптом
                </Text>
                {data.wholesaler_info.products.map((product, index, array) => (
                  <Flex
                    key={index}
                    flexDir={{ base: "column", lg: "row" }}
                    alignItems={"center"}
                    gap={{ base: "10px", lg: "20px" }}
                    mb={array.length - 1 === index && "120px"}
                  >
                    <Box
                      aspectRatio={0.69}
                      width={"186px"}
                      height={"auto"}
                      maxHeight={"268px"}
                      pos={"relative"}
                      mx={"auto"}
                    >
                      <Image
                        src={product.image ? product.image : "/evelin-logo.jpeg"}
                        alt={"wholesale product image"}
                        width={300}
                        height={300}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>

                    <Text
                      fontFamily={"mulish"}
                      fontWeight={"500"}
                      fontSize={"16px"}
                      lineHeight={"24px"}
                      color={"rgba(101, 57, 52, 1)"}
                    >
                      {product.text}
                    </Text>
                  </Flex>
                ))}

                <Flex flexDir={"column"} gap={"8px"}>
                  {getOrderedList(data.wholesaler_info.text).map(
                    (text, index) => (
                      <Text
                        key={index}
                        m={0}
                        p={0}
                        fontWeight={"500"}
                        fontSize={"18px"}
                        lineHeight={"27px"}
                        color={"rgba(117, 73, 68, 1)"}
                      >
                        {text.trim()}
                      </Text>
                    )
                  )}
                </Flex>
                <Text
                  mt={"40px"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  lineHeight={"27px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  {data.wholesaler_info.additional_text}
                </Text>
                <Box
                  as={Link}
                  href={data.wholesaler_info.button_link}
                  w={{base:'358px',lg:'455px'}}
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
                  target="_blank"
                  _hover={{
                    textDecoration: "underline",
                  }}
                >
                  {data.wholesaler_info.button_text}
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel p={{ lg: "none" }}>
              <Flex
                flexDir={"column"}
                gap={"30px"}
                my={{ base: "34px", lg: "0" }}
              >
                <Text
                  textAlign={{ base: "center", lg: "start" }}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  {data.payment_info.title}
                </Text>
                {getOrderedList(data.payment_info.text).map((text, index) => (
                  <Text
                    key={index}
                    fontWeight={"400"}
                    fontSize={"18px"}
                    lineHeight={"27px"}
                    color={"rgba(117, 73, 68, 1)"}
                  >
                    {text}
                  </Text>
                ))}

                <Text
                  mt={"40px"}
                  fontWeight={"500"}
                  fontSize={"18px"}
                  lineHeight={"27px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  {data.payment_info.additional_text}
                </Text>
              </Flex>
            </TabPanel>
            <TabPanel p={{ lg: "none" }}>
              <Flex
                flexDir={"column"}
                gap={"30px"}
                my={{ base: "34px", lg: "0" }}
              >
                <Text
                  textAlign={{ base: "center", lg: "start" }}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  lineHeight={"30px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  {data.delivery_info.title}
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={"18px"}
                  lineHeight={"27px"}
                  color={"rgba(117, 73, 68, 1)"}
                >
                  {data.delivery_info.text}
                </Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Container>
  );
};

export default InfoPage;
