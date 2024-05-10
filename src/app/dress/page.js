import ProductPage from "@/components/productPage/ProductPage"
import { Suspense } from "react"
import { Skeleton } from "@chakra-ui/react"

export async function generateMetadata(
  { params, searchParams },
  parent
) {
  // read route params
  const id = params.id

  // fetch data
  const metadata = await fetch(`https://eveline.tatadev.pro/catalog/api/products/${searchParams.id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: metadata.meta_title,
    description: metadata.meta_description,
    openGraph: {
      images: [metadata.meta_image, ...previousImages],
    },
  }
}

const page = async ({ searchParams }) => {
  const res = await fetch(`https://eveline.tatadev.pro/catalog/api/products/${searchParams.id}`,{
    cache: "no-cache"
  })
  const data = await res.json()
  return (
    <Suspense
      fallback={<Skeleton height={'100vh'} width={'100vw'} />}>

      <ProductPage data={data} />
    </Suspense>


  )
}

export default page