'use client'

import React, { useState,useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'


const Prices = ({coverDir='row', dir = 'column-reverse', prices }) => {
  const [priceArray, setPriceArray] = useState([]);

  useEffect(() => {
    function getPricesArray(item) {
      const prices = [
        [item.price_kgs + ' сом', item.price_discounted_kgs ? item.price_discounted_kgs + ' сом' : null],
        [item.price_kzt + ' тг', item.price_discounted_kzt ? item.price_discounted_kzt + ' тг' : null],
        [item.price_usd + ' $', item.price_discounted_usd ? item.price_discounted_usd + '$' : null],
        [item.price_rub + ' ₽', item.price_discounted_rub ? item.price_discounted_rub + '₽' : null],
      ]
      return prices;
    }
    const pricesArrat = getPricesArray(prices)
    setPriceArray(pricesArrat)
  }, [prices])

  console.log(priceArray);
  return (
    <Flex
      flexDir={'row'}
      flexWrap={'wrap'}
      maxW={{ base: '250px', lg: '100%' }}
      gap={'20px'}
      fontFamily={'mulish'}
      mt={'26px'}
    >
      {priceArray && priceArray.map((item, index) => (
        <Flex key={index} flexDir={dir} gap={"10px"} w={dir==='row' ? '100%' : 'max-content'} alignItems={dir==='column-reverse' ? 'flex-start' : 'center'}>
          <Text
            fontWeight={"600"}
            fontSize={"18px"}
            lineHeight={"27px"}
            color={"rgba(69,29,25,1)"}
          >
            {item[0]}
          </Text>
          <Text
            fontWeight={"600"}
            fontSize={"14px"}
            lineHeight={"21px"}
            color={"rgb(136,136,136)"}
            textDecoration={'line-through'}
          >
            {item[1] ? item[1] : ''}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

export default Prices