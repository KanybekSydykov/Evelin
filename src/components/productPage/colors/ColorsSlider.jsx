"use client";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@/components/productCard/CardSlider.css";
import { Box, Flex, Button, Text, Skeleton } from "@chakra-ui/react";
import Image from "next/image";

const ColorsSlider = ({ colors, getSelectedColor }) => {
  function getVariant(item) {
    getSelectedColor(item);
  }

  console.log(colors);

  return (
    <Skeleton isLoaded={colors}
    width={'100%'}
    height={'100%'}
    startColor="rgba(199,131,124,1)"
    endColor="rgba(236,169,162,1)"
    mx={'auto'}
    >
    <Box
      as={Splide}
      aria-label="Thumbnails"
      hasTrack={false}
      className="colors-slider"
      w={"100%"}
      maxW={{ base: "100%", md: "416px", lg: "100%" }}
      options={{
        type: "slide",
        height: 132,
        perPage: 3,
        perMove: 3,
        fixedWidth: 64,
        fixedHeight: 132,
        isNavigation: true,
        gap: 16,
        updateOnMove: true,
        pagination: false,
        arrows: true,
        drag: "free",
        cover: true,
        direction: "ltr",
        mediaQuery: "min",
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          1200: {
            arrows: false,
            focus:"start"
          },
          768: {
            focus:'center'
          }
        },
      }}
    >


     
      <Box as={SplideTrack} w={"100%"} h={"100%"} pos={"relative"} zIndex={2}>
          {colors.map((item, index) => (
            <SplideSlide key={item.id} onClick={() => getVariant(index)}>
              <Box
                borderRadius={"50rem"}
                w={"100%"}
                h={"86px"}
                pos={"relative"}
                overflow={"hidden"}
                className="img-cover"
              >
                <Image
                  src={item.media[0].media ? item.media[0].media : "/evelin-logo.jpeg"}
                  alt="Image 1"
                  width={100}
                  height={143}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Text
                fontFamily={"mulish"}
                fontWeight={600}
                fontSize={"12px"}
                lineHeight={"15.6px"}
                textAlign={"center"}
                mt={"12px"}
              >
                {item.color.color}
              </Text>
            </SplideSlide>
          )) }
          
      </Box>
      <Flex
        className="splide__arrows"
        position={"absolute"}
        top={"calc(50%)"}
        left={0}
        w={"100%"}
        h={"0"}
        zIndex={3}
      >
        <Button
          className="splide__arrow splide__arrow--prev"
          w={"36px"}
          h={"36px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#fff"}
          borderRadius={"50%"}
          position={"absolute"}
          p={0}
          opacity={"1"}
          top={0}
          left={"16px"}
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
          position={"absolute"}
          borderRadius={"50%"}
          opacity={"1"}
          top={0}
          right={"16px"}
          boxShadow={"0 0px 4px 0px rgba(222,182,178,0.5)"}
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
    </Skeleton>

  );
};

export default ColorsSlider;
