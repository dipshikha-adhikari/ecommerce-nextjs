import Image from "next/image";
import Link from "next/link";
import React from "react";

const Recommendations = () => {
  return (
    <div className="grid gap-xs">
      <header className="font-bold ">OUR RECOMMENDATIONS</header>
      <section className="grid gap-xs">
        <Link href={`/products/`}>
          <Image
            alt="img"
            src={
              "https://cdn.shopify.com/s/files/1/1659/8101/products/beyond-retro-label-womens-multi-colour-dogtooth-trousers-2-E00930693.jpg?v=1707771978&width=300"
            }
            width={500}
            height={300}
            className="h-[250px] max-w-sm w-full object-cover"
          />
        </Link>
        <div className="grid ">
          <p className="font-semibold">The BEatles Cap</p>
          <p>$22</p>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
