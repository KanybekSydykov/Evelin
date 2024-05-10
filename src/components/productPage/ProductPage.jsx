import React from "react";
import { Box } from "@chakra-ui/react";
import ProductListSlide from "../productList/ProductListSlide";
import ProductInfo from "./ProductInfo";

const ProductPage = ({ data }) => {
  return (
    <>
      <ProductInfo data={data} />
      <Box my={"100px"}>
        <ProductListSlide title={"Похожие платья"} />
      </Box>
    </>
  );
};

export default ProductPage;
