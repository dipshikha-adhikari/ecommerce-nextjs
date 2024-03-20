import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Padding from "@/components/layout/padding";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Padding>{children}</Padding>
      </div>
      <Footer />
    </>
  );
}
