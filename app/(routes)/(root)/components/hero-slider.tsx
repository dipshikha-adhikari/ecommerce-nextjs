"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const increment = () => {
    if (index < heroBanners.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const decrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(heroBanners.length - 1);
    }
  };

  return (
    <section className=" flex-1 relative w-full ">
      <i
        className="absolute top-1/2 cursor-pointer bg-[rgba(0,0,0,0.7)] text-white -translate-y-1/2"
        onClick={decrement}
      >
        <SlArrowLeft className=" text-3xl" />
      </i>
      <div>
        <Image
          src={heroBanners[index].img}
          className=" w-full min-h-[400px] max-h-[600px]  object-cover object-left sm:object-right"
          alt=""
          width={500}
          height={500}
        />
      </div>
      <i
        className="absolute cursor-pointer bg-[rgba(0,0,0,0.7)] text-white  top-1/2 -translate-y-1/2 right-0"
        onClick={increment}
      >
        <SlArrowRight className=" text-3xl" />
      </i>
    </section>
  );
};

export default HeroSlider;

const heroBanners = [
  {
    img: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F13ae687e-b7e9-11eb-82b6-1957d8ee4862.jpg?crop=1600%2C900%2C0%2C0",
  },
  {
    img: "https://luna-askmen-images.askmen.com/1080x540/2016/04/28-042926-how_to_wear_vintage_clothing.jpg",
  },
  {
    img: "https://oxfordpennant.com/cdn/shop/products/LipsChampionshipBannerLifestyle1.png?v=1694307639&width=1946",
  },
];
