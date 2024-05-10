'use client'

import React,{useEffect, useState} from 'react'
import { Container, Flex, Text,Box } from '@chakra-ui/react'
import Thumbnails from './thumbnails/Thumbnails'
import OrderModal from './modal/OrderModal'
import Prices from './prices/Prices'
import Colors from './colors/Colors'
import Sizes from './sizes/Sizes'
import Attributes from './attributes/Attributes'
import Link from 'next/link'


const ProductInfo = ({data}) => {
    const [curVariant,setVariant] = useState(0)
    const [selectedSize, setSelectedSize] = useState(0)

    useEffect(() => {
      setVariant(data.variants[0])
      setSelectedSize(data.variants[0].size[0])
      console.log(data.variants[0].size[0]);
    },[data])

    function getSelectedColor(color) {
      setVariant(data.variants[color])
    }

    function getSelectedSize(size) {
      setSelectedSize(size)
    }



  return (
    <Container
    maxW={'container.xl'}
    px={{base:'0',lg:'16px'}}
    display={'flex'}
    flexDir={{base:'column',lg:'row'}}
    flexWrap={{base:'unset',lg:'wrap'}}
    pt={'140px'}
    gap={'50px'}
    >
    <Flex
    flexDir={'row'}
    gap={'8px'}
    width={'100%'}
    >
        <Text as={Link}
      href={'/'}
      fontFamily={'mulish'}
      fontSize={'18px'}
      fontWeight={'400'}
      color={'rgba(146, 146, 146, 1)'}
      lineHeight={'22.5px'}
      >
      Главная
      
      </Text>
      /
      <Text as={Link}
      href={'#'}
      fontFamily={'mulish'}
      fontSize={'18px'}
      fontWeight={'400'}
      color={'rgba(146, 146, 146, 1)'}
      lineHeight={'22.5px'}
      >
    {data.name}
      </Text>

    </Flex>
      

    <Box w={{base:'100%',lg:'516px'}} >

      <Thumbnails images = { curVariant ? curVariant.media : null} />
    </Box>
    <Box w={{base:'100%',lg:'calc(100% - 566px)'}}
    >

    <Flex
    flexDir={'column'}
    px={{base:'16px',lg:'0'}}
    alignItems={{base:'flex-start',md:'center',lg:'flex-start'}}
    >

        <Text
          color={"rgba(117, 73, 68, 1)"}
          fontSize={{base:"18px",lg:'26px'}}
          fontWeight={"700"}
          lineHeight={{base:"27px",lg:'39px'}}
          fontFamily={'mulish'}
          mt={{base:"30px",lg:'0'}}
          ps={'2px'}
        >
         {data.name}
        </Text>

        {/* Prices */}
        <Prices prices={data} coverDir='column' />

        <OrderModal variant={curVariant} selectedSize={selectedSize} prodTitle={data.name} links={data.links}/>
        {/* Colors */}
        </Flex>
      <Colors colors={data ? data.variants : null} getSelectedColor={getSelectedColor} />
        <Flex
        flexDir={'column'}
        px={{base:'16px',lg:'0'}}
        alignItems={{base:'flex-start',md:'center',lg:'flex-start'}}
        >

        <Sizes sizes={ curVariant ? curVariant.size : null} getSelectedSize={getSelectedSize}  />

        <Attributes attributes={data.characteristics} />


        {/* Description */}

        <Flex
          flexDir={'column'}
          gap={'20px'}
          fontFamily={'mulish'}
          mt={'40px'}
          maxW={{base:'100%',md:'416px',lg:'100%'}}
        >
          <Text
            fontWeight={'700'}
            fontSize={'18px'}
            lineHeight={'27px'}
            color={'rgba(104, 50, 44, 1)'}
          >
            Описание
          </Text>
          <Text
            fontWeight={'500'}
            fontSize={'16px'}
            lineHeight={'27px'}
            color={'rgba(101, 57, 52, 1)'}
          >
            {data.description}
          </Text>
        </Flex>

      </Flex>
    </Box>
    </Container>
  )
}

export default ProductInfo