'use client';

import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import {Box} from '@chakra-ui/react'

const HeroSlide = ({data}) => {
  return (
    <Box as={Splide} hasTrack={false}

    options={{
      type: "fade",
      perPage: 1,
      perMove: 1,
      arrows: false,
      pagination: false,
      autoplay: true,
      interval: 3000,
      speed: 3000,
      rewind: true,
    }}
    >
      <SplideTrack>
        {data.map((item) => (
            
        <SplideSlide key={item.id}>
        <Image
          src={item.slide}
          alt="hero"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SplideSlide>
        ))}
      </SplideTrack>
    </Box>
  );
};

export default HeroSlide;
