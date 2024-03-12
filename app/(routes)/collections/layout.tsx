import MaxWidth from "@/components/layout/max-width-layout";
import Navbar from "@/components/layout/navbar";
import Padding from "@/components/layout/padding";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <MaxWidth>
        <Padding>{children}</Padding>
      </MaxWidth>
    </>
  );
};

export default layout;
