import InfoPage from '@/components/infoPage/InfoPage'
import React from 'react'

const page = async({searchParams}) => {
  const res = await fetch('https://eveline.tatadev.pro/shop/api/info/',{
    cache: "no-cache"
  })
  const data = await res.json()
  console.log(data);
  return (
    <InfoPage params={searchParams} data={data}/>
  )
}

export default page