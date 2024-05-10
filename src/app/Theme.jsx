'use client'

import { Cormorant_Infant,Mulish } from "next/font/google";
import { ChakraProvider ,extendTheme} from '@chakra-ui/react'

  const infant = Cormorant_Infant({ subsets: ['latin'] ,weight:['300','400','500','600','700'],variable:'--font-infant'})

  const mulish = Mulish({ subsets: ['latin'] ,weight:['300','400','500','600','700'],variable:'--font-mulish'})

  const theme = extendTheme({
    fonts: {
      infant:infant.style.fontFamily,
      mulish:mulish.style.fontFamily
    },
    colors:{
      titleColor:'#814E49',
      gradientBg: 'linear-gradient(90deg, rgba(199,131,124,1) 0%, rgba(236,169,162,1) 100%)',
      burgerGradient: 'linear-gradient(83.92deg, #D08B84 30.56%, #C2665D 56.82%)',
    },
    breakpoints:{
      base: '0em',
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '90em'
    }
    
  })


export function Providers({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}