import ProductPage from "@/components/productPage/ProductPage"

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

const page = async({searchParams}) => {
  console.log(searchParams);
  const res = await fetch(`https://eveline.tatadev.pro/catalog/api/products/${searchParams.id}`)
  const data = await res.json()
  return (
    <div>

      <ProductPage data={data}/>
      
    </div>
  )
}

export default page