"use client";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/images.png"
        alt=""
        className="w-full h-full"
        width={100}
        height={80}
      />
    </Link>
  );
};

export default Logo;
