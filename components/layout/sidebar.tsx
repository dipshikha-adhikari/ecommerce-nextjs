"use client";

import { forwardRef } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import CategoryForMobile from "./category-mobile";
import { useComponentsStore } from "@/store/components";
import Logo from "./logo";

export interface ILink {
  title: string;
  link: string;
}

/* eslint-disable react/display-name */
const Sidebar = forwardRef<any, any>((_: unknown, ref) => {
  const components = useComponentsStore();

  const handleClose = () => {
    if (components.isSubcategoriesOpen) {
      components.closeSubcategories();
    } else {
      components.closeSidebar();
    }
  };

  return (
    <div
      ref={ref}
      className={` ${
        components.isSidebarOpen
          ? "  left-0 transition-all duration-200  top-0 "
          : " left-[-100%] transition-all duration-700  "
      } fixed w-full max-w-sm  h-screen   bg-white top-0 shadow-sm md:hidden `}
    >
      <div className={`relative   grid gap-sm h-fit p-md`}>
        <div className="flex  justify-between items-center  w-full">
          <Logo />

          <p
            className={`${
              components?.currentCategory?.parent_name &&
              components.isSubcategoriesOpen
                ? "opacity-100 transition-all duration-500"
                : "opacity-0 transition-all duration-500"
            } `}
          >
            {components.currentCategory?.parent_name}
          </p>

          <LiaTimesSolid
            onClick={handleClose}
            className="cursor-pointer text-2xl"
          />
        </div>
        <CategoryForMobile />
      </div>
    </div>
  );
});

export default Sidebar;
