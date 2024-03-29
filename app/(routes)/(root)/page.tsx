import { getCategories } from "@/actions/get-categories";
import Categories from "@/components/collections/categories";
import MaxWidth from "@/components/layout/max-width-layout";
import Padding from "@/components/layout/padding";
import HeroSlider from "./components/hero-slider";
import FeaturedProducts from "./components/featured-products";
import HotCollections from "./components/hot-collections";

const Page = async () => {
  const categories = await getCategories();
  return (
    <MaxWidth>
      <div className="flex md:p-sm  gap-xs">
        <Categories categories={categories} />
        <HeroSlider />
      </div>
      <Padding>
        <main className="grid gap-xs relative">
          <FeaturedProducts />
          <HotCollections />
        </main>
      </Padding>
    </MaxWidth>
  );
};

export default Page;
