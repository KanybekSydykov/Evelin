import React from 'react'
import { Flex, Text, List, ListItem } from '@chakra-ui/react'

const Attributes = ({attributes}) => {
  return (
    <Flex
    fontFamily={'mulish'}
    flexDir={'column'}
    gap={'30px'}
    mt={'40px'}>
    <Text
      fontWeight={'700'}
      fontSize={'18px'}
      lineHeight={'27px'}
      color={'rgba(104, 50, 44, 1)'}
    >
      Характеристики
    </Text>

    <List
      fontFamily={'mulish'}
      fontWeight={'600'}
      fontSize={'16px'}
      lineHeight={'20.8px'}
    >
      {attributes.map((item, index) => (
        
      <ListItem key={index} display={'flex'} flexDir={'row'} gap={'60px'} py={'20px'} borderBottom={'1px solid rgba(237, 237, 237, 1)'}>
        <Text w={'90px'} color={'rgba(129, 129, 129, 1)'}>{item.key}</Text>
        <Text display={'flex'} flexGrow={1} color={'rgba(101,57,52,1)'}>{item.value}</Text>
      </ListItem>
      ))}

    </List>
  </Flex>
  )
}

export default Attributes