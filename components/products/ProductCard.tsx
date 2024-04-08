import { formatCurrency } from "@/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

export const ProductCard = ({ ...product }: Product): JSX.Element => {
  return (
    <article className="flex flex-col justify-between bg-white shadow border rounded-xl max-w-[500px] h-[500px]">
      <header className="relative rounded-t-xl overflow-hidden">
        <Image
          priority
          src={`/products/${product.image}.jpg`}
          height={400}
          width={400}
          quality={80}
          className="rounded-t-xl w-full h-72 object-cover"
          alt={product.name}
        />
      </header>

      <section className="flex flex-col flex-1 justify-between p-5">
        <h2 className="line-clamp-2 font-bold text-pretty text-xl">{product.name}</h2>
        <footer className="">
          <p className="mt-5 font-black text-2xl text-amber-500">{formatCurrency(product.price)}</p>
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 mt-5 px-4 py-2 rounded w-full font-bold text-white uppercase"
          >
            Add to cart
          </button>
        </footer>
      </section>
    </article>
  );
};
