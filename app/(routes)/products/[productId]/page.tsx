import MaxWidth from "@/components/layout/max-width-layout";
import Padding from "@/components/layout/padding";
import React from "react";
import ProductInfo from "../components/ProductInfo";
import Recommendations from "../components/Recommendations";

const page = () => {
  return (
    <Padding>
      <div className="grid gap-sm">
        <ProductInfo />
        <Recommendations />
      </div>
    </Padding>
  );
};

export default page;
