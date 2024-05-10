import AnimatedContainer from "@/components/animation-components/AnimatedContainer";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import ProductList from "@/components/productList/ProductList";
import ProductListSlide from "@/components/productList/ProductListSlide";
import {Container, Flex} from '@chakra-ui/react'

export default async function Home() {

  const res = await fetch('https://eveline.tatadev.pro/shop/api/main-page/',{
    cache: "no-cache"
  })
  const data = await res.json()

  const heroData = {title:[data.main_page.title1, data.main_page.title2, data.main_page.title3],images:data.slides};
  const aboutData = {title:data.main_page.content_title,description:data.main_page.content_text,image:data.main_page.content_image};
  

  console.log(data);
  return (
    <main>

      <Hero data={heroData}/>

      <AnimatedContainer>
      <About data={aboutData}/>
      </AnimatedContainer>


      
      <ProductListSlide is_top={true} title={data.main_page.bestsellers_tittle}/>

      <Container maxW={'container.xl'} pb={'100px'}>

      <Flex
      flexDir={'column'}
      gap={{base:'60px',lg:'120px'}}
      mt={{base:'60px',lg:'120px'}}
      >

        
      <ProductList start={false} title={data.main_page.discount_tittle} is_new={true}/>
      <ProductList start={true} title={data.main_page.all_products_title} pagination={true}/>
      </Flex>

      </Container>


    </main>
  );
}