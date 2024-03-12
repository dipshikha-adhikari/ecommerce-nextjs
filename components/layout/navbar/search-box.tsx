import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { LuArrowLeft } from "react-icons/lu";

type SearchBoxProps = {
  isSearchBarOpen: boolean;
  setIsSearchBarOpen: (props: boolean) => void;
};

const SearchBox = ({ isSearchBarOpen, setIsSearchBarOpen }: SearchBoxProps) => {
  const [input, setInput] = useState("dd");

  return (
    <div
      className={`${
        isSearchBarOpen
          ? "absolute bg-white left-0 top-0  gap-xs"
          : "  hidden md:flex"
      } p-xs flex items-center w-full h-full max-w-md md:relative border-sm border-gray-light rounded-md`}
    >
      <LuArrowLeft
        onClick={() => setIsSearchBarOpen(false)}
        className="cursor-pointer text-xl md:hidden"
      />{" "}
      <input
        type="text"
        name=""
        id=""
        className="w-full px-sm p-xs rounded-md outline-none "
      />
      <CiSearch className="cursor-pointer text-2xl" />
    </div>
  );
};

export default SearchBox;
