"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box

} from "@chakra-ui/react";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

export default function OrderModal({variant,selectedSize,prodTitle,links}) {
  const [orderSent,setOrderSent] = useState(false)
  const path = usePathname();
  const params = useSearchParams();

  const [formVisible,setFormVisible] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [errorName, setErrorName] = useState(true);
  const [errorPhone, setErrorPhone] = useState(true);

  const message = `Здраствуйте,интересует платье ${prodTitle} в цвете ${variant && variant.color.color} в размере ${selectedSize.size}. Ссылка на платье https://evelin.kg/dress?id=${params.get("id")}`

  function handleNameChange(e) {
    setName(e.target.value);
    setErrorName(true);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
    setErrorPhone(true);
  }

  async function sendOrder() {
    if (!name) {
      setErrorName(true); // Assuming this sets an error state to true
      return;
    } else if (!phone) {
      setErrorPhone(true); // Assuming this sets an error state to true
      return;
    }
  
    const order = {
      customer_name: name,
      customer_phone: phone,
      size: selectedSize.id,
      variant: variant.id
    };
  
    try {
      const res = await fetch('https://eveline.tatadev.pro/order/api/create_order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
      });
  
      if (res.ok) {
        setOrderSent(true);
        const data = await res.json();
        // Handle successful response data if needed
      } else {
        setOrderSent(false);
        // Handle non-ok response (e.g., display an error message)
      }
    } catch (error) {
      // Handle fetch or parsing errors here (e.g., display an error message or log the error)
      console.error('Error:', error);
    }

    setTimeout(() => {
      setOrderSent(false);
      onClose();
    }, 3000);
  }
  



  return (
    <>
      <Button
        onClick={onOpen}
        href={"/productDetails"}
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
        borderRadius={0}
        mt={"26px"}
        maxW={'445px'}
      >
        Купить
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            border={"1px solid rgba(163, 163, 163, 1)"}
            color={"rgba(163, 163, 163, 1)"}
            borderRadius={"50%"}
          />
          <ModalBody
            fontFamily={"mulish"}
            fontWeight={"600"}
            fontSize={"18px"}
            lineHeight={"27px"}
            color={"#fff"}
          >
            { orderSent ? <Box>
              <Text
                fontFamily={"mulish"}
                fontWeight={"700"}
                fontSize={"18px"}
                color={"rgba(117,73,68,1)"}
                textAlign={"center"}
                mb={"14px"}
                maxW={"300px"}
                mx={"auto"}
              >
                Ваша заявку успешно оформлена! Мы скоро с вами свяжемся!
              </Text>
            </Box>
            
          :
          
            <Flex my={"55px"} flexDir={"column"} w={"100%"} gap={"20px"}>
              <Text
                fontFamily={"mulish"}
                fontWeight={"700"}
                fontSize={"18px"}
                color={"rgba(117,73,68,1)"}
                textAlign={"center"}
                mb={"14px"}
                maxW={"300px"}
                mx={"auto"}
              >
                Чтобы заказать платье, пожалуйста перейдите по ссылке
              </Text>

              <Link href={`${links.whatsapp}text=${encodeURIComponent(message)}`} target="_blank">
                <Flex
                  flexDir={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"12px"}
                  w={"100%"}
                  maxW={"300px"}
                  h={"50px"}
                  mx={"auto"}
                  bg={"rgba(0, 217, 95, 1)"}
                >
                  <Image
                    src={"/Whatsapp.svg"}
                    alt={"whatsapp"}
                    width={50}
                    height={50}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <Text>Открыть Whatsapp</Text>
                </Flex>
              </Link>
              <Link href={`${links.telegram}text=${encodeURIComponent(message)}`} target="_blank">
                <Flex
                  flexDir={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={"12px"}
                  w={"100%"}
                  maxW={"300px"}
                  h={"50px"}
                  mx={"auto"}
                  bg={"rgba(52, 170, 223, 1)"}
                >
                  <Image
                    src={"/Telegram.svg"}
                    alt={"whatsapp"}
                    width={50}
                    height={50}
                    style={{ width: "36px", height: "36px" }}
                  />
                  <Text>Открыть Telegram</Text>
                </Flex>
              </Link>
              <Flex
                flexDir={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                gap={"12px"}
                w={"100%"}
                maxW={"300px"}
                h={"50px"}
                mx={"auto"}
                bg={"gradientBg"}
                cursor={"pointer"}
                onClick={() => setFormVisible((prev) => !prev)}
              >
                <Text>Оставить заявку на сайте</Text>
              </Flex>

           { formVisible && <Flex flexDir={"column"} w={'100%'} gap={'16px'} maxW={'300px'} mx={'auto'} fontFamily={'mulish'}>
                <FormControl>
                  <FormLabel m={0} color={'rgba(199, 131, 124, 1)'}>Имя *</FormLabel>
                  <Input  isInvalid={!errorName} type="text" onChange={(e) => handleNameChange(e)} value={name} color={'#000'} _focus={{borderColor:'rgba(236, 169, 162, 1)',boxShadow:'0 0 0 1px rgba(236, 169, 162, 1)'}}/>
                </FormControl>
                <FormControl>
                  <FormLabel m={0} color={'rgba(199, 131, 124, 1)'}>Номер телефона *</FormLabel>
                  <Input isInvalid={!errorPhone} type="tel" onChange={(e) => handlePhoneChange(e)} value={phone} color={'#000'} _focus={{borderColor:'rgba(236, 169, 162, 1)',boxShadow:'0 0 0 1px rgba(236, 169, 162, 1)'}} />
                </FormControl>

                <Button mt={'20px'} bg={'gradientBg'} color={'#fff'} fontSize={'18px'} fontWeight={'600'} onClick={() => sendOrder()}>Отправить</Button>
              </Flex>}
            </Flex>
          }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
