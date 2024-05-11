import { Flex,Container,Text } from '@chakra-ui/react'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <Container
    mt={'140px'}
    maxW={'container.xl'}
    pb={'100px'}
    >

      <Flex
      color={'rgba(129, 78, 73, 1)'}
      flexDir={'column'}
      width={'100%'}
      maxW={'680px'}
      mx={'auto'}
      >
    <Text
    fontFamily={'infant'}
    fontWeight={'700'}
    fontSize={'100px'}
    lineHeight={'121px'}
    textAlign={'start'}
>
Страница
    </Text>
    <Text
    fontFamily={'infant'}
    fontWeight={'700'}
    fontSize={'100px'}
    lineHeight={'121px'}
    textAlign={'end'}
>
      не найдена
    </Text>

    <Text as={Link}
        href={"/"}
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
        mx={'auto'}
        _hover={{textDecoration:"underline"}}
      >
        На главную
      </Text>

      </Flex>


    </Container>
  )
}