"use client";
import React, { useRef, useEffect, useState } from "react";
import { Container, Box, transition, background } from "@chakra-ui/react";
import {motion, useAnimate, useInView } from "framer-motion";


const bgAnimation = {
  initial: {
    background: "#fff",
   transition:{
    duration: .3,
    type: "spring",
   }
  },
  animate: {
    background: "rgba(222, 182, 178, 1)",
    transition:{
        duration: .5,
        delay: .5,
        type: "spring",
       }
  },
};

const AnimatedContainer = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:false,margin:'500px 0px 0px 0px'});
  const [bg, setBg] = useState('linear-gradient(to bottom right, #FFFFFF -7.44%, #FFFFFF 113.43%)');
  const [isInViewPort, setInView] = useState(false);

  useEffect(() => {
    // if (isInView) {
    //   animate(scope.current, {background: "linear-gradient(to bottom right, #DEB6B2 -7.44%, #EAA9A2 113.43%)"});
    // //   setBg('linear-gradient(to bottom right, #DEB6B2 -7.44%, #EAA9A2 113.43%)');
    // }
  }, [isInView]);

  console.log(isInView);

  return (
    <Box
    as={motion.div}
    ref={ref}
    variants={bgAnimation}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    width={'100%'}
    zIndex={3}
    pos={'relative'}
    transition={'all .5s ease-in-out'}
    _after={{
      content: '""',
      display: "block",
      position: "absolute",
      top: "0",
      right: "0",
      height:'25px',
      left: "0",
      zIndex: "5",
      backgroundImage: "url('/top-rounded-bg.svg')",
      transform: "rotate(180deg)",
    }}

    _before={{
        content: '""',
        display: "block",
        position: "absolute",
        bottom: "0",
        right: "0",
        height:'40px',
        left: "0",
        zIndex: "5",
        backgroundImage: "url('/bottom-rounded-bg.svg')",
        transform: "rotate(180deg)",
    }}
    >


    <Container
      maxW={"container.xl"}
      minH={{ base: "auto", lg: "600px", xl: "762px" }}
      pb={{ base: "130px", lg: "114px" }}
      pt={{ base: "80px", lg: "130px" }}

    >
      {children}
    </Container>
    </Box>
  );
};

export default AnimatedContainer;
