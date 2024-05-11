"use client";
import React, { Suspense } from "react";
import Menu from "./Menu";
import { Flex, Box, Text, useMediaQuery, Skeleton } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
const Header = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1024px)");
  const path = usePathname();
  const params = useSearchParams();


  return (
    <Suspense fallback={<Skeleton height={'100vh'} width={'100vw'} />}>
      <Flex
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={{ base: "flex-end", lg: "center" }}
        px={"24px"}
        py={"20px"}
        bg={"rgba(255,255,255,0.5)"}
        boxShadow={"0 2px 4px 0 rgba(222, 182, 178, 0.2)"}
        fontFamily={"mulish"}
        fontWeight={"400"}
        fontSize={"18px"}
        lineHeight={"22.5px"}
        color={"rgba(101, 57, 52, 1)"}
        gap={{ base: "0", lg: "100px" }}
        position={'fixed'}
        top={0}
        left={0}
        zIndex={100}
        backdropFilter={'blur(2px)'}
        width={'100%'}
      >
        {isDesktop && (
          <Flex flexDir={"row"} gap={"30px"}>
           {path === '/' ? null : <Link  href={"/about"}>
              <Text  >ГЛАВНАЯ</Text>
            </Link>}
            <Link  href={"/about"} prefetch={true}>
              <Text transition={'all 0.15s ease-in'} fontWeight={path === '/about' && '700'}  >О НАС</Text>
            </Link>
            <Link href={"/info?tab=0"} prefetch={true}>
              <Text transition={'all 0.15s ease-in'} fontWeight={path === '/info' && params.get('tab') === '0' &&  '700'} >ОПТОВИКАМ</Text>
            </Link>
          </Flex>
        )}

        <Link href={"/"}>
          <Box
            width={"40px"}
            height={"40px"}
            marginRight={{ base: "calc(50vw - 80px)", lg: "0" }}
            position={"relative"}
          >
            <Image
              src={"/evelin-logo.jpeg"}
              alt="logo"
              width={40}
              height={40}
              style={{
                width: "100%",
                height: "100%",
                borderRadius:'50%'
              }}
            />
          </Box>
        </Link>
        {isDesktop && (
          <Flex flexDir={"row"} gap={"30px"}>
            <Link href={"/info?tab=1"}>
              <Text transition={'all 0.15s ease-in'} fontWeight={path === '/info' && params.get('tab') === '1' &&  '700'} >ОПЛАТА</Text>
            </Link>
            <Link href={"/info?tab=2"}>
              <Text transition={'all 0.15s ease-in'} fontWeight={path === '/info' && params.get('tab') === '2' &&  '700'} >ДОСТАВКА</Text>
            </Link>
          </Flex>
        )}

        {!isDesktop && <Menu />}
      </Flex>
    </Suspense>
  );
};

export default Header;
