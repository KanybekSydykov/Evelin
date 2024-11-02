"use client";

import React, { useRef } from "react";
import { Box, Button, Flex, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import "@/components/productCard/CardSlider.css";

const Thumbnails = ({ images }) => {
  //   const [activeSlide, setActiveSlide] = useState(0);

  const slideRef = useRef(null);
  const thumbRef = useRef(null);

  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  function showSlide(index) {
    slideRef.current.go(index);
  }

  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row-reverse" }}
        justifyContent={{ base: "unset", md: "center" }}
        gap={"16px"}
        width={"100%"}
      >
        <Flex
          aspectRatio={171 / 283}
          width={{ base: "100%", md: "400px" }}
          maxW={"100%"}
          h={{ base: "516px", md: "577px" }}
          maxH={"100%"}
          pos={"relative"}
          px={{ base: "16px", md: "0" }}
        >
          <Skeleton isLoaded={images}
            aspectRatio={171 / 283}
            width={{ base: "100%", md: "400px" }}
            maxW={"100%"}
            h={{ base: "516px", md: "577px" }}
            maxH={"100%"}
            pos={"relative"}
            px={{ base: "16px", md: "0" }}
            startColor="rgba(199,131,124,1)"
            endColor="rgba(236,169,162,1)"
          >

       
          <Box
            as={Splide}
            aria-label="Main"
            hasTrack={false}
            ref={slideRef}
            w={"100%"}
            h={"100%"}
            options={{
              classes: {
                pagination: "splide__pagination product-card-pagination",
              },
              type: "fade",
              loop: true,
              pagination: true,
              speed: 1000,
              arrows: false,
            }}
          >
            <Box as={SplideTrack} w={"100%"} h={"100%"}>
              {images &&
                images.map((item) => (
                  <SplideSlide key={item.id}>
                    <Box pos={"relative"} w={"100%"} h={"100%"}>
                      {isImage(item.media) ? (
                        <Image
                          src={item.media ? item.media : "/evelin-logo.jpeg"}
                          alt="Image 1"
                          width={500}
                          height={783}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <video
                          src={item.media}
                          key={item.id}
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                          width={"100%"}
                          height={"100%"}
                        ></video>
                      )}

                      <Box
                        pos={"absolute"}
                        left={"4px"}
                        bottom={"4px"}
                        width={"max-content"}
                        padding={".5px 8px"}
                        fontFamily={"mulish"}
                        fontWeight={700}
                        fontSize={"14px"}
                        lineHeight={"21px"}
                        bg={"rgba(25, 143, 65, 0.7)"}
                        color={"#fff"}
                      >
                        -20%
                      </Box>
                    </Box>
                  </SplideSlide>
                ))}
            </Box>
          </Box>
          <Grid
            position={"absolute"}
            top={0}
            left={0}
            w={"100%"}
            h={"100%"}
            opacity={0}
            zIndex={100}
            gridTemplateColumns={`repeat(${
              images && images.length
            }, minmax(0,1fr))`}
          >
            {images &&
              images.map((item, index) => (
                <GridItem
                  key={item.id}
                  onMouseEnter={() => {
                    showSlide(index);
                  }}
                  w={"100%"}
                  h={"100%"}
                />
              ))}
          </Grid>
          </Skeleton>
        </Flex>
          {
            !images ? <Grid
            gridTemplateRows={'repeat(3,minmax(0,1fr))'}
            gap={'16px'}
            w={{ base: "100%", md: "100px" }}
            >
            {[0,1,2].map((item,index)=>(
                <Skeleton key={index}
                width={'100%'}
                height={'100%'}
                startColor="rgba(199,131,124,1)"
                endColor="rgba(236,169,162,1)"
                >

                </Skeleton>
            ))}
            </Grid> :

        <Box
          as={Splide}
          aria-label="Thumbnails"
          hasTrack={false}
          ref={thumbRef}
          px={{ base: "32px", md: "0" }}
          w={{ base: "100%", md: "100px" }}
          className="thumbnails-slider"
          options={{
            type: "slide",
            updateOnMove: true,
            mediaQuery: "min",
            direction: "ltr",
            height: 143,
            perPage: 3,
            perMove: 3,
            fixedWidth: 100,
            fixedHeight: 143,
            isNavigation: true,
            gap: 16,
            pagination: false,
            arrows: true,
            drag: "free",
            dragMinThreshold: {
              mouse: 4,
              touch: 10,
            },
            breakpoints: {
              767: {
                height: 577,
                perPage: 3,
                perMove: 3,
                fixedWidth: 100,
                fixedHeight: 143,
                isNavigation: true,
                gap: 16,
                speed: 2000,
                pagination: false,
                arrows: true,
                drag: "free",
                focus: "center",
                easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                direction: "ttb",
                wheel: true,
              },
            },
          }}
        >
          <Box
            as={SplideTrack}
            w={"100%"}
            h={"100%"}
            pos={"relative"}
            zIndex={2}
          >
            {images &&
              images.map((item, index) => (
                <SplideSlide
                  key={index}
                  onClick={() => showSlide(index)}
                  onMouseEnter={() => showSlide(index)}
                >
                  {isImage(item.media) ? (
                    <Image
                      src={item.media ? item.media : "/evelin-logo.jpeg"}
                      alt="Image 1"
                      width={100}
                      height={143}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <video
                      src={item.media}
                      muted
                      width={"100%"}
                      height={"100%"}
                    ></video>
                  )}
                </SplideSlide>
              ))}
          </Box>

          <Flex
            className="splide__arrows"
            position={"absolute"}
            top={{ base: "calc(50% - 18px)", lg: "10px" }}
            left={{ base: "0", lg: "calc(50% - 18px)" }}
            w={{ base: "100%", lg: "0" }}
            h={{ base: "0", lg: "100%" }}
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
              top={{ base: 0, lg: "unset !important" }}
              minW={"unset"}
              left={{ base: "16px", lg: "auto" }}
              transform={{
                base: "none !important",
                lg: "rotate(90deg) !important",
              }}
              right={{ base: "unset", lg: "auto" }}
            >
              <Image
                src={"/arrow-next.svg"}
                width={11}
                height={14}
                alt="Next Arrow"
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
              top={{ base: 0, lg: "unset !important" }}
              bottom={{ base: "unset", lg: "20px !important" }}
              right={{ base: "16px", lg: "auto !important" }}
              left={{ base: "unset", lg: "auto !important" }}
              transform={{
                base: "none !important",
                lg: "rotate(90deg) !important",
              }}
              minW={"unset"}
            >
              <Image
                src={"/arrow-next.svg"}
                width={11}
                height={14}
                alt="Next Arrow"
                style={{
                  width: "11.78px",
                  height: "14.74px",
                }}
              />
            </Button>
          </Flex>
        </Box>
          }
      </Flex>
    </>
  );
};

export default Thumbnails;
