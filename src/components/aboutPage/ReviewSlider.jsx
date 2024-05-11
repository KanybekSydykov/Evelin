'use client'
import React from 'react'
import { Flex, Text,Box,Button } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import "./Slider.css";

const ReviewSlider = ({title,reviews}) => {
  return (
    <Flex 
    flexDir={'column'}
    gap={'60px'}
    py={'100px'}
    justifyContent={'center'}
    alignItems={'center'}
    >

      <Text
      fontFamily={'infant'}
      fontSize={{base:'20px',lg:'30px'}}
      fontWeight={{base:'600',lg:'700'}}
      lineHeight={{base:'24.22px',lg:'36px'}}
      textAlign={'center'}
      color={'rgba(101, 57, 52, 1)'}
      w={'100%'}
      maxW={{base:'300px',lg:'882px'}}
      >
      {title}
      </Text>

      
      <Box
          as={Splide}
          aria-label="Main"
          hasTrack={false}
          className='review-slider'
          options={{
            classes: {
                arrows : "splide__arrows review-slider__arrows",
            },
            type: "slide",
            pagination: false,
            speed: 2000,
            arrows: true,
            focus: "center",
            start:2,
            perPage: 3,
            // padding: {left:'15%',right:'15%'},
            direction:'ltr',
            gap:'1rem',
            drag:'free',
            snap: true,
            autoWidth: true,
            updateOnMove:true,
            height: '560px',
            trimSpace: false,
            mediaQuery:'min',
            breakpoints:{
              768:{
                perPage:4
              }
            }
          }}
          w={"100%"}
          h={"100%"}
        >
          <Box as={SplideTrack} w={"100%"} h={"100%"}>
            {reviews.map((review, index) => (
              
            <SplideSlide key={index}>
              <Box pos={"relative"} w={"193px"} h={"420px"}>
                <Image
                  src={review}
                  alt="Image 1"
                  width={275}
                  height={600}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SplideSlide>
            ))}
          

          </Box>
          <Flex
          className="splide__arrows review-slider__arrows"
          position={"relative"}
          mt={'20px'}
          top={"100%"}
          left={0}
          w={"100%"}
          h={"36px"}
          flexDir={'row'}
          alignItems={'center'}
          justifyContent={'flex-end'}
          gap={'16px'}
          zIndex={3}
          pe={'16px'}
        >
          <Button
            className="splide__arrow splide__arrow--prev"
            w={"36px"}
            h={"36px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"#fff"}
            borderRadius={'50%'}
            position={'unset'}
            p={0}
            opacity={'1'}
            top={0}
            minW={'unset'}
            border={'1px solid rgba(238, 29, 82, 1)'}
            // right={'48px'}
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
            w={"36px"}
            h={"36px"}
            display={"flex"}
            justifyContent={"center"}
            p={0}
            alignItems={"center"}
            bg={"#fff"}
            position={'unset'}
            borderRadius={'50%'}
            opacity={'1'}
            top={0}
            minW={'unset'}
            border={'1px solid rgba(238, 29, 82, 1)'}

            // right={'16px'}
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
    </Flex>
  )
}

export default ReviewSlider