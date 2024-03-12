"use client";

import SearchBox from "@/components/layout/navbar/search-box";
import { useComponentsStore } from "@/store/components";
import { useEffect, useRef, useState } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2";
import Logo from "../logo";
import MaxWidthLayout from "../max-width-layout";
import Sidebar from "../sidebar";

const Navbar = () => {
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const components = useComponentsStore();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        (typeof target.className === "string" &&
          target.className.includes("menu-icon")) ||
        target.parentElement?.classList.contains("menu-icon")
      )
        return;
      if (sidebarRef.current && !sidebarRef.current.contains(target)) {
        components.closeSidebar();
      }
    };
    if (components.isSidebarOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [sidebarRef, categoryRef, components.isSidebarOpen]);

  return (
    <nav className=" w-full bg-white overflow-hidden border-b-sm  sticky top-0 z-[100] ">
      <MaxWidthLayout>
        <div className="flex  px-sm sm:px-md md:px-xl items-center gap-sm justify-between ">
          <div className="flex gap-xs menu-icon  md:hidden">
            <HiOutlineBars3
              className="cursor-pointer text-2xl menu-icon "
              onClick={components.openSidebar}
            />

            <CiSearch
              className="cursor-pointer text-2xl"
              onClick={() => setIsSearchBoxOpen(true)}
            />
          </div>
          <Logo />

          <div className=" hidden md:flex w-full  justify-center items-center gap-sm">
            <SearchBox
              setIsSearchBarOpen={setIsSearchBoxOpen}
              isSearchBarOpen={isSearchBoxOpen}
            />
          </div>
          <div className="flex gap-xs">
            <CiUser className="cursor-pointer text-2xl" />
            <CiShoppingCart className="cursor-pointer text-2xl" />
          </div>
          <Sidebar ref={sidebarRef} />
        </div>
      </MaxWidthLayout>
    </nav>
  );
};

export default Navbar;
