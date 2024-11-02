"use client";
import { Suspense, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Menu({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const path = usePathname();
  const params = useSearchParams();
  const btnRef = useRef();

  console.log(data);

  return (
    <Suspense fallback={<Skeleton height={"100vh"} width={"100vw"} />}>
      <Flex
        ref={btnRef}
        onClick={onOpen}
        w={"36px"}
        h={"36px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          w={"26px"}
          h={"2px"}
          bg={"burgerGradient"}
          pos={"relative"}
          _before={{
            content: "''",
            w: "18px",
            h: "2px",
            bg: "burgerGradient",
            pos: "absolute",
            top: "-6px",
            right: "0",
          }}
          _after={{
            content: "''",
            w: "22px",
            h: "2px",
            bg: "burgerGradient",
            pos: "absolute",
            top: "6px",
            right: "0",
          }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent maxW={"unset"} pos={"relative"} zIndex={101}>
          <DrawerHeader
            px={"24px"}
            py={"20px"}
            boxShadow={"0 2px 4px 0 rgba(222,182,178,0.2)"}
          >
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              bg={"rgba(255,255,255)"}
            >
              <Link href={"/"} onClick={onClose}>
                <Image
                  src={"/evelin-logo.jpeg"}
                  alt="logo"
                  width={40}
                  height={40}
                  style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "calc(50vw - 80px)",
                    borderRadius: "50%",
                  }}
                />
              </Link>

              <DrawerCloseButton
                pos={"relative"}
                top={"unset"}
                right={"unset"}
                w={"36px"}
                h={"36px"}
                _hover={{
                  bg: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Box
                  width={"26px"}
                  h={"2px"}
                  bg={"rgba(194,103,94,1)"}
                  pos={"absolute"}
                  top={"calc(50% - 1px)"}
                  left={"5px"}
                  borderRadius={"6px"}
                  transform={"rotate(-45deg)"}
                />

                <Box
                  width={"26px"}
                  h={"2px"}
                  bg={"rgba(194,103,94,1)"}
                  pos={"absolute"}
                  top={"calc(50% - 1px)"}
                  left={"5px"}
                  borderRadius={"6px"}
                  transform={"rotate(45deg)"}
                />
              </DrawerCloseButton>
            </Flex>
          </DrawerHeader>

          <DrawerBody p={"60px 16px 150px"}>
            <Flex
              fontFamily={"mulish"}
              flexDir={"column"}
              gap={"50px"}
              fontSize={"18px"}
              fontWeight={"400"}
              lineHeight={"22px"}
              color={"rgba(101,57,52,1)"}
              justifyContent={"center"}
              alignItems={"center"}
              textTransform={"uppercase"}
            >
              <Link href={"/"} onClick={onClose}>
                <Text
                  transition={"all 0.15s ease-in"}
                  fontWeight={path === "/" && "700"}
                >
                  ГЛАВНАЯ
                </Text>
              </Link>
              <Link href={"/about"} onClick={onClose}>
                <Text
                  transition={"all 0.15s ease-in"}
                  fontWeight={path === "/about" && "700"}
                >
                  О НАС
                </Text>
              </Link>
              <Link href={"/info?tab=0"} onClick={onClose}>
                <Text
                  transition={"all 0.15s ease-in"}
                  fontWeight={
                    path === "/info" && params.get("tab") === "0" && "700"
                  }
                >
                  ОПТОВИКАМ
                </Text>
              </Link>
              <Link href={"/info?tab=1"} onClick={onClose}>
                <Text
                  transition={"all 0.15s ease-in"}
                  fontWeight={
                    path === "/info" && params.get("tab") === "1" && "700"
                  }
                >
                  ОПЛАТА
                </Text>
              </Link>
              <Link href={"/info?tab=2"} onClick={onClose}>
                <Text
                  transition={"all 0.15s ease-in"}
                  fontWeight={
                    path === "/info" && params.get("tab") === "2" && "700"
                  }
                >
                  ДОСТАВКА
                </Text>
              </Link>
            </Flex>

            <Flex
              flexDir={"column"}
              gap={"30px"}
              justifyContent={"center"}
              alignItems={"center"}
              mt={"80px"}
            >
              <Text
                fontFamily={"mulish"}
                fontSize={"20px"}
                fontWeight={"700"}
                lineHeight={"30px"}
                color={"rgba(69,29,25,1)"}
              >
                Мы в соцсетях
              </Text>

              <Flex flexDir={"row"} gap={"20px"}>
                {data.social_links.map((el, index) => (
                  <Link
                    href={el.url ? el.url : "#"}
                    onClick={onClose}
                    target="_blank"
                    key={index}
                  >
                    <Image
                      src={el.logo ? el.logo : '/evelin-logo.jpeg'}
                      alt={el.name}
                      width={36}
                      height={36}
                      style={{ width: "36px", height: "36px" }}
                    />
                  </Link>
                ))}
              </Flex>
            </Flex>

            <Flex
              flexDir={"column"}
              gap={"26px"}
              color={"rgba(69,29,25,1)"}
              fontFamily={"mulish"}
              fontSize={"18px"}
              lineHeight={"27px"}
              mt={"80px"}
            >
              {data.addresses[0] && (
                <Flex flexDir={"column"}>
                  <Text fw={"400"}>Адрес</Text>
                  <Link
                    href={data.addresses[0].map_link}
                    target="_blank"
                    style={{
                      fontWeight: "700",
                    }}
                    onClick={onClose}
                  >
                    <Text _hover={{ textDecoration: "underline" }}>
                      {data.addresses[0].address}
                    </Text>
                  </Link>
                </Flex>
              )}
            {data.work_schedules[0] &&  <Flex flexDir={"column"}>
                <Text fw={"400"}>График работы:</Text>
                <Text fontWeight={"700"}>
                  с {data.work_schedules[0].start} до{" "}
                  {data.work_schedules[0].end}
                </Text>
              </Flex>}
        { data.phones[0] &&      <Flex flexDir={"column"}>
                <Text fw={"400"}>Для заказа WhatsApp:</Text>
                <Link
                  href={data.social_links[0].url}
                  target="_blank"
                  style={{
                    fontWeight: "700",
                  }}
                  onClick={onClose}
                >
                  <Text
                    _hover={{
                      textDecoration: "underline",
                    }}
                  >
                    {data.phones[0].phone}
                  </Text>
                </Link>
              </Flex>}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Suspense>
  );
}
