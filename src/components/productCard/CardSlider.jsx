"use client";

import React, { useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import "./CardSlider.css";

const CardSlider = ({ activeSlideIndex,product }) => {
  const slideRef = useRef(null);

  useEffect(() => {
    if (slideRef.current && activeSlideIndex !== undefined) {
      slideRef.current.go(activeSlideIndex);
    }
  }, [activeSlideIndex]);

  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  return (
    <>
      <Box
        as={Splide}
        aria-label="My Favorite Images"
        hasTrack={false}
        options={{
          classes:{
            pagination: 'splide__pagination product-card-pagination',
          },
          type: "fade",
          loop: true,
          pagination: true,
          speed: 1000,
          arrows:false,
        }}
        ref={slideRef}
        w={"100%"}
        h={"100%"}
      >
        <Box as={SplideTrack} w={"100%"} h={"100%"}>
          {product.media.length > 0 && product.media.map((item, index) => (
            
          <SplideSlide key={index}>
            <Box pos={'relative'} w={"100%"} h={"100%"}>
           {isImage(item) ? (
           <Image
              src={item ? item : '/evelin-logo.jpeg'}
              alt="Image 1"
              width={500}
              height={783}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            ) : (<video
            src={item}
            key={index}
            controls
            autoPlay
            playsInline
            loop
            muted
            width={'100%'}
            height={'100%'}
            ></video>)}
            </Box>
          </SplideSlide>
          ))}
     
        </Box>
      </Box>
    </>
  );
};

export default CardSlider;
