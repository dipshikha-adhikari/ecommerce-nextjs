"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = {
  parent_name: string;
  parent_id: number;
  childrens: Children[];
};

type Children = {
  id: number;
  name: string;
  childrens: Children[];
};

const Categories = ({ categories }: { categories: Category[] }) => {
  const location = usePathname();
  console.log(location);
  return (
    <>
      <div
        className={`${
          location === "/" && "hidden md:block"
        }    min-h-[300px] shadow-sm   z-50  w-40`}
      >
        <ul className=" w-full  ">
          {categories?.map((cat) => {
            return (
              <li
                key={cat.parent_name}
                className=" h-full relative main-category bg-white  grid "
              >
                <span className="  cursor-pointer  p-sm min-w-full">
                  {" "}
                  {cat.parent_name}
                </span>
                <ul className=" absolute child-category hidden bg-white shadow-sm min-h-full     w-40      left-40  top-0  z-50">
                  {cat.childrens.map((child) => {
                    return (
                      <li key={child.name} className="   grid   h-fit">
                        <Link
                          href={`/collections/${
                            cat.parent_name
                          }/${child.name.toLowerCase()}`}
                          className="hover:text-orange-300 py-sm  cursor-pointer px-sm  min-w-full"
                        >
                          {" "}
                          {child.name}
                        </Link>
                        {child.childrens[0] !== null && (
                          <ul className="left-40 hidden  absolute shadow-sm  w-fit subchild-category  gap-xs  bg-white  z-50  h-fit top-0">
                            {child?.childrens?.map((subchild) => {
                              return (
                                <Link
                                  href={`/collections/${cat.parent_name.toLowerCase()}/${child.name.toLowerCase()}/${subchild?.name.toLowerCase()}`}
                                  key={subchild?.name + subchild?.id}
                                  className="left-0 hover:text-red-400 p-sm"
                                >
                                  {subchild?.name || "Not available"}
                                </Link>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Categories;
