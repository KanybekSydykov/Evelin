'use client';
import React from "react";
import About from "@/components/home/About";
import { Text, Flex, Container } from "@chakra-ui/react";
import Image from "next/image";
import Advantages from "./Advantages";
import ReviewSlider from "./ReviewSlider";

const AboutPage = ({data}) => {

  const aboutData = {title: data.title, description: data.text, image: data.image}
  console.log(data);


  return (
    <>
      <Container
      maxW={"container.xl"}
      pt={"140px"}
      >
        <About data={aboutData} />
      </Container>

      <Advantages title={data.advantages_title} advantages={data.advantages} />

      <ReviewSlider title={data.reviews_title} reviews={data.reviews} />
    </>
  );
};

export default AboutPage;
