"use client";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();
  return <div>{status}</div>;
};

export default Page;
