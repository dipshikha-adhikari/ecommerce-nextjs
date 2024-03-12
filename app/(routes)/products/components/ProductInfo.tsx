import Button from "@/components/elements/Button";
import Image from "next/image";

const ProductInfo = () => {
  return (
    <div className="grid gap-sm py-sm place-items-center md:justify-center md:flex">
      <section className="flex-1">
        <Image
          alt="img"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcMw9kUfVJZn_LD6eXlj2ULKXY0aN3r18Wg&usqp=CAU"
          }
          width={500}
          height={300}
          className="h-[250px] max-w-sm w-full object-cover"
        />
      </section>
      <section className="grid flex-1 gap-sm place-items-center">
        <div className="grid gap-xs">
          <h2 className="font-bold text-xl">
            1990S TIGERSTRIPE U.S ARMY SPECIAL FORCES TROUSERS - W30 L31
          </h2>
          <p>$14</p>
          <p>Estimated Delivery Date Between 15th, Feb 2024 - 17th, Feb 2024</p>
          <div className="grid gap-xs place-items-center">
            <Button variant="black" className="uppercase">
              Add TO BAG
            </Button>
            <Button variant="primary" className="uppercase">
              Buy
            </Button>
          </div>
          <div className="grid gap-xs">
            <header className="uppercase">Description</header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, deleniti provident?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
