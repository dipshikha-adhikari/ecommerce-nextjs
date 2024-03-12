import { IProduct } from "@/app/_types/products";
import Image from "next/image";
import React from "react";

const ProductBox = ({ item }: { item: IProduct }) => {
  return (
    <div>
      {/* <Image
        alt="image"
        src={item?.cover_image_url}
        width={500}
        height={300}
        className="h-[250px] max-w-sm w-full object-cover"
      /> */}
      <div>
        <p>{item.name}</p>
        <p>{item.cover_image_url}</p>
      </div>
    </div>
  );
};

export default ProductBox;
