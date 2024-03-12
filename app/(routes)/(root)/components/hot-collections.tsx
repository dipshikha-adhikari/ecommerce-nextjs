"use client";
import React from "react";
import { UseQueryResult, useQuery } from "react-query";
import ProductBox from "./product-box";
import { IProduct } from "@/app/_types/products";

const HotCollections = () => {
  const {
    data: collections,
    isLoading,
    isError,
  }: UseQueryResult<[IProduct]> = useQuery("collections", async () => {
    const res = await fetch("http://localhost:3000/api/products");
    return res.json();
  });
  return (
    <div>
      {collections?.map((item) => {
        return <ProductBox item={item} key={item.id} />;
      })}
    </div>
  );
};

export default HotCollections;
