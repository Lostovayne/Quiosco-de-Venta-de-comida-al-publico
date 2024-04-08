import { ProductCard } from "@/components/products/ProductCard";
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

type OrderPageProps = {
  params: {
    category: string;
  };
};

async function getproducts(category: string): Promise<Promise<Product[]>> {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

const OrderPage = async ({ params: { category } }: OrderPageProps): Promise<JSX.Element> => {
  const products = (await getproducts(category)) as Product[];
  return (
    <>
      <h1 className="my-10 font-semibold text-2xl" >Elige y personaliza tu pedido a continuación</h1>

      <div className="items-start gap-3 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4">
        {products.map(
          (product: Product): JSX.Element => (
            <ProductCard key={product.id} {...product} />
          )
        )}
      </div>
    </>
  );
};
export default OrderPage;
