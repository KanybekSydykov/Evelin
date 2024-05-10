"use client";
import { Box,Flex,Button} from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ProductCard from "../productCard/ProductCard";
import Image from "next/image";

const ProductListSlider = ({products}) => {
  return (
    <>


      <Box
        as={Splide}
        aria-label="My Favorite Images"
        hasTrack={false}
        pos={'relative'}
        w={"100%"}
        h={"100%"}
        options={{
          perPage: 1,
          perMove: 1,
          type: "slide",
          direction: "ltr",
          pagination: false,
          gap:15,
          drag: "free",
          snap: true,
          arrows: false,
          padding: { left: 0, right: "36%"},
          mediaQuery: 'min',
          updateOnMove:true,
          dragMinThreshold: {
            mouse: 0,
            touch: 1,
          },
          breakpoints: {
            768:{
              perPage:3,
              padding: { left: 0, right: 0},
              fixedWidth:'220px',
            },
            1200:{
              perPage:4,
              padding: { left: 0, right: 0},
              fixedWidth:'277px',
              arrows:true,
            }
          
          },
        }}
     
      >
        <Box as={SplideTrack} w={"100%"} h={"100%"}>
          {products.map((item) => (
            <SplideSlide key={item.id}>
              <ProductCard productDetails={item} priceDir="row" />
            </SplideSlide>
          ))}
        </Box>
        <Flex
          className="splide__arrows"
          position={"absolute"}
          top={"281px"}
          left={0}
          w={"100%"}
          h={"0"}
          zIndex={3}
        >
          <Button
            className="splide__arrow splide__arrow--prev"
            w={"48px"}
            h={"48px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#fff"}
            borderRadius={'50%'}
            position={'absolute'}
            p={0}
            opacity={'1'}
            top={0}
            right={'calc(100% + 16px)'}
            left={'unset'}
            minW={'unset'}
            boxShadow={'0 0 2.67px 2px rgba(130, 130, 130, 0.25)'}
          >
            <Image
              src={"/arrow-next.svg"}
              width={11}
              height={14}
              style={{
                width: "11.78px",
                height: "14.74px",
                transform: "rotate(180deg)",
              }}
            />
          </Button>

          <Button
            className="splide__arrow splide__arrow--next"
            w={"48px"}
            h={"48px"}
            display={"flex"}
            justifyContent={"center"}
            p={0}
            alignItems={"center"}
            bg={"#fff"}
            position={'absolute'}
            borderRadius={'50%'}
            opacity={'1'}
            top={0}
            minW={'unset'}
            right={'unset'}
            left={'calc(100% + 16px)'}
            boxShadow={'0 0 2.67px 2px rgba(130, 130, 130, 0.25)'}

          >
            <Image
              src={"/arrow-next.svg"}
              width={11}
              height={14}
              style={{
                width: "11.78px",
                height: "14.74px",
              }}
            />
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default ProductListSlider;
