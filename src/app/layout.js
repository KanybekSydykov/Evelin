import {Providers} from './Theme'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export async function generateMetadata(
  { params, searchParams },
  parent
) {
  // read route params
  const id = params.id
 
  // fetch data
  const metadata = await fetch(`https://eveline.tatadev.pro/shop/api/main-page/`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: metadata.main_page.meta_title,
    description: metadata.main_page.meta_description,
    openGraph: {
      images: [metadata.main_page.meta_image, ...previousImages],
    },
  }
}

export default async function RootLayout({ children }) {

  const res = await fetch('https://eveline.tatadev.pro/shop/api/contacts/')
  const contacts = await res.json()

  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
        {children}
        <Footer data={contacts.contact_info}/>
        </Providers>
        </body>
    </html>
  );
}
