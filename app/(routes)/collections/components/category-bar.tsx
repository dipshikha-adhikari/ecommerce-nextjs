"use client";
import { getCategories } from "@/actions/get-categories";
import Categories from "@/components/products/categories";
import { useComponentsStore } from "@/store/components";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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

const CategoryBar = () => {
  const [openCat, setOpenCat] = useState(false);
  const components = useComponentsStore();
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const result = await getCategories();
    setCategories(result);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const toggleCat = () => {
    setOpenCat(!openCat);
  };

  return (
    <div className="">
      <div className="flex h-10 gap-xs items-center">
        <div
          className="bg-orange-500 h-10 grid place-items-center p-xs relative text-white category-btn"
          onClick={toggleCat}
        >
          categories
          <div className="category-container hidden text-black-light absolute top-9 left-0 ">
            <Categories categories={categories} />
          </div>
        </div>
        <Link href={"/collections"}>collections</Link>
        <span>{">"}</span>
        <Link href={"/men"}>men</Link>
        <span>{">"}</span>
        <Link href={"/clothes"}>clothes</Link>
        <span>{">"}</span>
      </div>
      <div>{components.currentCategory?.parent_name}f</div>
    </div>
  );
};

export default CategoryBar;
