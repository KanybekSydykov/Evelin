import React, { Suspense } from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import ProductListSlide from "../productList/ProductListSlide";
import ProductInfo from "./ProductInfo";

const ProductPage = ({ data }) => {
  return (
    <Suspense fallback={<Skeleton height={'100vh'} width={'100vw'} />}>
      <ProductInfo data={data} />
      <Box my={"100px"}>
        <ProductListSlide title={"Похожие платья"} />
      </Box>
    </Suspense>
  );
};

export default ProductPage;
