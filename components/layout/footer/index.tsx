import React from "react";
import {
  BsFacebook,
  BsPaypal,
  BsTwitter,
  BsYoutube,
  BsTelephoneFill,
} from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { FaCcVisa, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import MaxWidth from "../max-width-layout";
import Logo from "../logo";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 ">
      <MaxWidth>
        <div className="    grid p-4  py-10 gap-10 justify-center   md:flex  md:justify-around">
          <div className="  grid h-fit flex-[0.7]  gap-4  text-center ">
            <div className=" flex justify-center  w-full">
              <Logo />
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing deleniti
              accusantium eius omnis repellendus eligendi Numquam omnis facere
              neque.
            </p>
            <div className="flex justify-center gap-4 mt-4 text-4xl  h-10"></div>
          </div>

          <div className="grid gap-4 flex-1  sm:flex  justify-around">
            <div className=" grid gap-4  ">
              <h4 className="text-2xl">Useful Links</h4>
              <div className="flex gap-10 font-[500]">
                <ul className="grid  gap-3">
                  <Link href="/">Home</Link>
                  <Link href="/men'sfashion">Men Fashion</Link>
                  <Link href="/women'sfashion">Women Fashion</Link>
                  <Link href="/products">For Everyone</Link>
                </ul>
                <ul className="flex flex-col gap-3">
                  <Link href="/cart">Cart</Link>
                  <Link href="/account">My Account</Link>
                </ul>
              </div>
            </div>

            <div className=" h-fit grid gap-4  ">
              <h4 className="text-2xl font-[500]">Contact</h4>
              <span className="flex items-center gap-4">
                <i>
                  {" "}
                  <ImLocation2 />
                </i>{" "}
                Naxal, Kathmandu 44600
              </span>
              <span className="flex items-center gap-4">
                <i>
                  <BsTelephoneFill />
                </i>{" "}
                +977 9805432101
              </span>
              <span className="flex items-center gap-4">
                <i>
                  <FaEnvelope />
                </i>
                akbivash@gmail.com
              </span>
              <span className="flex items-center gap-4">
                <BsPaypal /> <FaCcVisa />{" "}
              </span>
            </div>
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default Footer;
