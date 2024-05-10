'use client'
import React from 'react'
import { Box } from "@chakra-ui/react";
import { animate, motion } from "framer-motion";
import Image from "next/image";
import { type } from 'os';

const IconAnimation ={
    initial:{
        rotate:'13deg',
        type:'spring',
        transition:{duration:0.8}

    },
    animate:{
        rotate:'250deg',
        type:'spring',
        transition:{duration:0.8}
    }
}

const ProdListIcon = ({start}) => {
  return (
    <Box as={motion.div}
    pos={"absolute"}
    top={start ?{base: "-25px",lg:'-40px' }: {base:"-11px",lg:'-30px'}}
    right={start ? "100%" : "12px"}
    variants={IconAnimation}
    initial="initial"
    animate="initial"
    whileHover={'animate'}
    w={{base:"30px",lg:'60px'}}
    h={{base:"30px",lg:'60px'}}

>

<Image
  src={"anim-icon.svg"}
  width={30}
  height={30}
  alt={"anim-icon"}
  style={{
    width: "100%",
    height: "100%",
  }}

/>
</Box>
  )
}

export default ProdListIcon