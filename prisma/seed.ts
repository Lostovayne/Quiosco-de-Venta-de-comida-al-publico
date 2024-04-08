import colors from "colors";
import { categories } from "./data/categories";
import { products } from "./data/products";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

/**
 * Seeds the database with categories and products.
 *
 * @returns {Promise<void>} A Promise that resolves when the database is successfully seeded, or rejects with an error.
 */
async function main(): Promise<void> {
  try {
    await Promise.all([
      prisma.category.createMany({
        data: categories as Prisma.CategoryCreateManyInput[],
      }),
      prisma.product.createMany({
        data: products as Prisma.ProductCreateManyInput[],
      }),
    ]);

    console.log(colors.magenta("Database seeded successfully"));
  } catch (error) {
    console.log(colors.red("Error while seeding database: "), error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
