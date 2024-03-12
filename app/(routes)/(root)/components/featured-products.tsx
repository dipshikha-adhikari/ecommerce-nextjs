import MaxWidth from "@/components/layout/max-width-layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="grid py-xl  gap-md">
      <header className="font-bold text-xl text-center uppercase">
        Featured Products
      </header>
      <section className="grid gap-sm sm:grid-cols-auto-sm w-full">
        {featuredProducts.map((p) => {
          return (
            <Link href={`/products/${p.title}`} key={p.img}>
              <Image
                alt="img"
                src={p.img}
                width={500}
                height={300}
                className="h-[250px] max-w-sm w-full object-cover"
              />
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default FeaturedProducts;

const featuredProducts = [
  {
    title: "The Beatles Cap",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcMw9kUfVJZn_LD6eXlj2ULKXY0aN3r18Wg&usqp=CAU",
  },
  {
    title: "The Beatles Cap",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxZuj0Ekc0CQvq68Rsu-exjG4TZvjanaYMA&usqp=CAU",
  },
];
