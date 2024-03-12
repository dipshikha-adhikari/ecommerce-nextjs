import { ReactNode } from "react";

const MaxWidthLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1500px]  mx-auto "> {children}</div>;
};

export default MaxWidthLayout;
