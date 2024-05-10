import { Skeleton } from "@chakra-ui/react";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Skeleton height='100vh' w={'100vw'} startColor="rgba(199,131,124,1)" endColor="rgba(236,169,162,1)" />
  }