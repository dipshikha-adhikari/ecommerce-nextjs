import CategoryForDesktop from "@/components/layout/CategoryDesktop";
import Padding from "@/components/layout/padding";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      {" "}
      <CategoryForDesktop />
      <div className="max-w-[1200px] mx-auto">
        <Padding>{children}</Padding>
      </div>
    </>
  );
}
