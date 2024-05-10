
import React from 'react'
import { Container } from '@chakra-ui/react'
import AboutPage from '@/components/aboutPage/AboutPage'

const page = async() => {

  const res = await fetch('https://eveline.tatadev.pro/shop/api/about/',{
    cache: "no-cache"
  });

  const data = await res.json()

  return (
    <AboutPage data={data.about_page}/>
  )
}

export default page