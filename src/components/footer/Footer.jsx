import React from "react";
import { Flex, Box, Text, Container } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

const Footer = ({data}) => {
  return (
    <Flex
      flexDir={"column"}
      flexWrap={"wrap"}
      p={{base:"50px 16px",lg:'50px 0px 0px 0px'}}
      bg={"gradientBg"}
    >
      <Container
        display={"flex"}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "unset", lg: "space-between" }}
        maxW={"container.xl"}
      >
        <Flex
          fontFamily={"mulish"}
          flexDir={"column"}
          gap={{base:"40px",lg:'30px'}}
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"27px"}
          color={"#fff"}
          justifyContent={{base:"center",lg:'flex-start'}}
          alignItems={"flex-start"}
          width={{ base: "100%", lg: "max-content" }}
          height={'max-content'}
        >
          <Text color={"#fff"} fontSize={"20px"} lineHeight={'30px'} fontWeight={"700"} mb={{base:"10px",lg:'6px'}}>
            Компания
          </Text>
          <Link href={"/about"}>О нас</Link>
          <Link href={"/info?tab=0"}>Оптовикам</Link>
          <Link href={"/info?tab=1"}>Способы оплаты</Link>
          <Link href={"/info?tab=2"}>Доставка и возврат</Link>
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"26px"}
          color={"#fff"}
          fontFamily={"mulish"}
          fontSize={"18px"}
          lineHeight={"27px"}
          mt={{base:"80px",lg:'0'}}
          width={{ base: "100%", lg: "max-content" }}
          height={'max-content'}
        >
          <Text color={"#fff"} fontSize={"20px"} lineHeight={'30px'} fontWeight={"700"} mb={{base:"24px",lg:'10px'}}>
            Контакты
          </Text>
          <Flex flexDir={{base:"column",lg:'row'}} gap={{base:'0',lg:'8px'}}>
            <Text fw={"400"}>Адрес:</Text>
            <Link
              href={data.addresses[0].map_link}
              target="_blank"
            >
             <Text fontWeight={'700'} _hover={{textDecoration:'underline'}}>
             {data.addresses[0].address}
             </Text>
            </Link>
          </Flex>
          <Flex flexDir={{base:"column",lg:'row'}} gap={{base:'0',lg:'8px'}}>
            <Text fw={"400"}>График работы:</Text>
            <Text fontWeight={"700"}>с {data.work_schedules[0].start} до {data.work_schedules[0].end}</Text>
          </Flex>
          <Flex flexDir={{base:"column",lg:'row'}} gap={{base:'0',lg:'8px'}}>
            <Text fw={"400"}>Для заказа WhatsApp:</Text>
            <Link
              href={`https:/wa.me/${data.phones[0].phone.replace(/[()\s-]/g, '')}`}
              target="_blank"
            >
             <Text fontWeight={'700'} _hover={{textDecoration:'underline'}}>
              {data.phones[0].phone}
              </Text>
            </Link>
          </Flex>
        </Flex>

        <Flex
          flexDir={"column"}
          gap={"30px"}
          justifyContent={{base:"center",lg:'flex-start'}}
          alignItems={"flex-start"}
          mt={{base:"80px",lg:'0'}}
          width={{ base: "100%", lg: "max-content" }}
          height={'max-content'}
        >
          <Text
            fontFamily={"mulish"}
            fontSize={"20px"}
            fontWeight={"700"}
            lineHeight={"30px"}
            color={"#fff"}
          >
            Мы в соцсетях
          </Text>

          <Flex flexDir={"row"} gap={"20px"}>
            {data.social_links.map((link) => (
              
            <Link key={link.id} href={link.url} target="_blank">
              <Image
                src={link.logo}
                alt={link.name}
                width={36}
                height={36}
                style={{ width: "36px", height: "36px" }}
              />
            </Link>
            ))}
          
          </Flex>
        </Flex>
      </Container>

      <Text width={"100%"} textAlign={"center"} mt={{base:"40px",lg:'0'}} py={{base:'0',lg:'20px'}} color={"#fff"} fontSize={{base:'16px',lg:'12px'}}>
        © 2024 EVELIN. Все права защищены.
      </Text>
    </Flex>
  );
};

export default Footer;
