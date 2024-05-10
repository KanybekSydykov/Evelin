
import React from 'react'
import { Container } from '@chakra-ui/react'
import AboutPage from '@/components/aboutPage/AboutPage'
import { Skeleton } from "@chakra-ui/react";
import { Suspense } from "react"

const page = async() => {

  const res = await fetch('https://eveline.tatadev.pro/shop/api/about/',{
    cache: "no-cache"
  });

  const data = await res.json()

  return (
    <Suspense
    fallback={<Skeleton height={'100vh'} width={'100vw'} />}>
    <AboutPage data={data.about_page}/>
    </Suspense>
  )
}

export default page