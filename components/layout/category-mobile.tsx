import { getCategories } from "@/actions/get-categories";
import { useComponentsStore } from "@/store/components";
import Link from "next/link";
import {
  ForwardedRef,
  Ref,
  RefObject,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowDown } from "react-icons/io";

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

type SubCatRef = Ref<HTMLSpanElement | null>;

const Subcategories = forwardRef((props: any, ref: any) => {
  const [currentChildren, setCurrentChildren] = useState<string[]>([]);
  const components = useComponentsStore();

  const toggleChildren = (name: string) => {
    if (currentChildren.includes(name)) {
      setCurrentChildren(() =>
        currentChildren.filter((child) => child !== name)
      );
    } else {
      setCurrentChildren((prev) => [...prev, name]);
    }
  };

  return (
    <div
      className={`${
        components.isSubcategoriesOpen
          ? "right-0 opacity-1 w-full "
          : "right-[-100%] opacity-0 w-0 "
      } " absolute top-0 min-h-screen z-50 bg-white transition-all  duration-300   "`}
    >
      <section className="grid gap-xs  ">
        {components.currentCategory?.childrens?.map((cat) => {
          return (
            <li className="relative  list-none border-b-sm">
              <Link
                href={`/collections/${components.currentCategory?.parent_name.toLowerCase()}/${cat.name.toLowerCase()}`}
                onClick={components.closeSidebar}
                key={cat.id}
                className=" flex justify-between items-center sub-category"
              >
                {cat.name}{" "}
                <span
                  className="border-l-sm border-gray-light min-h-full"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleChildren(cat.name);
                  }}
                >
                  {" "}
                  <IoMdArrowDown className="w-16" />
                </span>
              </Link>
              {currentChildren.includes(cat.name) && (
                <ul className="pl-10 py-xs grid grid-cols-[repeat(auto-fit,_minmax(50px,1fr))] gap-xs">
                  {cat.childrens[0] !== null ? (
                    cat.childrens.map((child) => {
                      return (
                        <Link
                          href={`/collections/${components.currentCategory?.parent_name.toLowerCase()}/${cat.name.toLowerCase()}/${child.name.toLowerCase()}`}
                          key={child?.id + "x"}
                          className="hover:text-black-dark w-fit text-black-light"
                          onClick={components.closeSidebar}
                        >
                          {child?.name}
                        </Link>
                      );
                    })
                  ) : (
                    <span className="text-black-light">Not available</span>
                  )}
                </ul>
              )}
            </li>
          );
        })}
      </section>
    </div>
  );
});

const CategoryForMobile = () => {
  const components = useComponentsStore();
  const [categories, setCategories] = useState<Category[]>([]);
  const mainCategoryRef = useRef(null);

  const fetchCategories = async () => {
    const result = await getCategories();
    setCategories(result);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="relative md:hidden bg-white h-full ">
      <ul className="grid gap-xs  relative">
        {categories.map((cat) => {
          return (
            <li
              className="flex items-center z-50 cursor-pointer justify-between"
              key={cat.parent_name}
              onClick={() => {
                components.setCurrentCategory(cat);
                components.openSubcategories();
              }}
            >
              <span ref={mainCategoryRef}> {cat.parent_name}</span>
              <MdKeyboardArrowRight className="text-xl" />
            </li>
          );
        })}
      </ul>
      <Subcategories ref={mainCategoryRef} />
    </div>
  );
};

export default CategoryForMobile;
