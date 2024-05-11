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
      color={'rgba(222, 182, 178, 1)'}
      flexDir={'row'}
      justifyContent={'center'}
      alignItems={'center'}
      >
    <Text
    fontFamily={'infant'}
    fontWeight={'400'}
    fontSize={'200px'}
    lineHeight={'242px'}
>
      4
    </Text>
    <Text
    fontFamily={'infant'}
    fontWeight={'400'}
    fontSize={'200px'}
    lineHeight={'242px'}
>
      0
    </Text>
    <Text
    fontFamily={'infant'}
    fontWeight={'400'}
    fontSize={'200px'}
    lineHeight={'242px'}
>
      4
    </Text>
      </Flex>
      <Flex>
        <Text>
          Такой страницы не существует. Перейдите на <Link href={'/'}><Text as={'span'} color={'rgba(222, 182, 178, 1)'}>главную</Text></Link>
        </Text>
      </Flex>

    </Container>
  )
}