import InfoPage from '@/components/infoPage/InfoPage'
import React from 'react'
import { Skeleton } from "@chakra-ui/react";
import { Suspense } from "react"

const page = async({searchParams}) => {
  const res = await fetch('https://eveline.tatadev.pro/shop/api/info/',{
    cache: "no-cache"
  })
  const data = await res.json()
  return (
    <Suspense
    fallback={<Skeleton height={'100vh'} width={'100vw'} />}>
    <InfoPage params={searchParams} data={data}/>
    </Suspense>
  )
}

export default page