import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LuArrowLeft } from "react-icons/lu";

type SearchBoxProps = {
  isSearchBoxOpen: boolean;
  setIsSearchBarOpen: (props: boolean) => void;
};

const SearchBox = ({ isSearchBoxOpen, setIsSearchBarOpen }: SearchBoxProps) => {
  const [input, setInput] = useState("");

  return (
    <div
      className={`${
        isSearchBoxOpen
          ? "absolute  left-0 top-0 w-full h-full  gap-xs"
          : " hidden md:flex"
      } p-sm flex items-center bg-white w-full h-full md:max-w-md md:relative border-sm border-gray-light rounded-md`}
    >
      <LuArrowLeft
        onClick={() => setIsSearchBarOpen(false)}
        className="cursor-pointer text-3xl md:hidden"
      />{" "}
      <input
        type="text"
        name=""
        id=""
        className="w-full px-sm p-xs rounded-md outline-none "
      />
      <CiSearch className="cursor-pointer text-3xl" />
    </div>
  );
};

export default SearchBox;
