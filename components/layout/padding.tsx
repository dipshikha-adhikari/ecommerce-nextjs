import { ReactNode } from "react";

const Padding = ({ children }: { children: ReactNode }) => {
  return <div className="p-sm sm:px-sm md:px-md "> {children}</div>;
};

export default Padding;
